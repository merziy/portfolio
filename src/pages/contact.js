import React from "react";

const Home = () => {
  return (
    <div className="contact">
      <section id="contact-info">
        <p>
          email:{" "}
          <a
            href="mailto: alexzandermathis@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            alexzandermathis@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel: 336-448-9778" target="_blank" rel="noreferrer">
            336-448-9778
          </a>
        </p>
        <p>
          linkedin:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/azmathis/"
          >
            azmathis
          </a>
        </p>
      </section>
    </div>
  );
};

export default Home;
