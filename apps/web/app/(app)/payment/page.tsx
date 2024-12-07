import AddPayment from "@/components/payment/AddPayment";
import ListPayments from "@/components/payment/ListPayments";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex flex-wrap gap-2 justify-between items-center">
          <CardTitle>Payment Summary</CardTitle>

          <AddPayment />
        </CardHeader>

        <CardContent>
          <ListPayments />
        </CardContent>
      </Card>
    </div>
  );
}
