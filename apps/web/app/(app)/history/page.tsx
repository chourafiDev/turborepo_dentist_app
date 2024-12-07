import ListHistory from "@/components/history/ListHistory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0">
          <CardTitle>History Summary</CardTitle>
        </CardHeader>

        <CardContent>
          <ListHistory />
        </CardContent>
      </Card>
    </div>
  );
}
