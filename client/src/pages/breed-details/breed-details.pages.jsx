import React, { useEffect, useState } from "react";

import axios from "axios";

import "./breed-details.styles.css";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import BreedDetailsPageContent from "./breed-details.pages.component";

const BreedDetailsContentWithSpinner = WithSpinner(BreedDetailsPageContent);

const BreedDetails = ({
  match: {
    params: { breedName },
  },
}) => {
  const [curBreed, setCurBreed] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get(`https://catwikimern.herokuapp.com/api/breeds/${breedName}/`)
      .then((res) => {
        setCurBreed(res.data.data);
        setLoader(false);
      });
  }, [breedName]);
  return (
    <main className="breed-details">
      <BreedDetailsContentWithSpinner isLoading={loader} curBreed={curBreed} />
    </main>
  );
};

export default BreedDetails;
