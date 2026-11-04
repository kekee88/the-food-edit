
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1800",
    title: "The Art of Pasta",
    subtitle: "Rich textures. Beautiful flavours. Pure indulgence.",
  },
  {
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1800",
    title: "An Italian Classic",
    subtitle: "Simple ingredients, unforgettable taste.",
  },
  {
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1800",
    title: "The Perfect Bite",
    subtitle: "A little indulgence, beautifully made.",
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1800",
    title: "Fresh by Nature",
    subtitle: "Seasonal ingredients. Effortless elegance.",
  },
  {
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1800",
    title: "A Taste of Japan",
    subtitle: "Discover the delicate beauty of sushi.",
  },
];

export default function FoodSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function previousSlide() {
    setCurrent((previous) => (previous - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    setCurrent((previous) => (previous + 1) % slides.length);
  }

  return (
    <section className="slideshow-section">
      <div className="slideshow-heading">
        <p>THE NEXTBITES EDITION</p>
        <h2>A world of exquisite flavours.</h2>
      </div>

      <div className="slideshow">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="slide-overlay">
              <p>DISCOVER SOMETHING DELICIOUS</p>
              <h2>{slide.title}</h2>
              <span>{slide.subtitle}</span>
            </div>
          </div>
        ))}

        <button className="slide-arrow slide-prev" onClick={previousSlide} aria-label="Previous slide">
          &#8592;
        </button>

        <button className="slide-arrow slide-next" onClick={nextSlide} aria-label="Next slide">
          &#8594;
        </button>

        <div className="slide-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              className={`slide-dot ${index === current ? "selected" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>

        <div className="slide-counter">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
