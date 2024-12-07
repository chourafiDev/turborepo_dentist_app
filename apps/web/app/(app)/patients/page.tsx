import ListPatients from "@/components/patients/ListPatient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddSquareIcon } from "@/utils/assets";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex justify-between items-center">
          <CardTitle>Patients Summary</CardTitle>

          <Link
            href="/patients/create"
            className="btn bg-brand text-white hover:bg-brand/80"
          >
            Add Patient
            <AddSquareIcon className="size-5 text-white" />
          </Link>
        </CardHeader>

        <CardContent>
          <ListPatients />
        </CardContent>
      </Card>
    </div>
  );
}
