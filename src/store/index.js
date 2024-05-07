import { create } from "zustand";

export const useAuthStore = create((set) => ({
  loggedIn: false,
  user: null,
  loginUser: (data, token) => {
    set((state) => ({ loggedIn: true }));
    set((state) => ({ user: data }));
    localStorage.setItem("mt-token", token);
  },
  logoutUser: () => {
    set((state) => ({ loggedIn: false }));
    localStorage.removeItem("mt-token");
  },
}));
