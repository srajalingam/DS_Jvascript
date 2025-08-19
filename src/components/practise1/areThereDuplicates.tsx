

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function areThereDuplicates(args: number[] | string[]): boolean {
  const frequencyCounter: { [key: string]: number } = {};
  for (const val of args) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }
  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true; // Found a duplicate
    }
  }
  return false; // No duplicates found
}

const AreThereDuplicates: React.FC = () => {
  return (   
     <div>
      <h2>Are There Duplicates?</h2>
      <p>This section will contain the implementation for checking duplicates in an array.</p>
      <SyntaxHighlighter language="typescript" style={dark}>
        {areThereDuplicates.toString()}
      </SyntaxHighlighter>
      <h3>Explanation:</h3>
      <p>This function checks if there are any duplicate values in the provided array.</p>
      <h3>Example:</h3>
      <p>{`areThereDuplicates([1, 2, 3, 4, 5]) : ${areThereDuplicates([1, 2, 3, 4, 5])}`}</p>
      <p>{`areThereDuplicates([1, 2, 2, 3]) : ${areThereDuplicates([1, 2, 2, 3])}`}</p>
      <p>{`areThereDuplicates(['a', 'b', 'c', 'a']) : ${areThereDuplicates(['a', 'b', 'c', 'a'])}`}</p>
      <p>Time Complexity: O(n) - Linear time complexity as we traverse the array once.</p>
      <p>Space Complexity: O(n) - Space complexity is linear due to the frequency counter object.</p>
      <p>Note: This function can handle both numbers and strings.</p>
     </div> 

  );
};
export default AreThereDuplicates;


