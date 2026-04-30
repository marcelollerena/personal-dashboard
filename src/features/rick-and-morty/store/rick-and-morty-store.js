import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRickAndMortyStore = create(
  persist(
    (set) => ({
      page: 1,
      search: "",

      setPage: (page) => set({ page }),
      setSearch: (search) => set({ search }),
    }),

    {
      name: "pagination-storage",
    },
  ),
);
