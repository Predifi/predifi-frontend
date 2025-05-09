import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome: React.FC = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e: React.FormEvent) => {
    const { amount, keyword, message } = formData;
    e.preventDefault();
    if (!amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-12 py-12 px-4 max-w-7xl mx-auto">
        {/* Left Section - Text */}
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Stake your insight, <br /> not your identity.
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            PrediFi is a fully decentralized prediction protocol. No KYC, no permissions — just predictions backed by reputation and rewarded with PRD.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              On-Chain
            </div>
            <div className={companyCommonStyles}>No KYC</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Transparent
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Reputation
            </div>
            <div className={companyCommonStyles}>TWAP Oracle</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Low Fees
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  PrediFi Wallet
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Prediction Amount (USDC)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Asset Symbol (e.g., ETH)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Your Prediction (e.g., Up, Down)" name="message" type="text" handleChange={handleChange} />
            <Input placeholder="Expiry Time (minutes)" name="expiry" type="number" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Predict Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 