import React from "react";

const Home = () => {
  return (
    <div className="portfolio">
      <section id="title">
        <h1>Portfolio</h1>
      </section>
      <section id="links">
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
        <figure>
          <a
            href="https://github.com/merziy/go-react-chat-app"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={require("../assets/go-react-chat-app.webp")}
              alt="Chat app built with React and Go"
            ></img>
          </a>
          <figcaption>
            Realtime Chat Application (Go, React, Docker, Sass)
          </figcaption>
        </figure>
        <figure>
          <a
            href="https://github.com/merziy/vue-flask-crud-app"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={require("../assets/crud.webp")}
              alt="Front/Backend CRUD"
              id="crud"
            ></img>
          </a>
          <figcaption>
            Full Stack CRUD Application (Vue, Python, Flask, Bootstrap)
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default Home;
