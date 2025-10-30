import type React from "react";
import { Link, Outlet } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function sameFrequency(num1: number, num2: number): boolean {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;
    const frequencyCounter1: { [key: string]: number } = {};
    const frequencyCounter2: { [key: string]: number } = {};

    for (const val of strNum1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (const val of strNum2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (const key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}

const Practise1: React.FC = () => {
  return (
    <div>  
        <Link to="areThereDuplicates">areThereDuplicates</Link> &nbsp;|
        <Link to="constructNote">constructNote</Link> &nbsp;|
        <Link to="findAllDuplicate">findAllDuplicate</Link> &nbsp;|
        <Link to="averagePair">averagePair</Link> &nbsp;|
        <Link to="isSubsequence">isSubsequence</Link> &nbsp;|
        <Link to="findMaxInSubArray">Bruitforce(findMaxInSubArray)</Link> &nbsp;|
        <Link to="slidingwindowMaxSubarray">Sliding Window Maximum Subarray</Link> &nbsp;|
        <Link to="findLongestSubstring">Find Longest Substring</Link> &nbsp;|
        <h1>Practise Section 1</h1>
        <p>This section is designed for practicing various coding problems and algorithms.</p>
        <p>
            Frequency Counter - Pattern
            Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
            Your solution MUST have the following complexities:
            Time: O(N)
        </p>

        <SyntaxHighlighter language="typescript" style={dark}>
            {sameFrequency.toString()}
        </SyntaxHighlighter>
        <h3>Explanation:</h3>
        <p>This function checks if two numbers have the same frequency of digits by counting the occurrences of each digit in both numbers.</p> 
        <h3>Example:</h3>
        <p>{`sameFrequency(182, 281) : ${sameFrequency(182, 281)}`}</p>
        <p>{`sameFrequency(34, 14) : ${sameFrequency(34, 14)}`}</p>
        <p>{`sameFrequency(3589578, 5879385) : ${sameFrequency(3589578, 5879385)}`}</p>
        <p>{`sameFrequency(22, 222) : ${sameFrequency(22, 222)}`}</p>
        
        Timecomplexity: O(N) where N is the number of digits in the larger number.
        Spacecomplexity: O(1) since the frequency counters are fixed size (0-9 digits).
        <Outlet />
    </div>
  );
}

export default Practise1;