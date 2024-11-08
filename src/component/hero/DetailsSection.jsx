import Tabs from "./Tabs";

export default function DetailsSection() {
  return (
    <div className="bg-white relative overflow-hidden">
      {/* About Section with Tabs */}
      <div className=" container mt-12 px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center lg:justify-end">
          <img
            src="/src/assets/hero03.png"
            alt="About Culinary Experience"
            className="rounded-md shadow-lg w-full h-auto"
          />
        </div>
        {/* Left Side - Tabs and Text */}
        <div>
          <Tabs />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto pt-20 pb-20 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-row items-center space-x-4">
          <span className=" w-20 h-20 customCir flex justify-center items-center">
            <img
              src="/src/assets/icon01.png"
              alt="Experience Icon"
              className="w-10 h-10 "
            />
          </span>
          <div className="text-start">
            <p className="font-normal text-xl font-bebas mt-2">FAST DELIVERY</p>
            <p className="text-gray-600 font-inter">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <span className=" w-20 h-20 customCir flex justify-center items-center">
            <img
              src="/src/assets/icon02.png"
              alt="Experience Icon"
              className="w-10 h-10 "
            />
          </span>
          <div className="text-start">
            <p className="font-normal text-xl font-bebas mt-2">
              ABSOLUTE DINING
            </p>
            <p className="text-gray-600 font-inter">Best buffet restaurant</p>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <span className=" w-20 h-20 customCir flex justify-center items-center">
            <img
              src="/src/assets/icon03.png"
              alt="Experience Icon"
              className="w-10 h-10 "
            />
          </span>
          <div className="text-start">
            <p className="font-normal text-xl font-bebas mt-2">
              PICKUP DELIVERY
            </p>
            <p className="text-gray-600 font-inter">Grab your food order</p>
          </div>
        </div>
      </div>
      <img
        src="/src/assets/hero02.png"
        alt="decoration"
        className="rotate-12 hidden md:block absolute bottom-10 -right-36"
      />
    </div>
  );
}
