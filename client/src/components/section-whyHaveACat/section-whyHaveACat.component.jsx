import React from "react";

import "./section-whyHaveACat.styles.css";

const WhyHaveACat = () => {
  return (
    <section className="section section-whyhaveacat">
      <article className="whyhaveacat-short-ov">
        <h2 className="short-ov--title">Why should you have a cat?</h2>
        <p className="short-ov--desc">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <a
          href="https://www.lifehack.org/285000/14-reasons-why-you-should-have-cat-home"
          target="_blank"
          rel="noreferrer"
          className="article-link"
        >
          READ MORE →
        </a>
      </article>
      <div className="cat-pic-masonry">
        <div className="pic-1"></div>
        <div className="pic-2"></div>
        <div className="pic-3"></div>
      </div>
    </section>
  );
};

export default WhyHaveACat;
