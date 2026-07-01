import { useState } from "react";

export default function AddCustomerForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log({
      fullName,
      phone,
    });

    setFullName("");
    setPhone("");
  };

  return (
    <div className="space-y-3 rounded-xl border bg-white p-4">
      <input
        className="w-full rounded-lg border p-3"
        placeholder="Ism"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Telefon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white"
      >
        Saqlash
      </button>
    </div>
  );
}