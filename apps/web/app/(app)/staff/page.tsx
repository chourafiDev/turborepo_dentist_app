import ListStaff from "@/components/staff/ListStaff";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddSquareIcon, FolderIcon } from "@/utils/assets";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex justify-between md:items-center items-start md:flex-row flex-col md:gap-0 gap-3">
          <CardTitle>Staff Summary</CardTitle>

          <div className="flex items-center gap-x-2">
            <Link
              href="/staff/create"
              className="btn bg-brand text-white hover:bg-brand/80"
            >
              Add Staff
              <AddSquareIcon className="size-5 text-white" />
            </Link>
            <Button variant={"dashed"}>
              <FolderIcon className="size-5" /> Export to Excel
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <ListStaff />
        </CardContent>
      </Card>
    </div>
  );
}
