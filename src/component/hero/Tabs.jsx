import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("About");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <>
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
          </>
        );
      case "Experience":
        return (
          <>
            <h2 className="text-5xl font-bebas font-normal text-gray-800">
              OUR EXPERIENCE
            </h2>
            <p className="mt-4 text-gray-600 font-roboto">
              With years of expertise, our culinary team provides a remarkable
              dining experience that exceeds expectations. We focus on quality
              ingredients and exceptional taste.
            </p>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-2 font-semibold ">
              LEARN MORE
            </button>
          </>
        );
      case "Contact":
        return (
          <>
            <h2 className="text-5xl font-bebas font-normal text-gray-800">
              GET IN TOUCH
            </h2>
            <p className="mt-4 text-gray-600 font-roboto">
              Reach out to us for reservations, inquiries, or feedback.
              We&apos;re here to help and ensure you have an unforgettable
              dining experience.
            </p>
            <p className="mt-4 text-gray-600 font-semibold">
              Phone: +88 3426 739 485
            </p>
            <p className="text-gray-600 font-semibold">
              Email: info@example.com
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex justify-center lg:justify-start gap-8 text-center text-gray-700">
        {["About", "Experience", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-semibold pb-2 ${
              activeTab === tab ? "border-b-2 border-red-600" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}
