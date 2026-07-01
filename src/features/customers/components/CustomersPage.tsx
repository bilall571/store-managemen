import { Page, Input, Button } from "../../components/ui";
import CustomerList from "../../features/customers/components/CustomerList";

export default function CustomersPage() {
  return (
    <Page title="Mijozlar">
      <Input placeholder="🔍 Mijozni qidiring..." />

      <Button>+ Yangi mijoz</Button>

      <CustomerList />
    </Page>
  );
}
