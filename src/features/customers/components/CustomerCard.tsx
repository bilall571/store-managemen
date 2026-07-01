import type { Customer } from "../types/customer";

interface Props {
  customer: Customer;
}

export default function CustomerCard({ customer }: Props) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border">
      <h2 className="font-semibold text-lg">
        {customer.fullName}
      </h2>

      <p className="text-gray-500">
        {customer.phone}
      </p>

      <p className="mt-2 font-bold text-red-600">
        {customer.totalDebt.toLocaleString()} so'm
      </p>
    </div>
  );
}