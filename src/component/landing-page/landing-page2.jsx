import React from "react";
import "./landing-page.css";
const LandingPage2 = () => {
  function createSlider3d() {
    const _ = (el) => document.querySelector(el);
    const slider = _(".slider3d");
    const left = _(".slider3d_left");
    const right = _(".slider3d_right");
    const wrap = slider.children[0];
    const all = wrap.children.length;
    const gCS = window.getComputedStyle(slider);
    const width = parseInt(gCS.width);
    const myR = width / (2 * Math.tan(Math.PI / all));
    const step = 360 / all;
    let angle = 0;

    for (let i = 0; i < all; i++) {
      const rad = (i * step * Math.PI) / 180;

      wrap.children[i].style.transform = `
			translate3d(${myR * Math.sin(rad)}px,
			0,${myR * Math.cos(rad)}px)
			rotateY(${i * step}deg)`;
    }

    function nav(d) {
      angle += step * d;
      wrap.style.transform = `
			translateZ(${-myR}px)
			rotateY(${angle}deg)`;
    }

    left.onclick = () => nav(1);
    right.onclick = () => nav(-1);
    nav(0);
  }

  window.addEventListener("resize", createSlider3d);
  window.addEventListener("load", createSlider3d);

  return (
    <div className="h-[100vh] flex flex-wrap-reverse">
      <div className="lg:w-[40%] w-full pt-[6rem] px-[2rem] lg:ml-[8rem] flex items-center justify-center flex-col">
        <div className="slider3d  shadow-2xl shadow-[#e8c99a]">
          <div className="slider3d_wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex pt-[3rem] text-white space-x-4">
          <div className=" cursor-pointer bg-[#e8c99a] px-4 rounded p-1 slider3d_left">
            {"<"}
          </div>
          <div className=" cursor-pointer bg-[#e8c99a] px-4 rounded p-1 slider3d_right">
            {">"}
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] w-full pl-[5rem] pr-[5rem] pt-[10rem]">
        <div className="pt-[6rem] space-y-5">
          <p className="text-[45px] text-white lg:w-2/3 w-full font-Pacifico">
            The Toast way
          </p>
          <p className="text-[20px] text-white lg:w-2/3 w-full font-Cinzel">
            There are three ways to ultimate success: The first way is to be
            kind. The second way is to be kind. The third way is to be kind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
