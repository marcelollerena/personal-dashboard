import { useState } from "react";
import { UserContext } from "./user-context";

const userObj = {
  id: 1,
  name: "Marcelo",
  avatar: "https://avatars.githubusercontent.com/u/83110496?s=80&v=4",
  role: "admin",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userObj);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
