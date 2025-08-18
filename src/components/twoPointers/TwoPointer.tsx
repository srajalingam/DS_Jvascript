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

const TwoPointer: React.FC = () => {
    return (
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
    );
};

export default TwoPointer;