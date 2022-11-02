import React from "react";
import image1 from "../../assets/66.png";
import image2 from "../../assets/20.png";
import image3 from "../../assets/87.png";
import image4 from "../../assets/94.png";
const LandingPage4 = () => {
  return (
    <div className="lg:h-[100vh] flex flex-col justify-center space-y-10 items-center pt-[5rem] lg:pt-[5rem]">
      <div>
        <p className="text-4xl text-center text-white">The Team</p>
      </div>
      <div className="flex flex-wrap lg:w-2/4 w-full px-[1rem] mx-auto justify-around lg:justify-between">
        <div className="w-[150px] bg-[#e8c99a]">
          <img src={image1} alt="" className=" h-[150px]" />
          <p className="text-center font-semibold p-1">Toast Founder</p>
        </div>
        <div className="w-[150px] bg-[#e8c99a]">
          <img src={image2} alt="" className=" h-[150px]" />
          <p className="text-center font-semibold p-1">Toast Artist</p>
        </div>
        <div className="w-[150px] bg-[#e8c99a]">
          <img src={image3} alt="" className=" h-[150px]" />
          <p className="text-center font-semibold p-1">Toast Dev</p>
        </div>
        <div className="w-[150px] bg-[#e8c99a]">
          <img src={image4} alt="" className=" h-[150px]" />
          <p className="text-center font-semibold p-1">Toast Dev</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;
