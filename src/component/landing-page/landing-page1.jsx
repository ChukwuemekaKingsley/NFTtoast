import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import image1 from "../../assets/66.png";
import image2 from "../../assets/20.png";
import Typewriter from "typewriter-effect";
import aptos from "../../assets/kaa.png";

const LandingPage = () => {
  return (
    <div className="lg:h-[100vh] pt-[9vh] w-full flex px-[5rem] flex-wrap space-y-10 lg:space-y-0">
      <div className="lg:w-2/4 w-full h-[100%] text-white flex flex-col lg:pt-[10rem] pt-[5rem]">
        <img
          src={aptos}
          alt="aptosimage"
          className="w-[200px] absolute z-[-1] top-[8vh] left-0"
        />
        <img
          src={aptos}
          alt="aptosimage"
          className="w-[200px] absolute z-[-1] bottom-0 right-0"
        />
        <div className=" space-y-5 bg-[#4c4c4c]/30 py-[4rem] mt-2">
          <div className="text-[35px] text-center font-Alkalami">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to CrazyToast NFT")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
          <p className="text-center px-12">
            Crazy toast is a group of builders coming to the aptos ecosystem to
            build, make friends and explore more oppurtunites the blockchain has
            to offer
          </p>
          <div className="px-12 flex font-Cinzel font-semibold justify-around pt-10">
            <p>Dive into our world</p>
            <p>Discover more</p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/4 w-full h-[80%] flex items-center justify-center">
        <div className="lg:w-2/4 w-full shadow-2xl shadow-[#e8c99a]">
          <ReactCompareSlider
            className="rounded-lg"
            itemOne={<ReactCompareSliderImage src={image1} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={image2} alt="Image two" />}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
