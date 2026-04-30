import { RouterProvider } from "react-router";

import { router } from "./router/router";
import { UserProvider } from "./common/providers/user-provider/user-provider";

export function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
