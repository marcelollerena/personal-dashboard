import { useContext } from "react";
import { UserContext } from "./user-context";

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser has to be used inside of UserProvider");
  }

  return context;
};
