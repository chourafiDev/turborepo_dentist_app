import ListStaff from "@/components/staff/ListStaff";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddSquareIcon } from "@/utils/assets";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex justify-between items-center">
          <CardTitle>Staff Summary</CardTitle>

          <Link
            href="/staff/create"
            className="btn bg-brand text-white hover:bg-brand/80"
          >
            Add Staff
            <AddSquareIcon className="size-5 text-white" />
          </Link>
        </CardHeader>

        <CardContent>
          <ListStaff />
        </CardContent>
      </Card>
    </div>
  );
}
