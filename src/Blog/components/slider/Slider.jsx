import React from "react";
import { useState } from "react";
import "./slider.css";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    setSlideIndex(newIndex);
  };
  return (
    <div>
      <div className="slideshow-container">
        <div className={`mySlides fade ${slideIndex === 1 ? "active" : ""}`}>
          <div className="grid-section">
            <article className="blog-card">
              <div className="blog-card__image">
                <img
                  alt=""
                  src="https://www.dropbox.com/s/9863xpbm4x9ycr7/Android-N-Developer-0001.jpg?raw=1"
                />
              </div>

              <div className="blog-card__title">
                <a href="http://www.google.com">
                  Swiss knive for outdoor adventure travel high end use
                  heavyduty
                </a>
              </div>
              <hr />
              <div className="blog-card__description">
                Compact, mini and portable body which can easily be slipped into
                your pocket. Easy to pack and carry for travel and no surge
                protector for cruise ship.
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card__image">
                <img
                  alt=""
                  src="https://www.dropbox.com/s/9863xpbm4x9ycr7/Android-N-Developer-0001.jpg?raw=1"
                />
              </div>

              <div className="blog-card__title">
                <a href="http://www.google.com">
                  Swiss knive for outdoor adventure travel high end use
                  heavyduty
                </a>
              </div>
              <hr />
              <div className="blog-card__description">
                Compact, mini and portable body which can easily be slipped into
                your pocket. Easy to pack and carry for travel and no surge
                protector for cruise ship.
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card__image">
                <img
                  alt=""
                  src="https://www.dropbox.com/s/9863xpbm4x9ycr7/Android-N-Developer-0001.jpg?raw=1"
                />
              </div>

              <div className="blog-card__title">
                <a href="http://www.google.com">
                  Swiss knive for outdoor adventure travel high end use
                  heavyduty
                </a>
              </div>
              <hr />
              <div className="blog-card__description">
                Compact, mini and portable body which can easily be slipped into
                your pocket. Easy to pack and carry for travel and no surge
                protector for cruise ship.
              </div>
            </article>
          </div>
        </div>
        <div className={`mySlides fade ${slideIndex === 1 ? "active" : ""}`}>
          <div className="grid-section">
            <article className="blog-card">
              <div className="blog-card__image">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472152083436-a6eede6efad9?ixlib=rb-0.3.5&s=93a9b1fd63f0d00e2edac3cea5650819&w=1000&q=80"
                />
              </div>

              <div className="blog-card__title">
                <a href="http://www.google.com">
                  Swiss knive for outdoor adventure travel high end use
                  heavyduty
                </a>
              </div>
              <hr />
              <div className="blog-card__description">
                Compact, mini and portable body which can easily be slipped into
                your pocket. Easy to pack and carry for travel and no surge
                protector for cruise ship.
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card__image">
                <img
                  alt=""
                  src="https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-0.3.5&s=3f3419dfc62a7841252427fb893fd9d6&w=1000&q=80"
                />
              </div>

              <div className="blog-card__title">
                <a href="http://www.google.com">
                  Swiss knive for outdoor adventure travel high end use
                  heavyduty
                </a>
              </div>
              <hr />
              <div className="blog-card__description">
                Compact, mini and portable body which can easily be slipped into
                your pocket. Easy to pack and carry for travel and no surge
                protector for cruise ship.
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card__image">
                <img
                  alt=""
                  src="https://lh3.googleusercontent.com/nuGxjaySKcVwhNBtAbRX8BmzCWyNvJbpVf5X-XXvnzbSrLDz3m7D44cN0qAwys7vZh1l=h556"
                />
              </div>

              <div className="blog-card__title">
                <a href="http://www.google.com">
                  Swiss knive for outdoor adventure travel high end use
                  heavyduty
                </a>
              </div>
              <hr />
              <div className="blog-card__description">
                Compact, mini and portable body which can easily be slipped into
                your pocket. Easy to pack and carry for travel and no surge
                protector for cruise ship.
              </div>
            </article>
          </div>
        </div>
        <div className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </div>
        <div className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default Slider;
