import React, { useState } from "react";

const WidgetOne = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="p-4 text-[20px] leading-[25.2px]  font-normal text-[#969696]">
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-5">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters—Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.This is
              a...
            </p>
          </div>
        );
      case "experiences":
        return (
          <div className="p-4 text-[20px] leading-[25.2px] font-normal text-[#969696]">
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-5">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters—Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.This is
              a...
            </p>
          </div>
        );
      case "recommended":
        return (
          <div className="p-4 text-[20px] leading-[25.2px] font-normal text-[#969696]">
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-5">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters—Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.This is
              a...
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#363C43]  rounded-3xl p-4 shadow-lg shadow-black w-[720px] h-[316px] ">
      <div className="flex bg-[#171717] rounded-3xl p-1 w-[600px] justify-between m-auto">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-11 py-3 text-lg rounded-3xl font-semibold ${
            activeTab === "about"
              ? "bg-[#23292F]  shadow-2xl shadow-black text-white"
              : " text-gray-400 hover:bg-[#311e1e]"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab("experiences")}
          className={`px-11 py-3 text-lg rounded-3xl font-semibold ${
            activeTab === "experiences"
              ? "bg-[#23292F]  shadow-2xl shadow-black text-white"
              : " text-gray-400 hover:bg-[#311e1e]"
          }`}
        >
          Experiences
        </button>
        <button
          onClick={() => setActiveTab("recommended")}
          className={`px-10 py-3 text-lg rounded-3xl font-semibold ${
            activeTab === "recommended"
              ? "bg-[#23292F] shadow-2xl shadow-black text-white"
              : " text-gray-400 hover:bg-[#311e1e]"
          }`}
        >
          Recommended
        </button>
      </div>
      <div className="relative m-auto pl-5 mt-3">
        {renderContent()}
        <div className="absolute h-[30%] top-10  rounded  inset-y-0 right-0 w-2 bg-gradient-to-l from-gray-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default WidgetOne;
