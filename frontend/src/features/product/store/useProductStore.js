import axios from "axios";
import { create } from "zustand";
import axiosInstance from "../../../config/axiosInstance";

const useBearStore = create((set) => ({
  // Data
  data: [],
  // Statement
  isLoading: false,
  // isLoaded: false,
  // Messages

  errorMessage: "",

  // Actions

  // Actions - C
  fetchAllProducts: async () => {
    try {
      set({ isLoading: true, errorMessage: "" });
      const products = await axiosInstance.get("/");
      if (products == null) {
        return [];
      } else {
        set({ data: products.data });
      }
    } catch (error) {
      set({
        errorMessage: `Failed to fetch all products ${error.message ?? " "}`,
      });
    } finally {
      set({ isLoading: false });
    }
  },
  // Actions - R

  // Actions - U

  // Actions - D
}));
