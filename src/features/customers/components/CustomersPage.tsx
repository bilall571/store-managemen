import CustomerSearch from "../../features/customers/components/CustomerSearch";
import CustomerList from "../../features/customers/components/CustomerList";

export default function CustomersPage() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Mijozlar
        </h1>

        <button className="rounded-xl bg-blue-600 px-4 py-2 text-white">
          + Qo'shish
        </button>
      </div>

      <CustomerSearch />

      <CustomerList />
    </div>
  );
}