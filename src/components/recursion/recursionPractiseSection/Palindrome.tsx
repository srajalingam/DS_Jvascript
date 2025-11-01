import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function isPalindromeRecursive(str: string): boolean {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check the first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    // Recursive case: check the substring without the first and last characters
    return isPalindromeRecursive(str.slice(1, -1));
}

function Palindrome() {
  return (
    <div>
        <h2>Palindrome Check using Recursion</h2>
        <p>Write a recursive function called isPalindrome which accepts a string and returns true if the string is a palindrome (reads the same forwards and backwards).</p>
        <p>Function Code:</p>
        <SyntaxHighlighter language="typescript" style={dark}>
            {isPalindromeRecursive.toString()}
        </SyntaxHighlighter>
        <h3>Explanation:</h3>
        <p>This function checks if a string is a palindrome by comparing the first and last characters, and recursively checking the substring that excludes these characters.</p>
        <h3>Example:</h3>
        <p>{`isPalindromeRecursive("racecar") : ${isPalindromeRecursive("racecar")}`}</p>
        <p>{`isPalindromeRecursive("hello") : ${isPalindromeRecursive("hello")}`}</p>
        <p>{`isPalindromeRecursive("madam") : ${isPalindromeRecursive("madam")}`}</p>
        <p>Time Complexity: O(N) where N is the length of the string.</p>
        <p>Space Complexity: O(N) due to the call stack from recursion.</p>
    </div>
  )
}

export default Palindrome