import React from "react";

const Home = () => {
  return (
    <div className="home grid-wrapper">
      <section id="sidebar">
        <img
          id="design-image-1"
          src="https://via.placeholder.com/50x800"
          alt="Placeholder"
        />
      </section>
      <section id="biography">
        <figure>
          <img
            src={require("../assets/dali-temptation.webp")}
            alt="Salvador Dali - The Temptation of Saint Anthony"
          />
          <figcaption>
            Salvador Dali - The Temptation of Saint Anthony
          </figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section id="design-1">
        <img src="https://via.placeholder.com/250" alt="Placeholder" />
      </section>
      <section id="design-2">
        <img src="https://via.placeholder.com/250" alt="Placeholder" />
      </section>
    </div>
  );
};

export default Home;
