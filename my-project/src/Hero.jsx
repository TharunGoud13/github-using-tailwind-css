const Hero = ({ bColor }) => {
  const Blur = () => {
    let input = document.getElementById("name");
    let username = document.getElementById("input");
    if (input.value === "") {
      username.textContent = "Required*";
    } else {
      username.textContent = "";
    }
  };
  return (
    <div>
      <div className="flex   h-[450px] git-container scroll-smooth bg-center bg-fixed bg-cover">
        <div className="flex flex-col items-center justify-center  mt-6 mb-5 xl:order-1  pt-5 ">
          <h1 className=" text-3xl font-mono">Built for Developers</h1>
          <div className="flex justify-center flex-col items-center pt-1 m-10 select-none">
            <p className=" font-mono font-semibold text-lg   items-center text-center">
              Github is a development platform inspired by the way you work.
              From <span className="text-white font-semibold">open source</span>{" "}
              to <span className="text-white font-semibold">business </span>you
              can host and review code, manage projects and build softwares
              alongside millions of other developers.{" "}
            </p>
            <button
              type="button"
              className={` p-[10px] mt-2 hover:bg-blue-400 ${bColor} border-white rounded-md  sm:hidden`}
            >
              Sign in for GitHub
            </button>
          </div>
        </div>
        <div className="hidden  sm:block text-gray-600  font-mono shadow-inner bg-white h-[300px] w-[400px] mr-[30px] mt-[100px] rounded-md p-[10px] pb-[15px] pt-[15px] items-center m-[5px] md:order-2">
          <label for="name">Username</label>
          <br />
          <input
            type="text"
            className="border-slate-500 mt-[5px] font-mono"
            placeholder="Enter Your Name"
            id="name"
            onBlur={Blur}
          />
          <label
            for="name"
            className="text-red-500"
            font-mono
            id="input"
          ></label>
          <br />
          <label for="mail">Email</label>
          <br />
          <input
            type="email"
            for="mail"
            placeholder="Enter Email"
            className="border-slate-500 mt-[5px] font-mono"
          />
          <br />
          <label for="pwd">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            for="pwd"
            className="border-slate-500 mt-[5px] font-mono shadow-inner"
          />
          <br />
          <a href="https://www.github.com/login" target="_blank">
            <button
              type="button"
              className={`${bColor} shadow-md shadow-black p-[10px] transition ease-in-out duration-700 hover:translate-y-4 mt-[10px] mb-[10px] hover:bg-blue-400 border-white rounded-md   `}
            >
              Sign Up for GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
