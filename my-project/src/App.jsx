import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("bg-gray-800 text-white font-bold");

  const changeTheme = (color) => {
    setColor(color);
  };
  return (
    <div className={`${color}`}>
      <div>
        <div className="flex w-full">
          <Navbar />

          <div className="flex mt-[30px] w-[30%]">
            <button
              onClick={() =>
                changeTheme(
                  "bg-redbg text-red-800 font-bold transition ease-in-out duration-800"
                )
              }
              className="bg-red-500 w-[30px] opacity-75 h-[30px] hover:animate-pulse border-2 border-white border-solid rounded-md  ml-[5%]"
            ></button>
            <button
              onClick={() => changeTheme("bg-limebg text-lime-800 font-bold")}
              className="bg-lime-500 w-[30px] border-2 hover:animate-pulse border-white border-solid h-[30px] ml-[5%] rounded-md"
            ></button>
            <button
              onClick={() =>
                changeTheme("bg-orangebg text-orange-600 font-bold ")
              }
              className="bg-orange-500 w-[30px] h-[30px] hover:animate-pulse border-white border-solid border-2 ml-[5%] rounded-md"
            ></button>
            <button
              onClick={() => changeTheme("bg-cyanbg text-cyan-600 font-bold")}
              className="bg-cyan-500 w-[30px] h-[30px] hover:animate-pulse border-white border-solid border-2 ml-[5%] rounded-md"
            ></button>
            <button
              onClick={() => changeTheme("bg-graybg text-gray-600 font-bold")}
              className="bg-slate-300 w-[30px] h-[30px] border-white border-solid border-2 ml-[5%] mr-[3%] rounded-md"
            ></button>
          </div>
        </div>
        <div>
          <Hero bColor={color} />
        </div>
      </div>
      <div className="mt-[30px]">
        <Footer bgColor={color} />
      </div>
    </div>
  );
};
export default App;
