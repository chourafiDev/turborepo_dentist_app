import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BigCalendar from "@/components/big-calendar";

export default function Calendar() {
  return (
    <div className="w-full h-full p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex flex-wrap gap-2 justify-between items-center">
          <CardTitle>Handle your Planner</CardTitle>
        </CardHeader>

        <CardContent>
          <BigCalendar />
        </CardContent>
      </Card>
    </div>
  );
}
