import { ArrowRight, Droplets, Leaf, ShieldCheck, Sparkles, Star, SunMedium, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const fallbackPlantImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='600' viewBox='0 0 900 600'%3E%3Crect width='900' height='600' fill='%23d7efc9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter, sans-serif' font-size='40' fill='%23345f45'%3EImage unavailable%3C/text%3E%3C/svg%3E";

const heroSlides = [
  {
    title: "We Often Think To Buy Plants Online",
    text: "Fresh indoor plants, calming care tips, and expert help delivered with a soft green touch.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Beautiful Plants Right From Home",
    text: "Choose easy-care favorites for your desk, window, bedroom, and cozy corners.",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Green Care For Every Season",
    text: "Book a consultation and keep your plants healthy through light, water, and soil changes.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80"
  }
];

const tips = [
  { icon: <Droplets />, title: "Water Slowly", text: "Check the top inch of soil before watering and let extra water drain." },
  { icon: <SunMedium />, title: "Soft Sunlight", text: "Most indoor plants love bright, indirect light near a window." },
  { icon: <Sparkles />, title: "Feed Lightly", text: "Use gentle fertilizer in the growing season and pause during winter." }
];

const experts = [
  { name: "Mukti Roy", role: "Indoor Plant Specialist", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "John Deo", role: "Soil & Care Advisor", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Suni Lee", role: "Eco Decor Designer", image: "https://randomuser.me/api/portraits/women/44.jpg" }
];

export default function Home() {
  const [plants, setPlants] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch(() => setPlants([]));
  }, []);

  useEffect(() => {
    if (location.hash === "#plants") {
      const section = document.getElementById("plants");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Fresh indoor living</span>
          <h1>Bring Calm Green Life Into Your Home</h1>
          <p>Explore top-rated plants, easy care guidance, and friendly experts for a healthier space.</p>
          <a href="#plants" className="primary-button">
            Shop Now <ArrowRight size={18} />
          </a>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="hero-slider"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="slide-card">
                <img
            src={slide.image}
            alt={slide.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackPlantImage;
            }}
          />
                <div>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="intro-band">
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=850&q=80"
            alt="Potted plant"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackPlantImage;
            }}
          />
          <div className="stat-card"><strong>450+</strong><span>Collections of Plants</span></div>
        </div>
        <div className="section-copy">
          <span className="eyebrow">GreenNest care</span>
          <h2>Beautiful Plants Right From Home</h2>
          <p>Choose plants that suit your light, room size, and care routine. Our experts help you keep every leaf happier.</p>
          <div className="feature-pair">
            <div><Leaf /><strong>Outdoor Plants</strong><span>Fresh balcony and patio options.</span></div>
            <div><SproutIcon /><strong>Landscape Plants</strong><span>Soft greenery for wider spaces.</span></div>
          </div>
        </div>
      </section>

      <section id="plants" className="plants-section">
        <div className="section-heading">
          <span className="eyebrow">Top rated</span>
          <h2>Range Of Live Plants That Can Be Bought Online</h2>
          <p>Each card is loaded from the JSON data source required in the assignment.</p>
        </div>
        <div className="plant-grid">
          {plants.map((plant) => (
            <article className="plant-card" key={plant.plantId}>
              <img
            src={plant.image}
            alt={plant.plantName}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackPlantImage;
            }}
          />
              <div className="plant-card-body">
                <span>{plant.category}</span>
                <h3>{plant.plantName}</h3>
                <div className="plant-meta">
                  <strong>${plant.price}</strong>
                  <span><Star size={16} fill="currentColor" /> {plant.rating}</span>
                </div>
                <Link to={`/plants/${plant.plantId}`}>View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits">
        <div className="section-heading light">
          <h2>Get Healthy Premium Quality Plants Delivered</h2>
        </div>
        <div className="benefit-grid">
          <div><ShieldCheck /><h3>Best Quality</h3><p>Selected plants from trusted indoor growers.</p></div>
          <div className="highlight"><Truck /><h3>Free Shipping</h3><p>Careful packing for safe doorstep delivery.</p></div>
          <div><Leaf /><h3>Warranty</h3><p>Helpful guidance after your new plant arrives.</p></div>
        </div>
      </section>

      <section className="tips-section">
        <div className="section-heading">
          <span className="eyebrow">Care guides</span>
          <h2>Plant Care Tips</h2>
        </div>
        <div className="tips-grid">
          {tips.map((tip) => (
            <article key={tip.title}>
              {tip.icon}
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section">
        <div className="section-heading">
          <h2>Houseplants Getting Brown Tips On Their Leaves</h2>
          <p>Quick care consultations help diagnose water, light, humidity, and soil issues.</p>
        </div>
        <div className="video-card">
          <img src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1100&q=80" alt="Plant care preview" />
          <button aria-label="Play plant care video">▶</button>
        </div>
      </section>

      <section className="experts-section">
        <div className="section-heading light">
          <h2>Meet Our Green Experts</h2>
          <p>Book friendly advice for soil, watering, styling, and plant rescue.</p>
        </div>
        <div className="expert-grid">
          {experts.map((expert) => (
            <article key={expert.name}>
              <img src={expert.image} alt={expert.name} />
              <p>Personal care guidance for new plant parents and cozy home decorators.</p>
              <h3>{expert.name}</h3>
              <span>{expert.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="decor-section">
        <div>
          <span className="eyebrow">Plant of the week</span>
          <h2>Eco Decor Ideas For Brighter Rooms</h2>
          <p>Style trailing plants on shelves, add a sculptural floor plant near a reading chair, and group small pots on a sunlit table.</p>
          <a href="#plants" className="secondary-button">Explore Plants</a>
        </div>
        <img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80" alt="Eco decor with indoor plants" />
      </section>
    </>
  );
}

function SproutIcon() {
  return <Leaf />;
}
