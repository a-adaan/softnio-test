export default function DesktopView() {
  return (
    <div className="w-full md:flex flex-row justify-between items-center hidden">
      <ul className="flex flex-row space-x-5 items-center text-base text-white">
        <li className="hover:underline underline-offset-4 transition duration-300">
          Home
        </li>
        <li className="hover:underline underline-offset-4 transition duration-300">
          About
        </li>
        <li className="hover:underline underline-offset-4 transition duration-300">
          Portfolio
        </li>
        <li className="hover:underline underline-offset-4 transition duration-300">
          Clients
        </li>
        <li className="hover:underline underline-offset-4 transition duration-300">
          Blog
        </li>
        <li className="hover:underline underline-offset-4 transition duration-300">
          Contact
        </li>
      </ul>
      <button className="font-bold text-base text-black py-[10px] px-[24px] bg-[#FEBF00]">
        BOOK A TABLE
      </button>
    </div>
  );
}