import React, { useEffect, useState } from "react";

import axios from "axios";

import YellowBar from "../../components/yellow-bar/yellow-bar.component";
import CattoImage from "../../components/catto-images/catto-images.component";
import Footer from "../../components/footer/footer.component";
import "./breed-details.styles.css";
import BigCattoImage from "../../components/big-catto-image/big-catto-image.component";
import SectionBreedDetails from "../../components/section-breed-details/section-breed-details.component";

const BreedDetails = ({
  match: {
    params: { breedName },
  },
}) => {
  const [curBreed, setCurBreed] = useState(null);
  useEffect(() => {
    axios
      .get(`https://catwikimern.herokuapp.com/api/breeds/${breedName}/`)
      .then((res) => setCurBreed(res.data.breed));
  }, []);
  return (
    <main className="breed-details">
      {console.log(curBreed)}
      {curBreed ? <SectionBreedDetails curBreed={curBreed} /> : ""}
      <Footer />
    </main>
  );
};

export default BreedDetails;
