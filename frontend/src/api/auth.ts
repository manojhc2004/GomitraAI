import { apiClient, getApiErrorMessage } from "@/api/client";
import { API_PREFIX } from "@/api/config";

export interface User {
  id: string;
  name: string;
  email: string;
  profile_image: string | null;
  is_verified: boolean;
  role: string;
  is_active: boolean;
  created_at: string;
  language_preference?: "en" | "kn" | string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface MessageResponse {
  message: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export async function registerUser(payload: RegisterPayload): Promise<User> {
  const { data } = await apiClient.post<User>(`${API_PREFIX}/auth/register`, payload);
  return data;
}

export async function loginUser(payload: LoginPayload): Promise<TokenResponse> {
  const { data } = await apiClient.post<TokenResponse>(`${API_PREFIX}/auth/login`, payload);
  return data;
}

export async function fetchCurrentUser(): Promise<User> {
  const { data } = await apiClient.get<User>(`${API_PREFIX}/auth/me`);
  return data;
}

export async function forgotPassword(email: string): Promise<MessageResponse> {
  const { data } = await apiClient.post<MessageResponse>(`${API_PREFIX}/auth/forgot-password`, {
    email,
  });
  return data;
}

export async function verifyOtp(email: string, otp: string): Promise<MessageResponse> {
  const { data } = await apiClient.post<MessageResponse>(`${API_PREFIX}/auth/verify-otp`, {
    email,
    otp,
  });
  return data;
}

export async function resetPassword(
  email: string,
  otp: string,
  new_password: string,
): Promise<MessageResponse> {
  const { data } = await apiClient.post<MessageResponse>(`${API_PREFIX}/auth/reset-password`, {
    email,
    otp,
    new_password,
  });
  return data;
}

export async function updateLanguagePreference(language: "en" | "kn"): Promise<User> {
  const { data } = await apiClient.patch<User>(`${API_PREFIX}/auth/language`, { language });
  return data;
}

export { getApiErrorMessage };
