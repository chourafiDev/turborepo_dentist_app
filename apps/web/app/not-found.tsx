import { ArrowRightIcon } from "@/utils/assets";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-h-[100vh] overflow-hidden">
      <section className="bg-mistyBlue/20 dark:bg-dark-3 h-screen w-full md:p-12 p-3 relative flex items-center gap-x-16">
        <div className="bg-dark dark:bg-dark flex-1 w-full md:p-6 p-3 rounded-3xl">
          <p className="text-white text-center font-bold text-2xl">
            ...404 error...
          </p>
          <p className="text-white text-center font-bold text-2xl mb-5">
            Sorry, page not found
          </p>
          <p className="text-white/80 text-center font-medium text-lg mt-10">
            Go to other sections to learn more about Dentist Clinic
          </p>

          <ul className="w-full mt-10 space-y-2">
            <li className="w-full">
              <Link
                href="/"
                className="group w-full bg-mistyBlue/10 dark:bg-mistyBlue/10 p-6 rounded-3xl flex justify-between items-center"
              >
                <span className="group-hover:text-brand duration-200 ease-linear text-white font-semibold text-xl">
                  Home
                </span>{" "}
                <div className="size-10 flex justify-center items-center border border-white dark:border-white text-white dark:text-white group-hover:text-white rounded-full group-hover:bg-brand group-hover:border-brand duration-200 ease-linear">
                  <ArrowRightIcon className="size-6" />
                </div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/"
                className="group w-full bg-mistyBlue/10 dark:bg-mistyBlue/10 p-6 rounded-3xl flex justify-between items-center"
              >
                <span className="group-hover:text-brand duration-200 ease-linear text-white font-semibold text-xl">
                  Contact Us
                </span>{" "}
                <div className="size-10 flex justify-center items-center border border-white dark:border-white text-white dark:text-white group-hover:text-white rounded-full group-hover:bg-brand group-hover:border-brand duration-200 ease-linear">
                  <ArrowRightIcon className="size-6" />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:flex hidden items-center">
          <p className="dark:text-white text-dark font-extrabold text-[20rem]">
            4
          </p>
          <p className="dark:text-white text-dark font-extrabold text-[20rem]">
            0
          </p>
          <p className="dark:text-white text-dark font-extrabold text-[20rem]">
            4
          </p>
        </div>
      </section>
    </main>
  );
}
