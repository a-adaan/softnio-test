import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div
      className="h-[788px] bg-auto"
      style={{
        backgroundImage: "url('/assets/formbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-start justify-center h-full">
        <div className="flex flex-col items-start justify-center space-y-3">
          <span className="font-roboto text-[#BD1F17] font-bold text-xl w-full text-start before:content-['▪'] before:text-2xl before:mr-4">
            Crispy, Every Bite Taste
          </span>
          <p className="font-bebas text-6xl font-normal text-white">
            POPULAR FOOD ITEMS
          </p>
          <p className="font-roboto font-normal text-base text-white">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            <br />
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
