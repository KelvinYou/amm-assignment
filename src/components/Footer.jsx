import React from "react";

import logo from "../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-1 gradient-bg-footer">


    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">TARUMT Studio Welcome you, let us develop a good blockchain ecosystem!</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@TARUMTStudio.com</p>
      <p className="text-white text-sm text-center font-medium mt-2">Develop by:</p>
      <p className="text-white text-sm text-center font-medium">Kelvin You Kok Eng</p>
      <p className="text-white text-sm text-center font-medium">Cayden Lai Woon Jie</p>
      <p className="text-white text-sm text-center font-medium">Wong Ken Yee</p>
      <p className="text-white text-sm text-center font-medium">Yap Hong Kiat</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@TARUMTStudio2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
