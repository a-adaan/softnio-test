export default function DetailsSection() {
  return (
    <div className="bg-white">
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
          <div className="flex justify-center lg:justify-start gap-8 text-center text-gray-700">
            <button className="font-semibold border-b-2 border-red-600 pb-2">
              About
            </button>
            <button className="font-semibold">Experience</button>
            <button className="font-semibold">Contact</button>
          </div>
          <div className="mt-6">
            <h2 className="text-5xl font-bebas font-normal text-gray-800">
              EXCEPTIONAL CULINARY <br /> EXPERIENCE AND DELICIOUS FOOD
            </h2>
            <p className="mt-4 text-gray-600 font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 font-semibold ">
              ABOUT MORE
            </button>
            <p className="mt-4 text-gray-600 font-semibold">+88 3426 739 485</p>
          </div>
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
    </div>
  );
}
