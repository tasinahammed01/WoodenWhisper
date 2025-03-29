import React from "react";

const Button = ({title}) => {
  return (
    <div className="w-[5.5%] ">
      <a
        href="#"
        className="relative text-gray-800 text-lg font-medium flex items-center group"
      >
       {title}
        <span className="ml-1 text-xl transition-all duration-300 group-hover:rotate-45 ">↗</span>
        <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-0"></span>
      </a>
    </div>
  );
};

export default Button;
