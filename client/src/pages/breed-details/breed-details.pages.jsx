import React, { useEffect, useState } from "react";

import axios from "axios";

import Footer from "../../components/footer/footer.component";
import "./breed-details.styles.css";
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