import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function MobileProductDetails() {
  const cards = [
    {
      id: 1,
      name: "Vegetables Burger",
      details: "Barbecue Italian cuisine pizza",
      src: "/src/assets/details/pic01.png",
    },
    {
      id: 2,
      name: "Chicken Burger",
      details: "Grilled chicken with special sauce",
      src: "/src/assets/details/pic02.png",
    },
    {
      id: 3,
      name: "Beef Steak",
      details: "Succulent steak with herbs and spices",
      src: "/src/assets/details/pic03.png",
    },
    {
      id: 4,
      name: "Margherita Pizza",
      details: "Classic Margherita with fresh basil",
      src: "/src/assets/details/pic04.png",
    },
    {
      id: 5,
      name: "Spaghetti Bolognese",
      details: "Italian pasta with Bolognese sauce",
      src: "/src/assets/details/pic03.png",
    },
    {
      id: 6,
      name: "Caesar Salad",
      details: "Crispy lettuce with Caesar dressing",
      src: "/src/assets/details/pic02.png",
    },
    {
      id: 7,
      name: "Sushi Platter",
      details: "Assorted sushi with fresh ingredients",
      src: "/src/assets/details/pic04.png",
    },
    {
      id: 8,
      name: "Tandoori Chicken",
      details: "Spicy Indian-style grilled chicken",
      src: "/src/assets/details/pic01.png",
    },
    {
      id: 9,
      name: "Lamb Shawarma",
      details: "Middle Eastern lamb wrap with veggies",
      src: "/src/assets/details/pic02.png",
    },
    {
      id: 10,
      name: "Fish and Chips",
      details: "Crispy fish with seasoned fries",
      src: "/src/assets/details/pic01.png",
    },
    {
      id: 11,
      name: "Eggplant Parmesan",
      details: "Baked eggplant with cheese and sauce",
      src: "/src/assets/details/pic04.png",
    },
    {
      id: 12,
      name: "Falafel Wrap",
      details: "Middle Eastern wrap with falafel and tahini",
      src: "/src/assets/details/pic03.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const loopedCards = [cards[cards.length - 1], ...cards, cards[0]];

  const totalLength = loopedCards.length;

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const transitionEndHandler = setTimeout(() => {
        setIsTransitioning(false);

        if (currentIndex === totalLength - 1) {
          setCurrentIndex(1);
        } else if (currentIndex === 0) {
          setCurrentIndex(totalLength - 2);
        }
      }, 300);

      return () => clearTimeout(transitionEndHandler);
    }
  }, [currentIndex, isTransitioning, totalLength]);

  useEffect(() => {
    const interval = setInterval(handleNext, 2500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#FBF7F2] md:hidden">
      <div className="container h-[710px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-start">
          <span className="font-roboto text-[#BD1F17] font-bold text-xl w-full text-start before:content-['▪'] before:mr-3 before:text-2xl">
            Crispy, Every Bite Taste
          </span>
          <h2 className="font-bebas text-6xl font-normal">
            POPULAR FOOD ITEMS
          </h2>
        </div>

        <div className="relative w-full overflow-hidden max-w-md mx-auto">
          <div
            className={`flex transition-transform duration-300 ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {loopedCards.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <div className="bg-white w-[306px] h-[300px] p-6 flex flex-col items-center justify-evenly">
                  <img src={card.src} alt="" />
                  <span className="w-12 h-1 my-2 bg-[#BD1F17]"></span>
                  <h2 className="font-bebas font-normal text-2xl">
                    {card.name}
                  </h2>
                  <p className="font-inter text-center text-base">
                    {card.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-4 bg-white rounded-full customCir disabled:opacity-50"
          >
            <IoIosArrowBack size={32} />
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-4 bg-white rounded-full customCir disabled:opacity-50"
          >
            <IoIosArrowForward size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}