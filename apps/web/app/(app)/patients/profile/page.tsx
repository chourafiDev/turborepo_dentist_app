import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LetterIcon,
  MapIcon,
  PhoneIcon,
  StethoscopeIcon,
  user,
} from "@/utils/assets";
import Image from "next/image";
import { PiGenderMaleDuotone } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <div className="flex md:flex-row flex-col gap-2 mb-4">
        <Card className="p-4">
          <div className="flex items-center gap-5 mb-6 border-b border-dashed border-mistyBlue/30 pb-6">
            <div className="rounded-xl size-24 relative overflow-hidden">
              <Image
                alt="user"
                src={user}
                fill
                className="absolute object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h1 className="font-semibold text-lg dark:text-white text-dark-2">
                  Cive Slauw
                </h1>
                <p className="text-dark-2/60 dark:text-white/80 font-medium text-sm">
                  #P-00016
                </p>
              </div>
              <h3 className="dark:text-mistyBlue/80 text-dark-2/50 font-medium text-sm">
                Check In date 21 August 2020, 12:45 AM
              </h3>
              <div className="border border-dashed border-green mt-3 inline-flex items-center text-sm gap-2 bg-green/10 font-medium px-3 py-1 rounded-full text-green">
                <PiGenderMaleDuotone className="text-xl" /> <p>Male</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
              <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                <MapIcon className="size-5 text-mistyBlue m-auto" />
              </div>
            </div>
            <div className="flex-1">
              <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                Address
              </p>
              <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
              <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                <PhoneIcon className="size-5 text-mistyBlue m-auto" />
              </div>
            </div>
            <div className="flex-1">
              <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                Phone
              </p>
              <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                01 23 45 67 89
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
              <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                <LetterIcon className="size-5 text-mistyBlue m-auto" />
              </div>
            </div>
            <div className="flex-1">
              <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                Email
              </p>
              <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                example@gmail.com
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader className="border-0 pb-0 flex justify-between items-center">
            <CardTitle>Disease History</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[19rem] w-ull">
              <div className="space-y-6 relative">
                <div className="flex items-center gap-4">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Diabetes
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Sleep Problem
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Dental Care
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Diabetes
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Dental Care
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Dental Care
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Dental Care
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 relative before:absolute before:h-4 before:border-l before:border-dashed before:border-mistyBlue/40 before:left-6 before:-top-5">
                  <div className="size-12 z-10 p-[2px] rounded-full border border-dashed border-mistyBlue/30">
                    <div className="rounded-full w-full h-full bg-[#fafafa] dark:bg-[#242442] flex items-center">
                      <StethoscopeIcon className="size-5 text-mistyBlue m-auto" />
                    </div>
                  </div>
                  <div>
                    <p className="dark:text-white text-dark-2 font-medium text-[15px]">
                      Dental Care
                    </p>
                    <p className="dark:text-mistyBlue text-dark-2/50 font-medium text-sm">
                      Sat, 23 Jul 2020, 01:24 PM
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Note for patient</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="dark:text-white/70 text-dark-2/70 font-normal text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
