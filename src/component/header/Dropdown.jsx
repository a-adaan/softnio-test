export default function Dropdown() {
  return (
    <div className="w-full h-full fixed top-[77px] left-0 bg-[#FEBF00] flex flex-col justify-evenly items-center">
      <ul className="flex flex-col space-y-5 items-center text-lg">
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
      <button className="font-bold text-xl underline underline-offset-4">
        BOOK A TABLE
      </button>
    </div>
  );
}
