import React from "react";

const Landingpage3 = () => {
  return (
    <div className="lg:h-[100vh] pt-[10vh] w-full">
      <div>
        <p className="text-white text-center font-Cinzel text-3xl">
          OUR VALUES
        </p>
      </div>
      <div className="text-white flex-wrap flex justify-center pt-[4rem]">
        <div className="bg-[#e8c99a] hover:w-[36%] transition-all cursor-pointer w-[35%] h-[15vh] flex items-center justify-center rounded m-2">
          <p>Community</p>
          <p className="hidden hover:flex">Welcome to a demo text</p>
        </div>
        <div className="bg-[#e8c99a] hover:w-[36%] transition-all cursor-pointer w-[35%] h-[15vh] flex items-center justify-center rounded m-2">
          <p>Building</p>
          <p className="hidden hover:flex">Welcome to a demo text</p>
        </div>
        <div className="bg-[#e8c99a] peer hover:w-[36%] transition-all cursor-pointer w-[35%] h-[15vh] flex items-center justify-center rounded m-2">
          <p>Empowerment</p>
          <p className="hidden peer-hover:flex">Welcome to a demo text</p>
        </div>
        <div className="bg-[#e8c99a] hover:w-[36%] transition-all cursor-pointer w-[35%] h-[15vh] flex items-center justify-center rounded m-2">
          <p>Innovation</p>
          <p className="hidden hover:flex">Welcome to a demo text</p>
        </div>
      </div>
    </div>
  );
};

export default Landingpage3;
