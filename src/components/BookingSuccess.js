import "../App.css";

function BookingSuccess() {
  const data = JSON.parse(localStorage.getItem("bookingData"));
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="page">
      <div className="success-box">
        <h1>Seat Booked Successfully 🎉</h1>
        <p><b>Booking ID:</b> {bookingId}</p>
        <p><b>Name:</b> {data.name}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Mobile:</b> {data.mobile}</p>
      </div>
    </div>
  );
}

export default BookingSuccess;

