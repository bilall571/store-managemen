import { create } from "zustand";
import type { Customer } from "../features/customers/types/customer";

interface CustomerStore {
  customers: Customer[];

  addCustomer: (customer: Customer) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  customers: [
    {
      id: crypto.randomUUID(),
      fullName: "Alisher Navoiy",
      phone: "+998996767676",
      totalDebt: 670000,
    },
  ],

  addCustomer: (customer) =>
    set((state) => ({
      customers: [...state.customers, customer],
    })),
}));