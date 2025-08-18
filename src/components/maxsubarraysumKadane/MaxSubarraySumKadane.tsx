import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const MaxSubarraySumKadane: React.FC = () => {

  function kadane(nums: number[]): number {
    if (nums.length === 0) return 0;
    let maxSoFar = nums[0];
    let currMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
      currMax = Math.max(nums[i], currMax + nums[i]);
      maxSoFar = Math.max(maxSoFar, currMax);
    }
    return maxSoFar;
  }

  // Example usage of Kadane's algorithm

  function kadaneInLoop(nums: number[]): number {
    if (nums.length === 0) return 0;
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const temp = currSum + nums[i];
      if(temp< nums[i]) {
        currSum = nums[i];
      } else {
        currSum = temp;
      }
      if(currSum > maxSum) {
        maxSum = currSum;
      }
    }
    return maxSum;
  }

  // Example usage of Kadane's algorithm in a loop find which subarray has the maximum sum

  function kadaneInLoopFindWhichArray(nums: number[]): number[] {
    if (nums.length === 0) return [];
    let maxSum = nums[0];
    let currSum = nums[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;  
    for (let i = 1; i < nums.length; i++) {
      const temp = currSum + nums[i];
      if (temp < nums[i]) {
        currSum = nums[i];  
        tempStart = i;
      }
      else {
        currSum = temp;
      }
      if (currSum > maxSum) {
        maxSum = currSum;
        start = tempStart;  
        end = i;  
      }
    }
    return nums.slice(start, end + 1);  
  }
  
  return (
    <div>
      <h2>Max Subarray Sum (Kadane's Algorithm)</h2>
      <p>
        Kadane's Algorithm efficiently finds the maximum sum of a contiguous
        subarray in linear time. You can use a normal for loop to get the sum of
        all elements, but Kadane's Algorithm finds the maximum sum of any
        contiguous subarray, not just the total sum.
      </p>

      <SyntaxHighlighter language="typescript" style={dark}>
        {kadane.toString()}
      </SyntaxHighlighter>
      <p>
        Kadane's Algorithm works by maintaining a running sum of the maximum
        subarray ending at each position and updating the global maximum as it
        iterates through the array. It has a time complexity of O(n) and a space
        complexity of O(1).
      </p>
      <p>
        Example Input: [1, -2, 3, 4, -1, 2, 1, -5, 4]
      </p>
      <p>
        Output: {kadane([1, -2, 3, 4, -1, 2, 1, -5, 4])}
      </p>
      <p>
        This function uses a single loop to traverse the array and calculate the maximum subarray sum efficiently.
      </p>
      <p>Time Complexity: O(n) - Linear time complexity as we traverse the array once.</p>
      <p>Space Complexity: O(1) - Constant space complexity as we use only a few variables.</p>
   
      <h3>Kadane's Algorithm in a Loop</h3>
      <SyntaxHighlighter language="typescript" style={dark}>
        {kadaneInLoop.toString()}
      </SyntaxHighlighter>
      <p>
        This version of Kadane's Algorithm uses a loop to calculate the maximum subarray sum, demonstrating the same principles.    
      </p>
      <p>
        Example Input: [1, -2, 3, 4, -1, 2, 1, -5, 4] 
      </p>
      <p>
        Output: {kadaneInLoop([1, -2, 3, 4, -1, 2, 1, -5, 4])}    
      </p>
      <p>  
        This function also uses a single loop to traverse the array and calculate the maximum subarray sum efficiently.
      </p>
      <p>Time Complexity: O(n) - Linear time complexity as we traverse the array once.</p>
      <p>Space Complexity: O(1) - Constant space complexity as we use only a few variables.</p>

      <h3>Kadane's Algorithm in a Loop to Find Which Subarray Has the Maximum Sum</h3>
      <SyntaxHighlighter language="typescript" style={dark}>
        {kadaneInLoopFindWhichArray.toString()}
      </SyntaxHighlighter>
      <p>
        This version of Kadane's Algorithm not only calculates the maximum subarray sum but also identifies which subarray has that sum.  
      </p>
      <p>
        Example Input: [1, -2, 3, 4, -1, 2, 1, -5, 4]
      </p>
      <p>
        Output: {JSON.stringify(kadaneInLoopFindWhichArray([1, -2, 3, 4, -1, 2, 1, -5, 4]))}
      </p>
      <p>
        This function uses a single loop to traverse the array and calculate the maximum subarray sum while also keeping track of the start and end indices of the subarray.
      </p>
      <p>Time Complexity: O(n) - Linear time complexity as we traverse the array once.</p>
      <p>Space Complexity: O(1) - Constant space complexity as we use only a few variables.</p>
    </div>
  );
};

export default MaxSubarraySumKadane;
