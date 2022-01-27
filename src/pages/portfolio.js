import React from "react";

const Home = () => {
  return (
    <div className="portfolio">
      <section id="title">
        <h1>Portfolio</h1>
      </section>
      <section id="links">
        {/* <figure>
          <img src="https://via.placeholder.com/250" alt="design" />
          <figcaption>Image</figcaption>
        </figure>
        <figure>
          <img src="https://via.placeholder.com/250" alt="design" />
          <figcaption>Image</figcaption>
        </figure>
        <figure>
          <img src="https://via.placeholder.com/250" alt="design" />
          <figcaption>Image</figcaption>
        </figure>
        <figure>
          <img src="https://via.placeholder.com/250" alt="design" />
          <figcaption>Image</figcaption>
        </figure>
        <figure>
          <img src="https://via.placeholder.com/250" alt="design" />
          <figcaption>Image</figcaption>
        </figure>
        <figure>
          <img src="https://via.placeholder.com/250" alt="design" />
          <figcaption>Image</figcaption>
        </figure> */}
        <figure>
          <a
            href="https://codepen.io/merziy/pen/YzEKgmy"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={require("../assets/credit-score-dashboard.webp")}
              alt="Credit Score Dashbord Mockup"
            ></img>
          </a>
          <figcaption>
            Credit Score Dashboard (Angular, ChartJS, JavaScript)
          </figcaption>
        </figure>
        <figure>
          <a href="https://midnightcc.org/" rel="noreferrer" target="_blank">
            <img
              src={require("../assets/mcc.webp")}
              alt="Midnight Confessions Website"
            ></img>
          </a>
          <figcaption>
            Midnight Confessions site (PHP, Docker, jQuery)
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default Home;
