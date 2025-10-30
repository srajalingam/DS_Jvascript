import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function findMaxInSubArray(arr: number[], subArraySize: number): number | null {
    debugger;
  if (subArraySize > arr.length || subArraySize <= 0) return null;
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - subArraySize; i++) {
        let currentSum = 0;
        for (let j = 0; j < subArraySize; j++) {
            currentSum += arr[i + j];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }   
    }
    return maxSum;
}

const FindMaxInSubArray: React.FC = () => {
    return (
      <div>
        <h2>Find Max In Sub Array</h2>
        <p>This section will contain the implementation for finding the maximum in a sub-array.</p>
        <SyntaxHighlighter language="typescript" style={dark}>
            {findMaxInSubArray.toString()}
        </SyntaxHighlighter>
        <h3>Explanation:</h3>
        <p>This function finds the maximum sum of any contiguous sub-array of a specified size within the given array.</p>
        <h3>Example:</h3>
        <p>{`findMaxInSubArray([1, 2, 3, 4, 5], 2) : ${findMaxInSubArray([1, 2, 3, 4, 5], 2)}`}</p>
        <p>{`findMaxInSubArray([5, -1, 3, 7, 2], 3) : ${findMaxInSubArray([5, -1, 3, 7, 2], 3)}`}</p>
        <p>{`findMaxInSubArray([2, 1, -5, 4, 3], 4) : ${findMaxInSubArray([2, 1, -5, 4, 3], 4)}`}</p>
        <p>Time Complexity: O(N * M) - where N is the length of the array and M is the size of the sub-array.</p>
        <p>Space Complexity: O(1) - constant space usage.</p>

      </div>
    );
  }
 export default FindMaxInSubArray;