import CustomerCard from "./CustomerCard";
import { customers } from "../data/customers";

export default function CustomerList() {
  return (
    <div className="space-y-3">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
        />
      ))}
    </div>
  );
}