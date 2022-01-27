import React from "react";

const Home = () => {
  return (
    <div className="home grid-wrapper">
      <section id="sidebar">
        {/* <img
          id="design-image-1"
          src="https://via.placeholder.com/50x800"
          alt="Placeholder"
        /> */}
        <div id="side-bar"></div>
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
          Welcome! My name is Alexander Mathis. I am a Front End Engineer. I
          have experience in HTML/CSS/JavaScript, frameworks such as React and
          Angular, libraries like jQuery, ChartJS, and PHP. My interests range
          from all aspects of Web Development and technology to philosophy and
          art. Please feel free to contact me via email through the Contact page
          and visit my portfolio.
        </p>
      </section>
      <section id="design-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/View_form_Barouk_mountain_-_panoramio.jpg"
          alt="A field of grass"
        />
      </section>
      <section id="design-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/%E6%9D%8E%E6%96%87%E5%BF%A0%E5%85%AC%E5%A5%8F%E7%A8%BF%28%E5%9B%9B%E5%8D%81%E4%B8%83%29.djvu/page1-800px-%E6%9D%8E%E6%96%87%E5%BF%A0%E5%85%AC%E5%A5%8F%E7%A8%BF%28%E5%9B%9B%E5%8D%81%E4%B8%83%29.djvu.jpg"
          alt="Japanese text on a novel."
        />
      </section>
    </div>
  );
};

export default Home;
