"use client";

import { usePathname } from "next/navigation";

const HeaderTitle = () => {
  const pathname = usePathname();

  function handleActivePathname(pathname: string) {
    switch (pathname) {
      case "/":
        return "Dashboard Overview";
      case "/appointments/overview":
        return "Appointments Overview";
      case "/appointments/calendar":
        return "Appointments Calendar";
      case "/appointments/list":
        return "Appointments List";
      case "/payment":
        return "Payment List";
      case "/staff":
        return "Staff Overview";
      case "/staff/create":
        return "Create Staff";
      case "/patients":
        return "Patients Overview";
      case "/patients/create":
        return "Create Patients";
      case "/patients/profile":
        return "Patient Details";
      case "/categories":
        return "Categories Overview";
      case "/history":
        return "History Overview";
      default:
        break;
    }
  }

  return (
    <h1 className="text-dark-2 dark:text-white text-lg font-semibold">
      {handleActivePathname(pathname)}
    </h1>
  );
};

export default HeaderTitle;
