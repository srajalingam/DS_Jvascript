import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function countUniqueValues(arr: number[]): number {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

function reverseTwoPointer(str: string): string {
    // Convert to array of characters (strings are immutable in JS)
  const arr = str.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap characters in place
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join('');
}
function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const TwoPointer: React.FC = () => {
    return (
        <>
            <div>
                <h2>Count Unique Values (Two Pointer Pattern)</h2>
                <p>This component demonstrates the Two Pointer pattern to count unique values in a sorted array.</p>
                <p>Function Code:</p>
                <SyntaxHighlighter language="typescript" style={dark}>
                    {countUniqueValues.toString()}
                </SyntaxHighlighter>
                <p>Example Input: [1, 1, 2, 2, 3, 4]</p>
                <p>Output: {countUniqueValues([1, 1, 2, 2, 3, 4])}</p>
                <p>This function iterates through the array with two pointers, one for the current unique value and another for the next element.</p>
                
                <p>Time Complexity: O(n) - Linear time complexity as we traverse the array once.</p>
                <p>Space Complexity: O(1) - Constant space complexity as we use only a few variables.</p>
            </div>
            <hr />
            <div>
                <h2>Reverse String (Two Pointer Pattern)</h2>
                <p>This component demonstrates the Two Pointer pattern to reverse a string.</p>
                <p>Function Code:</p>
                <SyntaxHighlighter language="typescript" style={dark}>
                    {reverseTwoPointer.toString()}
                </SyntaxHighlighter>
                <p>Example Input: "hello"</p>
                <p>Output: "{reverseTwoPointer("hello")}"</p>
                <p>This function uses two pointers to swap characters from the start and end of the string, moving towards the center.</p>
                <p>Time Complexity: O(n) - Linear time complexity as we traverse half the string.</p>
                <p>Space Complexity: O(n) - Space complexity is linear due to the array created from the string.</p>
            </div>
            <hr />
            <div>
                <h2>Palindrome Check (Two Pointer Pattern)</h2>
                <p>This component demonstrates the Two Pointer pattern to check if a string is a palindrome.</p>
                <p>Function Code:</p>
                <SyntaxHighlighter language="typescript" style={dark}>
                    {isPalindrome.toString()}
                </SyntaxHighlighter>
                <p>Example Input: "racecar"</p>
                <p>Output: {isPalindrome("racecar") ? "true" : "false"}</p>
                <p>This function uses two pointers to compare characters from the start and end of the string, moving towards the center.</p>
                <p>Time Complexity: O(n) - Linear time complexity as we may need to check each character.</p>
                <p>Space Complexity: O(1) - Constant space complexity as we use only a few variables.</p>
            </div>
        </>
    );
};

export default TwoPointer;