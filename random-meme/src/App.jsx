import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="w-full h-screen flex flex-col background relative overflow-x-hidden">
    <h1 className="bg-white  text-center font-bold py-2 my-2 mt-5  mx-3 rounded-[10px]  text-black">RANDOM GIF !</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
      <Random/>
      <Tag />
    </div>
  </div>
  );
}
