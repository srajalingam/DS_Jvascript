
import React from "react";
import { useParams } from "react-router-dom";
import AreThereDuplicates from "./areThereDuplicates";

import ConstructNote from "./constructNote";

const PractiseSection: React.FC = () => {
  const { name } = useParams();
   switch (name) {
    case "areThereDuplicates":
      return <AreThereDuplicates/>;
    case "constructNote":
      return <ConstructNote/>;
    default:
      return <h2>No matching practice found</h2>;
  }
}

export default PractiseSection;


