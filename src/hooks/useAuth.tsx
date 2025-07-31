import { useAuthStore } from "../store/auth";

export const useAuth = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  return { isAuthenticated, login, logout };
};