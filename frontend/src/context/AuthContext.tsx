import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  fetchCurrentUser,
  loginUser,
  registerUser,
  type LoginPayload,
  type RegisterPayload,
  type User,
} from "@/api/auth";
import { getApiErrorMessage, handleUnauthorized, isUnauthorizedError } from "@/api/client";
import { clearAccessToken, getAccessToken, setAccessToken } from "@/auth/tokenStorage";
import { clearWelcomePending, markWelcomePending } from "@/auth/welcomeSession";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isBootstrapping: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  const logout = useCallback(() => {
    clearAccessToken();
    clearWelcomePending();
    setUser(null);
  }, []);

  const refreshUser = useCallback(async () => {
    const token = getAccessToken();
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
    } catch (error) {
      if (isUnauthorizedError(error)) {
        handleUnauthorized();
        setUser(null);
        return;
      }
      throw new Error(getApiErrorMessage(error, "Unable to load your profile."));
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const bootstrap = async () => {
      const token = getAccessToken();
      if (!token) {
        if (!cancelled) {
          setUser(null);
          setIsBootstrapping(false);
        }
        return;
      }

      try {
        const currentUser = await fetchCurrentUser();
        if (!cancelled) setUser(currentUser);
      } catch (error) {
        if (isUnauthorizedError(error)) {
          handleUnauthorized();
        }
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setIsBootstrapping(false);
      }
    };

    void bootstrap();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (payload: LoginPayload) => {
    const tokenResponse = await loginUser(payload);
    setAccessToken(tokenResponse.access_token);
    const currentUser = await fetchCurrentUser();
    markWelcomePending();
    setUser(currentUser);
  }, []);

  const register = useCallback(async (payload: RegisterPayload) => {
    await registerUser(payload);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isBootstrapping,
      login,
      register,
      logout,
      refreshUser,
    }),
    [user, isBootstrapping, login, register, logout, refreshUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
