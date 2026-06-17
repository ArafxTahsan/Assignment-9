import { ArrowLeft, Leaf, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const fallbackPlantImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23d7efc9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='40' fill='%23345f45'%3EImage unavailable%3C/text%3E%3C/svg%3E";

export default function PlantDetails() {
  const { plantId } = useParams();
  const { user, setToast } = useAuth();
  const [plant, setPlant] = useState(null);
  const [booking, setBooking] = useState({ name: user?.displayName || "", email: user?.email || "" });

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlant(data.find((item) => String(item.plantId) === plantId)))
      .catch(() => setPlant(null));
  }, [plantId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setToast({ type: "success", message: `Consultation booked for ${plant.plantName}.` });
    setBooking({ name: "", email: "" });
  };

  if (!plant) return <div className="route-loader">Finding this plant...</div>;

  return (
    <section className="details-page">
      <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to plants</Link>
      <div className="details-grid">
        <img
          className="details-image"
          src={plant.image}
          alt={plant.plantName}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackPlantImage;
          }}
        />
        <div className="details-copy">
          <span className="eyebrow">{plant.category}</span>
          <h1>{plant.plantName}</h1>
          <p>{plant.description}</p>
          <div className="details-stats">
            <span><strong>${plant.price}</strong> Price</span>
            <span><Star size={18} fill="currentColor" /> {plant.rating} Rating</span>
            <span><Leaf size={18} /> {plant.careLevel} Care</span>
            <span><strong>{plant.availableStock}</strong> In stock</span>
          </div>
          <p className="provider">Provider: {plant.providerName}</p>
        </div>
        <form className="booking-card" onSubmit={handleSubmit}>
          <h2>Book Consultation</h2>
          <label>Name</label>
          <input
            value={booking.name}
            onChange={(event) => setBooking({ ...booking, name: event.target.value })}
            required
          />
          <label>Email</label>
          <input
            type="email"
            value={booking.email}
            onChange={(event) => setBooking({ ...booking, email: event.target.value })}
            required
          />
          <button className="primary-button full" type="submit">Book Now</button>
        </form>
      </div>
    </section>
  );
}
