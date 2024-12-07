import LoginForm from "@/components/auth/LoginForm";
import { AppLogo, dental } from "@/utils/assets";
import Image from "next/image";

const page = () => {
  return (
    <main className="h-screen flex bg-[#F6F9FE] dark:bg-dark p-5">
      <div className="flex-1 px-20 flex flex-col items-center justify-center">
        <AppLogo className="w-56 h-20 mb-6" />
        <div className="bg-white dark:bg-dark-3 w-full p-8 rounded-xl">
          <div className="mb-6 pb-4 border-b border-dashed border-mistyBlue/10">
            <h1 className="text-center text-dark-2 dark:text-white text-2xl font-bold mb-1">
              Sign In
            </h1>
            <p className="text-center text-dark-2/50 dark:text-white/60 text-sm font-medium">
              Welcome back! Please enter your details
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
      <div className="flex-1 flex  flex-col justify-between h-full relative bg-brand rounded-xl px-16 py-12">
        <div>
          <h1 className="text-white text-[2.5rem] leading-10 font-semibold text-center mb-6">
            Welcome back! Please sign in to your{" "}
            <span className="underline">Dental</span> account
          </h1>
          <p className="text-white/90 text-center text-base">
            Welcome back! Please sign in to your Dental account to access your
            personalized dashboard.
          </p>
        </div>

        <div className="rounded-2xl relative h-56 w-full">
          <div className="bg-brand/30 z-10 absolute w-full h-full top-0 right-0"></div>

          <Image
            alt="dental"
            src={dental}
            fill
            className="absolute object-cover bg-center rounded-2xl"
            placeholder="blur"
          />

          <div className="rounded-b-2xl z-20 bg-brand absolute top-0 left-1/2 transform -translate-x-1/2 px-6 py-1 before:absolute before:w-8 before:h-8 before:bg-transparent before:-left-8 before:bottom-1 before:rounded-tr-2xl before:shadow-[9px_-9px_0_#1c84ee] dark:before:shadow-[9px_-9px_0_#1c84ee] after:absolute after:w-8 after:h-8 after:bg-transparent after:-right-8 after:bottom-1 after:rounded-tl-2xl after:shadow-[-9px_-9px_0_#1c84ee] dark:after:shadow-[-9px_-9px_0_#1c84ee]">
            <p className="text-white text-lg group-hover:text-brand font-semibold">
              Dentist Clinic
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
