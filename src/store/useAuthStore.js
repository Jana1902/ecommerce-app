import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      data = { ...data, expiresInMins: 1200 };
      const res = await axiosInstance.post("/auth/login", JSON.stringify(data));
      set({ authUser: res.data });
      toast.success("Login Successful");
    } catch (error) {
      console.log(`Error in checkAuth: ${error}`);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/users/add", JSON.stringify(data));
      set({ authUser: res.data });
      toast.success("Sign Up Successful");
    } catch (error) {
      console.log(`Error in checkAuth: ${error}`);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
}));
