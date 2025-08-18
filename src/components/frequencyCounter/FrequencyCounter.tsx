import React, { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const FrequencyCounter: React.FC = () => {
    
    useEffect(() => {
        console.log("FrequencyCounter component mounted");
        same([2,3,4],[1,16,9]);
        return () => {
            console.log("FrequencyCounter component unmounted");
        }
    }, []);

    // Time Complexity: O(n^2) due to indexOf (linear search) inside a loop
    // Space Complexity: O(1) (ignoring input size, as arr2 is mutated in place)
    const same = (arr1: number[], arr2: number[]) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            const index = arr2.indexOf(arr1[i] ** 2);
            if (index === -1) {
                return false;
            }
            arr2.splice(index, 1);
        }
        console.log("Arrays are the same");
        return true
    };

    const sameFunctionString = same.toString();

    const refactoredSame = (arr1: number[], arr2: number[]) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        const frequencyCounter1: { [key: number]: number } = {};
        const frequencyCounter2: { [key: number]: number } = {};
        for (const val of arr1) {
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        for (const val of arr2) {
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
        for (const key in frequencyCounter1) {
            const numKey = Number(key);
            if (!(numKey ** 2 in frequencyCounter2)) {
                return false;
            }   
            if (frequencyCounter2[numKey ** 2] !== frequencyCounter1[key]) {
                return false;
            }
        }
        console.log("Refactored arrays are the same");
        return true;
    }
    const refactoredSameFunctionString = refactoredSame.toString();
   
    return (
        <div>
            <h2>Function Code:</h2>
            <SyntaxHighlighter language="typescript" style={dark}>
                {sameFunctionString}
            </SyntaxHighlighter>
            <h3>Explanation:</h3>
            <p>This function checks if two arrays have the same frequency of elements, where one array's elements are the squares of the other.</p>
            <p>It first checks if the lengths of the arrays are equal. If not, it returns false. Then, it iterates through the first array, checking if each element's square exists in the second array. If an element's square is found, it removes that element from the second array to prevent counting it again.</p>
            <p>If all elements' squares are found, it returns true.</p>
            <h3>Usage:</h3>
            <p>Call the function with two arrays as arguments to check if they have the same frequency of squared elements.</p>
            <h3>Output:</h3>
            <p>Check the console for the output of the function.</p>
            same([2,3,4],[1,16,9])- 
            <SyntaxHighlighter language="typescript" style={dark}>
                {same([2,3,4],[1,16,9]) ? "Arrays are the same" : "Arrays are not the same"}
            </SyntaxHighlighter> 
             same([1,8,3],[64,1,9]) -   
            <SyntaxHighlighter language="typescript" style={dark}>
               {same([1,3,4],[1,16,9]) ? "Arrays are the same" : "Arrays are not the same"}
            </SyntaxHighlighter>  

            <h3>Time Complexity:</h3>
            <p>O(n^2) due to the use of indexOf inside a loop, which performs a linear search for each element.</p>
            <h3>Space Complexity:</h3>
            <p>O(1) if we ignore the input size, as the second array is mutated in place.</p> 

            <h2>Refactored Function Code:</h2>
            <SyntaxHighlighter language="typescript" style={dark}>
                {refactoredSameFunctionString}
            </SyntaxHighlighter>
            <h3>Refactored Explanation:</h3>
            <p>This refactored function uses frequency counters to check if two arrays have the same frequency of elements, where one array's elements are the squares of the other.</p>    
            <p>It first checks if the lengths of the arrays are equal. If not, it returns false. Then, it creates frequency counters for both arrays to count the occurrences of each element.</p>
            <p>Finally, it checks if each element in the first frequency counter has its square in the second frequency counter with the same count. If all checks pass, it returns true.</p>
            <h3>Refactored Usage:</h3>
            <p>Call the refactored function with two arrays as arguments to check if they have the same frequency of squared elements.</p>
            <h3>Refactored Output:</h3>
            <p>Check the console for the output of the refactored function.</p>
            refactoredSame([2,3,4],[1,16,9]) -  
            <SyntaxHighlighter language="typescript" style={dark}>
                {refactoredSame([2,3,4],[1,16,9]) ? "Refactored arrays are the same" : "Refactored arrays are not the same"}
            </SyntaxHighlighter> 
            refactoredSame([1,8,3],[64,1,9]) -  
            <SyntaxHighlighter language="typescript" style={dark}>
                {refactoredSame([1,3,4],[1,16,9]) ? "Refactored arrays are the same" : "Refactored arrays are not the same"}
            </SyntaxHighlighter>
            <h3>Refactored Time Complexity:</h3>
            <p>O(n) due to the single pass through each array to create frequency counters.</p>
            <h3>Refactored Space Complexity:</h3>
            <p>O(n) for storing the frequency counters, where n is the number of unique elements in the arrays.</p>
        </div>
    );
};

export default FrequencyCounter;