import React, { useRef } from "react";
import Footer from "../../components/footer/footer.component";

import BreedsShortInfo from "../../components/section-breeds-short-info/section-breeds-short-info.component";
import "./top-breeds.styles.css";

const TopBreeds = () => {
  return (
    <main className="top-breeds-page">
      <h1 className="top-breeds-title">Top 10 most searched breeds</h1>
      <BreedsShortInfo />
      <Footer />
    </main>
  );
};

export default TopBreeds;
