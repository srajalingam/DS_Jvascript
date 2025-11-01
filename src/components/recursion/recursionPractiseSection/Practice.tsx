import React from 'react'
import { useParams } from "react-router-dom";
import Reverse from './Reverse';
import Palindrome from './Palindrome';
const Practice: React.FC = () => {
   const { name } = useParams();
   switch (name) {
    case "reverse":
      return <Reverse/>;
    case "palindrome":
      return <Palindrome/>;
    default:
      return <h2>No matching practice found</h2>;
  }
}

export default Practice