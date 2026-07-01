import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="pb-20">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

