import { NavLink } from "react-router-dom";
import { Home, PlusCircle, Users, Settings } from "lucide-react";

const navItems = [
  {
    to: "/",
    icon: Home,
    label: "Bosh sahifa",
  },
  {
    to: "/customers",
    icon: Users,
    label: "Mijozlar",
  },
  {
    to: "/debts",
    icon: PlusCircle,
    label: "Qarzlar",
  },
  {
    to: "/settings",
    icon: Settings,
    label: "Sozlamalar",
  },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="mx-auto flex h-16 max-w-md">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center justify-center transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-blue-600"
                }`
              }
            >
              <Icon size={22} />
              <span className="mt-1 text-[11px]">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}