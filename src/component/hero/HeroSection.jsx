export default function HeroSection() {
  return (
    <div>
      {/* Main Banner */}
      <div className="pt-20 md:pt-28 md:h-svh grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#c1332a] pb-10">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center text-white lg:text-left p-8">
          <h1 className="md:text-[115px] text-6xl  bg-[#bf251d] bg-opacity-40 md:w-[800px] font-normal font-bebas leading-tight md:relative md:right-0  md:z-10">
            TASTE THE AUTHENTIC <br /> SAUDI CUISINE
          </h1>
          <p className="mt-4 font-roboto text-lg">
            Among the best Saudi chefs in the world, serving you <br />{" "}
            something beyond flavor.
          </p>
          <div className="mt-6 flex">
            <button className="bg-[#FEBF00] text-black px-6 py-2 font-semibold ">
              EXPLORE MENU
            </button>
          </div>
        </div>

        {/* Right Side Image  */}
        <div className="relative flex justify-center items-center lg:justify-end">
          <img
            src="/assets/hero01.png"
            alt="Delicious Food"
            className=" w-full md::w-full"
          />
          <img
            src="/assets/Vector.png"
            alt="vector"
            className=" w-10 absolute right-0 -top-5 md:top-0 md:right-8"
          />
        </div>
      </div>
    </div>
  );
}
