import { Home, PlusCircle, Users, Settings } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        <Home size={22} />
        <PlusCircle size={22} />
        <Users size={22} />
        <Settings size={22} />
      </div>
    </nav>
  );
}
