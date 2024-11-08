import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonial() {
  const cards = [
    {
      quote:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      author: "Khalid Al Dawsry",
      location: "Jeddah, Saudi",
      authorPic: "/testi/author.png",
      src: "/testi/pic05.png",
    },
    {
      quote:
        "A truly authentic experience! The spices were perfectly balanced, and the lamb was melt-in-the-mouth tender. This is my go-to spot for Saudi cuisine.",
      author: "Fatima Al Otaibi",
      location: "Riyadh, Saudi",
      authorPic: "/testi/author.png",
      src: "/testi/pic02.jpg",
    },
    {
      quote:
        "The ambience and food are both amazing. I had the Kabsa, and it was absolutely delicious. Highly recommended for anyone who loves rich flavors.",
      author: "Omar Ahmed",
      location: "Dammam, Saudi",
      authorPic: "/testi/author.png",
      src: "/testi/pic03.jpg",
    },
    {
      quote:
        "I was blown away by the flavors! The Shawarma was tender and bursting with flavor, and the service was excellent. Will be coming back for sure.",
      author: "Laila Mansour",
      location: "Mecca, Saudi",
      authorPic: "/testi/author.png",
      src: "/testi/pic04.jpg",
    },
    {
      quote:
        "Best Saudi food in the city! The Majboos was superb, and the fresh ingredients really made a difference. A must-try for all food lovers.",
      author: "Salem Al Nasser",
      location: "Medina, Saudi",
      authorPic: "/testi/author.png",
      src: "/testi/pic01.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const loopedCards = [cards[cards.length - 1], ...cards, cards[0]];
  const totalLength = loopedCards.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalLength);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalLength) % totalLength);
  };

  // Adjust currentIndex for seamless looping
  if (currentIndex === totalLength - 1) {
    setCurrentIndex(1);
  } else if (currentIndex === 0) {
    setCurrentIndex(totalLength - 2);
  }

  return (
    <div className="bg-[#FBF7F2] relative overflow-hidden">
      <div className="container h-[965px] flex flex-col items-center justify-center space-y-10 ">
        <div className="flex h-[110px] w-full items-center justify-between">
          <div className="flex flex-col items-center justify-start space-y-3 z-20">
            <span className="font-roboto text-[#BD1F17] font-bold text-sm md:text-xl w-full text-start before:content-['▪'] before:mr-3 before:text-2xl">
              Crispy, Every Bite Taste
            </span>
            <h2 className="font-bebas text-4xl md:text-6xl font-normal capitalize">
              What Some of my Customers Say
            </h2>
          </div>
          <div className="md:flex space-x-4 mt-4 hidden">
            <button
              onClick={handlePrev}
              className="px-4 py-4 bg-white rounded-full customCir"
            >
              <IoIosArrowBack size={32} />
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-4 bg-white rounded-full customCir"
            >
              <IoIosArrowForward size={32} />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden mx-auto">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {loopedCards.map((card, index) => (
              <div key={index} className="w-full">
                <div className="bg-white w-[330px] h-[600px] md:w-[1320px] md:h-[555px] grid grid-cols-[330px] md:grid-cols-[556px_764px]">
                  <div className="bg-[#FEBF00] h-[360px] md:h-full flex flex-col items-start justify-between py-5 px-5 md:py-20 md:px-14 relative order-2 md:order-1">
                    {/* Quote Text */}
                    <p className="text-lg md:text-xl text-black font-normal mb-2 md:mb-8 ">
                      <span className="text-5xl font-mono font-bold text-black">
                        “
                      </span>{" "}
                      {card.quote}
                    </p>

                    <div className="w-full mt-1 md:mt-8">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-bold text-black capitalize">
                            {card.author}
                          </p>
                          <p className="text-black">{card.location}</p>
                        </div>
                        <img
                          src={card.authorPic}
                          alt="Author"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div className="flex w-full items-center">
                        <div className="flex-grow h-1 bg-black"></div>
                        <div className="w-1/4 h-1 bg-red-600"></div>
                      </div>
                    </div>

                    {/* Decorative Line */}

                    {/* Decorative Icon */}
                    <div className="absolute -bottom-4 left-0 md:-left-1 md:bottom-0">
                      <img
                        src="/assets/testi-Img.svg"
                        alt="Decoration"
                        className="w-5 md:w-10 h-16"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url(${card.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="bg-blue-300 h-[240px] md:h-full flex items-center justify-center order-1 md:order-2"
                  >
                    <img src="/assets/Play.png" alt="play button" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4 mt-4 md:hidden">
          <button
            onClick={handlePrev}
            className="px-4 py-4 bg-white rounded-full customCir"
          >
            <IoIosArrowBack size={32} />
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-4 bg-white rounded-full customCir"
          >
            <IoIosArrowForward size={32} />
          </button>
        </div>
      </div>
      <img
        src="/assets/absolute02.png"
        alt="decoration"
        className="-rotate-6 hidden md:block absolute top-20 -left-20 scale-50 "
      />
    </div>
  );
}
