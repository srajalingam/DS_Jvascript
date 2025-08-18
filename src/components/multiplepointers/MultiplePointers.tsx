import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MultiplePointers: React.FC = () => {
    console.log("MultiplePointers component mounted");
    const multiplePointersExample = (arr: number[]) => {
         // Example of Multiple Pointers pattern
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] + arr[right] === 0) {
                console.log(`Pair found: ${arr[left]}, ${arr[right]}`);
                return [arr[left], arr[right]];
            }else if (arr[left] + arr[right] < 0) {
                left++;
            }
            else {
                right--;
            }   

        }
    }
    return (
        <div>
            <h2>Multiple Pointers Pattern</h2>
            <p>
                This component will demonstrate the Multiple Pointers pattern in algorithms.
                This pattern is useful for solving problems involving sorted arrays or linked lists, where we can use two pointers to traverse the data structure efficiently.
            </p>
            <SyntaxHighlighter language="typescript" style={dark}>
                {multiplePointersExample.toString()}
            </SyntaxHighlighter>
            <h3>Example Usage:</h3>
            <p>Input: multiplePointersExample([-3, -2, -1, 0, 1, 2, 3])</p>

            output: {multiplePointersExample([-3, -2, -1, 0, 1, 2, 3]) ? "Pair found" : "No pair found"}
            <p>Example Explanation:</p>
            <p>The function initializes two pointers, one at the start and one at the end of the array. It checks if the sum of the values at these pointers is zero. If it is, it returns the pair. If the sum is less than zero, it moves the left pointer to the right; if greater, it moves the right pointer to the left.</p>
            <p>This pattern is efficient for problems involving sorted arrays or linked lists, allowing us to reduce the time complexity compared to a brute force approach.</p>
        
            <p>Time Complexity: O(n) - Linear time complexity as we traverse the array once.</p>
            <p>Space Complexity: O(1) - Constant space complexity as we use only a few variables.</p>
        </div>
    );
}


export default MultiplePointers;