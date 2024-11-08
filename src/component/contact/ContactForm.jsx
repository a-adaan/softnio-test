import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, such as sending data to the server
    setShowPopup(true); // Show popup on form submission
  };

  return (
    <div className="relative flex justify-center items-center mt-10 bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="w-[330px] md:w-[636px] space-y-4  bg-transparent"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none"
          />
          <input
            type="date"
            name="date"
            placeholder="Reservation Date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none"
          />
          <input
            type="number"
            name="people"
            placeholder="Total People"
            value={formData.people}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none"
            min="1"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:outline-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
        >
          BOOK NOW
        </button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
            <p>Your reservation request has been submitted successfully.</p>
            <button
              onClick={() => {
                setShowPopup(false);
                setFormData({
                  name: "",
                  email: "",
                  date: "",
                  people: "",
                  message: "",
                });
              }}
              className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
