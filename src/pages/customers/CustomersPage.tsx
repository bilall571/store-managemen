import CustomerList from "../../features/customers/components/CustomerList";

export default function CustomersPage() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Mijozlar</h1>
      <CustomerList />
    </div>
  );
}