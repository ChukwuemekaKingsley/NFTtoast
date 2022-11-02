import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/header";

const Dashboard = () => {
  const location = useLocation();
  let address = location.state.address;
  let addy = location.state.addyType;
  return (
    <>
      <Header headType={true} addYY={address} />
      <div className="h-[100vh] pt-[10vh]">
        <div className=" text-white flex flex-col items-center justify-center space-y-10">
          <div>
            <p className="text-3xl font-Alkalami">CrazyToast Utitlity</p>
            <p className="text-center p-2 text-gray-300">Choose One to enter</p>
          </div>
          <div className="flex lg:space-x-8 flex-wrap px-[2rem] justify-around">
            <div className="bg-[#e8c99a] cursor-pointer shadow-2xl m-1 hover:bg-[#d2b892] text-center h-[20vh] w-[200px] flex items-center justify-center rounded text-lg">
              <p>Dashboard System</p>
            </div>
            <div className="bg-[#e8c99a] cursor-pointer shadow-2xl m-1 hover:bg-[#d2b892] text-center h-[20vh] w-[200px] flex items-center justify-center rounded text-lg">
              <p>Minting Bot</p>
            </div>
            <div className="bg-[#e8c99a] cursor-pointer shadow-2xl m-1 hover:bg-[#d2b892] text-center h-[20vh] w-[200px] flex items-center justify-center rounded text-lg">
              <p>Airdrop Bot</p>
            </div>
            <div className="bg-[#e8c99a] cursor-pointer shadow-2xl m-1 hover:bg-[#d2b892] text-center h-[20vh] w-[200px] flex items-center justify-center rounded text-lg">
              <p>Sales Bot</p>
            </div>
            <div className="bg-[#e8c99a] cursor-pointer shadow-2xl m-1 hover:bg-[#d2b892] text-center h-[20vh] w-[200px] flex items-center justify-center rounded text-lg">
              <p>Stake NFT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
