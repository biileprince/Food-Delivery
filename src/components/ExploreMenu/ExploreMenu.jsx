import React, { useState, useRef, useEffect } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardWidth = 250;
  const cardGap = 32;

  const handleCategorySelect = (menuName, index) => {
    setCategory((prev) => (prev === menuName ? "All" : menuName));
    setActiveIndex(index);
    scrollToIndex(index);
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const scrollAmount =
        index * (cardWidth + cardGap) -
        (carouselRef.current.offsetWidth - cardWidth) / 2;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const initialIndex = menu_list.findIndex(
      (item) => item.menu_name === category
    );
    if (initialIndex > -1) setActiveIndex(initialIndex);
  }, [category]);

  return (
    <section className="explore-menu" id="explore-menu">
      <div className="menu-header">
        <h2 className="section-subtitle">Food Categories</h2>
        <h1 className="section-title">Explore Our Culinary Journey</h1>
        <p className="section-description">
          Discover a world of flavors crafted with passion. From sizzling
          starters to decadent desserts, each dish tells a story of quality and
          creativity.
        </p>
      </div>

      <div className="menu-carousel">
        <div className="carousel-container" ref={carouselRef}>
          {menu_list.map((item, index) => (
            <div
              key={index}
              className={`menu-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleCategorySelect(item.menu_name, index)}
              role="button"
              tabIndex={0}
            >
              <div className="card-image-container">
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  loading="lazy"
                  className="card-image"
                />
                {activeIndex === index && (
                  <div className="active-indicator">
                    <div className="pulse-effect"></div>
                  </div>
                )}
              </div>
              <h3 className="card-title">{item.menu_name}</h3>
            </div>
          ))}
        </div>
        <div className="scroll-fade"></div>
      </div>

      <div className="category-indicator">
        <span className="current-category">{category} Recipes</span>
        <div className="indicator-dots">
          {menu_list.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMenu;
