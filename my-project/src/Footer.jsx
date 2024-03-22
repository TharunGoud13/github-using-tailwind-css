import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center  select-none mt-[30px] justify-center w-50">
      <p className=" font-semibold text-lg font-mono  items-center text-center">
        Github for learning
      </p>
      <h1 className=" items-center justify-center ml-10 font-semibold text-2xl font-mono">
        A better way to work together
      </h1>
      <div className="ml-[30px] mr-[30px]">
        <p className=" font-semibold text-lg font-mono items-center text-center">
          Github brings teams together to work through the problems move ideas
          forward and learn from each other along the way.
        </p>
      </div>
      <button
        type="button"
        className=" p-[10px]  hover:shadow-xl shadow-red-500  mt-2 border-white rounded-md mb-[20px] animate-bounce  button focus:ring-2 hover:text-white font-bold"
      >
        Sign up your Team
      </button>
      <h1 className=" font-semibold text-lg font-mono">
        <a href="https://www.github.com" target="_blank">
          Reach Out Us At:
        </a>
      </h1>
      <div className="flex pt-[5px]  cursor-pointer mb-[60px]">
        <a href="https://www.instagram.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            className="w-[30px] h-[30px] hover:animate-pulse"
          />
        </a>

        <a href="https://www.facebook.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            className="w-[30px] h-[30px] ml-[15px] hover:animate-pulse"
          />
        </a>

        <a href="https://www.twitter.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
            className="w-[30px] h-[30px] ml-[15px] hover:animate-pulse"
          />
        </a>
        <a href="https://www.gmail.com" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            className="w-[30px] h-[30px] ml-[15px] hover:animate-pulse"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
