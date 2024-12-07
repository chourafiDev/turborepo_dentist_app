import Statistics from "@/components/dashboard/statistics";
import Header from "@/components/dashboard/header";
import AppointmentsPatients from "@/components/dashboard/AppointmentsPatients";
import UpcomingAppointments from "@/components/dashboard/UpcomingAppointments";
import Patients from "@/components/dashboard/patients";
import Revenue from "@/components/dashboard/Revenue";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Header />
      <Statistics />
      <div className="flex  lg:flex-row flex-col gap-2 items-start my-6">
        <div className="lg:w-[65%] w-full space-y-3">
          <AppointmentsPatients />
          <Revenue />
        </div>
        <UpcomingAppointments />
      </div>
      <Patients />
    </div>
  );
}
