export default function Footer() {
  return (
    <div
      className="h-[999px] md:h-[788px] bg-auto"
      style={{
        backgroundImage: "url('/src/assets/Footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-center justify-evenly h-full text-white">
        <h2 className="font-bebas text-[40px] text-center md:text-6xl font-normal text-white">
          We ready to have you the best dining experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5">
          <div className="w-[312px] h-[136px] md:h-[144px] flex flex-col items-center justify-evenly">
            <img
              src="/src/assets/footer/clock.png"
              alt="clock"
              className="h-[30px] w-[30px]"
            />
            <span className="w-full text-center">
              <p className="font-bebas font-normal text-2xl mb-3">
                Opening hours
              </p>
              <p className="font-roboto font-normal text-base">
                Monday - Sunday
              </p>
              <p className="font-roboto font-normal text-base">
                9:00 AM to 11:30 PM
              </p>
            </span>
          </div>
          <div className="w-[312px] h-[136px] md:h-[144px] flex flex-col items-center justify-between ">
            <img
              src="/src/assets/footer/call.png"
              alt="call"
              className="h-[30px] w-[30px]"
            />
            <span className="w-full text-center">
              <p className="font-bebas font-normal text-2xl mb-3">
                LET&apos;S TALK
              </p>
              <p className="font-roboto font-normal text-base">
                Phone: 1-800-222-4545
              </p>
              <p className="font-roboto font-normal text-base">
                Fax: 1-800-222-4545
              </p>
            </span>
          </div>
          <div className="w-[312px] h-[136px] md:h-[144px] flex flex-col items-center justify-between">
            <img
              src="/src/assets/footer/mail.png"
              alt="mail"
              className="h-[30px] w-[30px]"
            />
            <span className="w-full text-center">
              <p className="font-bebas font-normal text-2xl mb-3">
                BOOK A TABLE
              </p>
              <p className="font-roboto font-normal text-base">
                Email: demo@website.com
              </p>
              <p className="font-roboto font-normal text-base">
                Support: support@website.com
              </p>
            </span>
          </div>
          <div className="w-[312px] h-[136px] md:h-[144px] flex flex-col items-center justify-between">
            <img
              src="/src/assets/footer/map.png"
              alt="map"
              className="h-[30px] w-[30px]"
            />
            <span className="w-full text-center">
              <p className="font-bebas font-normal text-2xl mb-3">
                Our Address
              </p>
              <p className="font-roboto font-normal text-base">
                123 Stree New York City ,
              </p>
              <p className="font-roboto font-normal text-base">
                United States Of America.
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center space-x-6 mb-5">
            <span>
              <img
                src="/src/assets/footer/fb.png"
                alt="facebook"
                className="h-[53px] w-[53px]"
              />
            </span>
            <span>
              <img
                src="/src/assets/footer/x.png"
                alt="twitter"
                className="h-[53px] w-[53px]"
              />
            </span>
            <span>
              <img
                src="/src/assets/footer/insta.png"
                alt="instagram"
                className="h-[53px] w-[53px]"
              />
            </span>
            <span>
              <img
                src="/src/assets/footer/link.png"
                alt="linkdin"
                className="h-[53px] w-[53px]"
              />
            </span>
          </div>
          <p className="font-roboto font-normal text-base">
            © 2023 <span className="text-[#EFB400]">Niomax</span> All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
