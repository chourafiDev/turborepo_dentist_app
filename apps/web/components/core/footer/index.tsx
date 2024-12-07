import React from "react";

const index = () => {
  return (
    <div className="px-6 py-4 bg-white dark:bg-[#1b1c30]">
      <p className="text-center text-sm text-dark-2/50 dark:text-mistyBlue font-medium">
        Copyright &copy;{" "}
        <span className="text-dark-2 dark:text-white font-semibold">
          {new Date().getFullYear()}
        </span>{" "}
        All rights reserved
      </p>
    </div>
  );
};

export default index;
