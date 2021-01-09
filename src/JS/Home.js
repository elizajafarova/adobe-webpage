import React from "react";
import web from "../images/AMG_Design.jpg";
import Helper from "../JS/Helper";

const Home = () => {
  return (
    <div>
      <Helper
        name="Work all design at the same time on layouts."
        imgSrc={web}
        visit="/contact"
        btname="Try it free"
      />
    </div>
  );
};
export default Home;
