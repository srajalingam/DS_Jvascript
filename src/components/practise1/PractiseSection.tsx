
import React from "react";
import { useParams } from "react-router-dom";
import AreThereDuplicates from "./areThereDuplicates";

import ConstructNote from "./constructNote";
import FindAllDuplicate from "./findAllDuplicate";
import AveragePair from "./averagePair";
import IsSubsequence from "./isSubsequence";

const PractiseSection: React.FC = () => {
  const { name } = useParams();
   switch (name) {
    case "areThereDuplicates":
      return <AreThereDuplicates/>;
    case "constructNote":
      return <ConstructNote/>;
    case "findAllDuplicate":
      return <FindAllDuplicate/>;
    case "averagePair":
      return <AveragePair />;
    case "isSubsequence":
      return <IsSubsequence />;
    default:
      return <h2>No matching practice found</h2>;
  }
}

export default PractiseSection;


