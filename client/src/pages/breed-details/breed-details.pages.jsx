import React, { useEffect, useState } from "react";

import axios from "axios";

import Footer from "../../components/footer/footer.component";
import "./breed-details.styles.css";
import SectionBreedDetails from "../../components/section-breed-details/section-breed-details.component";
import SectionOtherCattoImages from "../../components/section-other-catto-images/section-otherCattoImages.component";

const BreedDetails = ({
  match: {
    params: { breedName },
  },
}) => {
  const [curBreed, setCurBreed] = useState(null);
  useEffect(() => {
    axios
      .get(`https://catwikimern.herokuapp.com/api/breeds/${breedName}/`)
      .then((res) => setCurBreed(res.data.data));
  }, []);
  return (
    <main className="breed-details">
      {console.log(curBreed)}
      {curBreed ? <SectionBreedDetails curBreed={curBreed.breed} /> : ""}
      {curBreed ? <SectionOtherCattoImages images={curBreed.images} /> : ""}
      <Footer />
    </main>
  );
};

export default BreedDetails;
