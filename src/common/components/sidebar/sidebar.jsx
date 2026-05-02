import { NavLink } from "react-router";
import { UserSection } from "./user-section";
import { LogOut } from "lucide-react";
import { useAuthStore } from "../../../features/auth/store/auth-store";

const navigationItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Me",
    to: "/about-me",
  },
  {
    label: "Todos",
    to: "/todos",
  },
  {
    label: "Zustand Example",
    to: "/zustand-example",
  },
  {
    label: "Rick and Morty",
    to: "/rick-and-morty",
  },
  {
    label: "Peruvian map",
    to: "/peru-map",
  },
];

export default function Sidebar() {
  const { logout } = useAuthStore();

  return (
    <aside className="lg:w-80 lg:min-h-screen bg-slate-950/85 backdrop-blur-xl border-white/10 border-b lg:border-r lg:border-b-0">
      <div className="relative flex h-full flex-col px-5 py-6 lg:px-6">
        <div className="mt-8">
          <UserSection />
        </div>

        <div className="mt-8">
          <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
            Navigation
          </h2>

          <nav className="mt-4 space-y-2 gap-4 flex lg:flex-col">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400 text-slate-950"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
                end={item.to === "/"}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          className="border border-red-500/50 rounded-lg p-2 text-red-500/50 flex gap-2 absolute bottom-6 w-40"
          onClick={logout}
        >
          <LogOut /> <p>Logout</p>
        </button>
      </div>
    </aside>
  );
}
