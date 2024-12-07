"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import Complete from "@/components/staff/add-staff/StepForms/Complete";
import PatientInfo from "@/components/staff/add-staff/StepForms/PatientInfo";
import PatientImage from "@/components/staff/add-staff/StepForms/PatientImage";
import AdvancedDetails from "@/components/staff/add-staff/StepForms/AdvancedDetails";
import Steps from "@/components/staff/Steps";
import { SquareArrowLeftIcon } from "@/utils/assets";
import Link from "next/link";

export default function Home() {
  const { currentStep } = useStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
    }))
  );

  function renderFormByStep(step: number) {
    switch (step) {
      case 1:
        return <PatientInfo />;
      case 2:
        return <AdvancedDetails />;
      case 3:
        return <PatientImage />;
      case 4:
        return <Complete />;
      default:
        break;
    }
  }
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Link href="/staff">
              <SquareArrowLeftIcon className="size-7 dark:text-mistyBlue text-mistyBlue/70 hover:text-brand dark:hover:text-brand duration-200 ease-linear" />
            </Link>
            <div className="h-5 w-[1px] border-l border-mistyBlue/40"></div>
            Add New Staff
          </CardTitle>
        </CardHeader>

        <CardContent className="flex lg:flex-row flex-col py-6 gap-8 lg:h-[450px] h-auto overflow-hidden">
          <Steps />
          {renderFormByStep(currentStep)}
        </CardContent>
      </Card>
    </div>
  );
}