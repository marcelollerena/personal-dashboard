import { createBrowserRouter } from "react-router";

import { Home } from "../app/home/home";
import { Todo } from "../app/todo/todo";
import { Login } from "../app/login/login";
import { AboutMe } from "../app/about-me/about-me";
import { TodoDetail } from "../app/todo/todo-page";
import { Character } from "../app/rick-and-morty/character";
import { RickAndMorty } from "../app/rick-and-morty/rick-and-morty";
import { DashboardLayout } from "../common/layouts/dashboard-layout";
import { ZustandExample } from "../app/zustand-example/zustand-example";
import { ProtectedRoute } from "../features/auth/components/protected-route";
import { PeruMap } from "../app/peru-map/peru-map";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: "about-me",
            Component: AboutMe,
          },
          {
            path: "todos",
            Component: Todo,
          },
          {
            path: "todos/:id",
            Component: TodoDetail,
          },
          {
            path: "zustand-example",
            Component: ZustandExample,
          },
          {
            path: "rick-and-morty",
            Component: RickAndMorty,
          },
          {
            path: "rick-and-morty/character/:characterId",
            Component: Character,
          },
          {
            path: "peru-map",
            Component: PeruMap,
          },
        ],
      },
    ],
  },
]);
