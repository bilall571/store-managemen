import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import BottomNav from "../components/layout/BottomNav";

export default function MainLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-slate-100 shadow-lg">
      <Header />

      <main className="pb-20">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}