import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const BookVisitPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visit_date: "",
    visit_time: "",
    special_note: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const [loading, setLoading] = useState(false);

  // for navigating back to homw page
  const navigate = useNavigate();

  const gotohome = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // Inside BookVisitPage.jsx handleSubmit:
    console.log("Sending payload to backend:", formData); 
    e.preventDefault();
    console.log("Booking details submitted:", formData);
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings/newbooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", message: "Visit booked successfully" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          visit_date: "",
          visit_time: "",
          special_note: "",
        });
      } else {
        setMessage({
          type: "error",
          text:
            data.message || "Failed to create booking, please try again later",
        });
      }
    } catch (error) {
      console.error("Api call error", error)
      setMessage({
        type: "error",
        text: "Make sure your backend server is running...",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center mt-10 w-full px-4"
      onSubmit={handleSubmit}
    >
      <div className="text-3xl text-gray-900 font-semibold m-4">
        Book a visit
      </div>

      {message.text && (
        <div
          className={`w-full max-w-xs p-4 rounded-lg mb-4 text-center text-sm font-semibold border shadow-md transition-all duration-300 ${message.type == "success" ? "bg-emerald-100 border-emerald-500 text-emerald-900" : "bg-rose-100 border-rose-500 text-rose-900"}`}
        >
          {message.text}
        </div>
      )}

      {/* Name Field Container */}
      <fieldset className="fieldset mt-4 w-full max-w-xs">
        <legend className="fieldset-legend text-base font-semibold">
          Name
        </legend>
        <input
          type="text"
          className="input input-lg w-full bg-lime-200 placeholder-gray-600 text-black mt-1"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </fieldset>

      {/* Email Field Container */}
      <fieldset className="fieldset mt-4 w-full max-w-xs">
        <legend className="fieldset-legend text-base font-semibold">
          Email
        </legend>
        <input
          type="email"
          className="input input-lg w-full bg-lime-200 placeholder-gray-600 text-black mt-1"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </fieldset>

      {/* Phone number Field container */}
      <fieldset className="fieldset mt-4 w-full max-w-xs">
        <legend className="fieldset-Legend text-base font-semibold">
          Phone Number
        </legend>
        <input
          type="tel"
          className="input input-lg w-full bg-lime-200 placeholder-gray-600 text-black mt-1"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        ></input>
      </fieldset>

      {/* Date Field container */}
      <fieldset className="fieldset mt-4 w-full max-w-xs">
        <legend className="fieldset-Legend text-base font-semibold">
          Pick a Date
        </legend>
        <input
          type="date"
          className="input input-lg w-full bg-lime-200 placeholder-gray-600 text-black mt-1"
          placeholder="Date"
          name="visit_date"
          value={formData.visit_date}
          onChange={handleChange}
          required
        ></input>
      </fieldset>

      {/* Time Field container */}
      <fieldset className="fieldset mt-4 w-full max-w-xs">
        <legend className="fieldset-Legend text-base font-semibold">
          Pick a Time
        </legend>
        <input
          type="time"
          className="input input-lg w-full bg-lime-200 placeholder-gray-600 text-black mt-1"
          placeholder="Time"
          name="visit_time"
          value={formData.visit_time}
          onChange={handleChange}
          required
        ></input>
      </fieldset>

      {/* Special  Field container */}
      <fieldset className="fieldset mt-4 w-full max-w-xs">
        <legend className="fieldset-Legend text-base font-semibold">
          Special Note
        </legend>
        <textarea
          className="textarea textarea-lg w-full h-28 bg-lime-200 placeholder-gray-600 text-black mt-1"
          placeholder="E.g., Preferred barber, specific hair treatment, or allergies..."
          name="special_note"
          value={formData.special_note}
          onChange={handleChange}
          required
        ></textarea>
      </fieldset>

      {/* Submit Button */}
      <div className="mt-4 mb-8 w-full max-w-xs">
        <button
          type="submit"
          disabled={loading}
          onClick={gotohome}
          className="btn btn-lg w-full bg-lime-500 text-white hover:bg-lime-600 disabled:opacity-50"
        >
          {loading ? "booking" : "Book Visit"}

        </button>
      </div>
    </form>
  );
};

export default BookVisitPage;
