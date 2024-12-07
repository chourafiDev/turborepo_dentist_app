import ListAppointments from "@/components/appointment/ListAppointments";
import AddAppointment from "@/components/appointment/AddAppointment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex flex-wrap gap-2 justify-between items-center">
          <CardTitle>Schedule Summary</CardTitle>

          <AddAppointment />
        </CardHeader>

        <CardContent>
          <ListAppointments />
        </CardContent>
      </Card>
    </div>
  );
}
