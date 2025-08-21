import type React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";


function averagePairFn(arr: number[], targetAvg: number): boolean {
    if (arr.length < 2) return false; // Not enough elements for a pair
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const currentAvg = (arr[left] + arr[right]) / 2;
        if (currentAvg === targetAvg) {
            return true; // Found a pair with the target average
        }
        if (currentAvg < targetAvg) {
            left++; // Move left pointer to increase average
        }
        else {
            right--; // Move right pointer to decrease average
        }
    }
    return false; // No pair found with the target average
}

const AveragePair: React.FC = () => {
    return (
        <div>
            <h2>Average Pair</h2>
            <p>Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.</p>
            <p>Function Code:</p>
              <SyntaxHighlighter language="typescript" style={dark}>
                {averagePairFn.toString()}
            </SyntaxHighlighter>
            <h3>Explanation:</h3>  
            <p>This function uses a two-pointer technique to find a pair of numbers in a sorted array that averages to a given target. It starts with pointers at both ends of the array and adjusts them based on the current average compared to the target.</p>
            <h3>Example:</h3>
            <p>{`averagePairFn([1, 2, 3, 4, 5], 3) : ${averagePairFn([1, 2, 3, 4, 5], 3)}`}</p>
            <p>{`averagePairFn([1, 2, 3, 4, 5], 2.5) : ${averagePairFn([1, 2, 3, 4, 5], 2.5)}`}</p>
            <p>{`averagePairFn([1, 2, 3, 4, 5], 4) : ${averagePairFn([1, 2, 3, 4, 5], 4)}`}</p>
            <p>{`averagePairFn([1, 2, 3, 4, 5], 6) : ${averagePairFn([1, 2, 3, 4, 5], 6)}`}</p>
            <p>Time Complexity: O(N) where N is the length of the array.</p>
            <p>Space Complexity: O(1) since we are using only two pointers.</p>
         
        </div>
    )

}

export default AveragePair;

