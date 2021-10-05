import React from "react";

import Footer from "../../components/footer/footer.component";
import "./breed-details.styles.css";
import SectionBreedDetails from "../../components/section-breed-details/section-breed-details.component";
import SectionOtherCattoImages from "../../components/section-other-catto-images/section-otherCattoImages.component";

const BreedDetailsPageContent = ({ curBreed }) => {
  return (
    <>
      <SectionBreedDetails curBreed={curBreed.breed} />
      <SectionOtherCattoImages images={curBreed.images} />
      <Footer />
    </>
  );
};

export default BreedDetailsPageContent;
