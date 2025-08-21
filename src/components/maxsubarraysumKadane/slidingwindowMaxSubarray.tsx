import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function SlidingwindowMaxSubarrayFn(arr: number[], num: number) {

        if (arr.length < num) return 0;
    
        let maxSum = 0;
        let tempSum = 0;
    
        // Calculate the sum of the first 'num' elements
        for (let i = 0; i < num; i++) {
        tempSum += arr[i];
        }
        maxSum = tempSum;
    
        // Slide the window over the rest of the array
        for (let i = num; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
        }
    
        return maxSum;

}

const SlidingwindowMaxSubarray:React.FC = () => {
  return (
    <div>
        <h1>Sliding Window Maximum Subarray</h1>
        <p>This function finds the maximum sum of a subarray of a given length using the sliding window technique.</p>
        <SyntaxHighlighter language="typescript" style={dark}>
            {SlidingwindowMaxSubarrayFn.toString()}
        </SyntaxHighlighter>
        <h3>Example:</h3>
        <p>{`SlidingwindowMaxSubarrayFn([1, 2, 3, 4, 5], 2) : ${SlidingwindowMaxSubarrayFn([1, 2, 3, 4, 5], 2)}`}</p>
        <p>{`SlidingwindowMaxSubarrayFn([5, -2, 3, 4], 3) : ${SlidingwindowMaxSubarrayFn([5, -2, 3, 4], 3)}`}</p>
        <p>{`SlidingwindowMaxSubarrayFn([1, 2, 3, 4, 5], 5) : ${SlidingwindowMaxSubarrayFn([1, 2, 3, 4, 5], 5)}`}</p>
        <p>{`SlidingwindowMaxSubarrayFn([1, 2, 3, 4, 5], 6) : ${SlidingwindowMaxSubarrayFn([1, 2, 3, 4, 5], 6)}`}</p>
        <p>time complexity: O(N) where N is the length of the array.</p>
        <p>space complexity: O(1) since we are using a fixed amount of space for the variables.</p>
        <h3>Explanation:</h3>       
        <p>
            The sliding window technique allows us to efficiently calculate the sum of a subarray of a fixed length by maintaining a running sum and adjusting it as we slide the window across the array.  
            This approach avoids the need for nested loops, resulting in a linear time complexity.
        </p>
    </div>
  );
}

export default SlidingwindowMaxSubarray;