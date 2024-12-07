import moment from "moment";

const Header = () => {
  return (
    <section className="py-4 border-b border-dashed border-mistyBlue/20">
      <div className="flex items-center gap-5">
        <div>
          <h1 className="text-dark-2/60 dark:text-mistyBlue font-medium">
            Welcome Back,
          </h1>
          <h2 className="text-dark-2 dark:text-white font-semibold text-2xl">
            Dr. Marouane
          </h2>
        </div>
        <div className="bg-mistyBlue/50 h-10 w-[1px]"></div>
        <div className="flex items-center gap-3">
          <div className="size-12 font-semibold rounded-full text-xl text-dark-2/80 dark:text-mistyBlue border border-mistyBlue/60 flex justify-center items-center">
            {moment().format("D")}
          </div>
          <div>
            <p className="text-dark-2/80 dark:text-mistyBlue text-sm font-medium">
              {moment().format("ddd")},
            </p>
            <p className="text-dark-2/80 dark:text-mistyBlue text-sm font-medium">
              {moment().format("MMMM")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
