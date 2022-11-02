import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import wallet1 from "../../assets/wallet1.png";
import wallet2 from "../../assets/wallet2.png";
import wallet3 from "../../assets/wallet3.png";
import { useNavigate } from "react-router-dom";

const Header = ({ headType, addT, addYY }) => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [addy, setAddy] = useState("");
  const connect = async () => {
    if (window.fletch) {
      // Check if Fletch Wallet is installed.
      try {
        let account = await window.fletch.connect();
        console.log(account); // { Address: "0x123456789abcdef...", PublicKey: "0x123456789abcdef..." }
        setModalOpen(false);
        let connected = await window.fletch.isConnected();
        if (connected) {
          setConnected(true);
          setAddress(account?.Address);
          setAddy("fletch");
        }
      } catch (error) {
        console.log(error); // user rejected request.
      }
    } else {
      window.open("http://fletchwallet.io", "_blank");
    }
  };
  const connectMartian = async () => {
    if (window.martian) {
      // Check if Martian Wallet is installed.
      try {
        let account = await window.martian.connect();
        console.log(account); // { Address: "0x123456789abcdef...", PublicKey: "0x123456789abcdef..." }
        setAddy("martian");
        setModalOpen(false);
        setAddress(account?.address);
        setConnected(true);
      } catch (error) {
        console.log(error); // user rejected request.
      }
    } else {
      window.open("http://fletchwallet.io", "_blank");
    }
  };
  const connectPetra = async () => {
    if (window.aptos) {
      // Check if Petra Wallet is installed.
      try {
        const response = await window.aptos.connect();
        console.log(response); // { address: string, address: string }
        const account = await window.aptos.account();
        setAddy("petra");
        setModalOpen(false);
        setConnected(true);
        setAddress(response?.address);

        console.log(account); // { address: string, address: string }
      } catch (error) {
        // { code: 4001, message: "User rejected the request."}
      }
    } else {
      window.open("http://fletchwallet.io", "_blank");
    }
  };
  return (
    <>
      <div className="w-full h-[9vh] bg-[#4c4c4c]/10 text-white flex justify-between px-12 fixed z-50">
        <div className="flex items-center justify-between w-[70%]">
          <div>
            <p className="font-Pacifico">CrazyToast</p>
          </div>
          <div className="hidden lg:flex w-[80%] justify-around font-Alkalami">
            <p className=" cursor-pointer">LORE</p>
            <p className=" cursor-pointer">RoadMap</p>
            <p className=" cursor-pointer">About</p>
          </div>
        </div>
        {headType ? (
          <div className="flex items-center font-Alkalami">
            <p
              className="bg-[#e8c99a] p-2 text-black px-[1rem] rounded cursor-pointer transition-all hover:px-[1.2rem]"
              onClick={() => navigate("/")}
            >
              {`User: ${addYY?.substring(0, 5)}...
            ${addYY?.substring(addYY.length, addYY.length - 5)}`}
            </p>
          </div>
        ) : (
          <div className="flex items-center font-Alkalami">
            {connected ? (
              <p
                className="bg-[#e8c99a] p-2 text-black px-[1rem] rounded cursor-pointer transition-all hover:px-[1.2rem]"
                onClick={() =>
                  navigate("/dashboard", {
                    state: { address: address, addyType: addy },
                  })
                }
              >
                {`User: ${address?.substring(0, 5)}...
            ${address?.substring(address.length, address.length - 5)}`}
              </p>
            ) : (
              <p
                className="bg-[#e8c99a] p-2 text-black px-[1rem] rounded cursor-pointer transition-all hover:px-[1.2rem]"
                onClick={() => setModalOpen(true)}
              >
                Connect Wallet
              </p>
            )}
          </div>
        )}
      </div>
      <div
        className={
          modalOpen
            ? `absolute text-white p-[2rem] lg:w-[40%] bg-[#000] z-40 m-auto left-0 right-0 mt-[10rem] shadow-2xl w-[90%]`
            : `hidden`
        }
      >
        <XMarkIcon
          className="w-[20px] cursor-pointer"
          onClick={() => setModalOpen(false)}
        />
        <p className="text-center text-[22px] font-[500]">Select Wallet</p>
        <p className="text-center mt-[2rem] text-[13px]">
          By connecting a wallet, you agree to AptTrack Terms of Services and
          acknowledge that you have read and understood the Nansen Privacy
          Policy.
        </p>
        <div className="flex flex-col items-center mt-[2rem] w-full space-y-4">
          <div
            className="flex items-center p-1 pl-[3rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[4rem] transition-all"
            onClick={connectPetra}
          >
            <img
              src={wallet3}
              alt="wallet"
              className="rounded-full w-[2rem] mr-3"
            />
            <p className="text-[14px]">Petra Wallet</p>
          </div>
          <div
            className="flex items-center p-1 pl-[2rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[3rem] transition-all"
            onClick={connectMartian}
          >
            <img
              src={wallet1}
              alt="wallet"
              className="rounded-full w-[2rem] mr-3"
            />
            <p className="text-[14px]">Martian Wallet</p>
          </div>
          <div
            className="flex items-center p-1 pl-[3rem] pr-[3rem] border-2 border-[#00FFF0] cursor-pointer hover:pl-[4rem] transition-all"
            onClick={connect}
          >
            <img
              src={wallet2}
              alt="wallet"
              className="rounded-full w-[2rem] mr-3"
            />
            <p className="text-[14px]">Fletch Wallet</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
