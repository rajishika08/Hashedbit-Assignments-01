import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BookingForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const submitHandler = () => {
    localStorage.setItem(
      "bookingData",
      JSON.stringify({ name, email, mobile })
    );
    navigate("/success");
  };

  return (
    <div className="page">
      <h1>Book Your Seat</h1>

      <input placeholder="Name" onChange={e => setName(e.target.value)} /><br />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Mobile" onChange={e => setMobile(e.target.value)} /><br /><br />

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default BookingForm;

