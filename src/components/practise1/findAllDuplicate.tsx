import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function findAllDuplicatefninSet(arr: number[]): number[] {
    const seen: Set<number> = new Set();
    const duplicates: Set<number> = new Set();  
    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num); // add to duplicates if already seen
        } else {
            seen.add(num); // add to seen if not already present
        }
    }
    return Array.from(duplicates); // convert Set to Array
}

function findAllDuplicateinway2(nums: number[]): number[] | false {
  if(!nums.length) return false
  const countNumbers: Record<number, number>={};
  for(const val of nums){
      countNumbers[val]=(countNumbers[val] || 0 ) +1
  }
  const getAllDuplicate:number[]=[]
  for(const key in countNumbers){
      if(countNumbers[key]>1){
         getAllDuplicate.push(+key)  
      }
  }
  return getAllDuplicate
}

const FindAllDuplicate:React.FC = () => {
    return (
        <div>
            <h2>Find All Duplicate</h2>
            <p>Write a function that takes an array of integers and returns an array of all duplicate integers in the input array.</p>
            <p>Function Code:</p>
            <SyntaxHighlighter language="typescript" style={dark}>
                {findAllDuplicatefninSet.toString()}
            </SyntaxHighlighter>
            <h3>Explanation:</h3>
            <p>This function uses a Set to track seen numbers and another Set to track duplicates. It iterates through the array, adding numbers to the seen Set and checking if they are already present to identify duplicates.</p>
            <h3>Example:</h3>
            <p>{`findAllDuplicatefninSet([1, 2, 3, 2, 4, 5, 1]) : ${JSON.stringify(findAllDuplicatefninSet([1, 2, 3, 2, 4, 5, 1]))}`}</p>
            <p>{`findAllDuplicatefninSet([1, 2, 3]) : ${JSON.stringify(findAllDuplicatefninSet([1, 2, 3]))}`}</p>
            <p>{`findAllDuplicatefninSet([1, 1, 2, 2, 3, 3]) : ${JSON.stringify(findAllDuplicatefninSet([1, 1, 2, 2, 3, 3]))}`}</p>
            <p>Time Complexity: O(N) where N is the length of the array.</p>
            <p>Space Complexity: O(N) for storing seen and duplicate numbers.</p>

            <h3>Alternative Method:</h3>
            <SyntaxHighlighter language="typescript" style={dark}>  
                {findAllDuplicateinway2.toString()}
            </SyntaxHighlighter>
            <p>This alternative method uses a frequency count to identify duplicates.</p>
            <h3>Example:</h3>
            <p>{`findAllDuplicateinway2([1, 2, 3, 2, 4, 5, 1]) : ${JSON.stringify(findAllDuplicateinway2([1, 2, 3, 2, 4, 5, 1]))}`}</p>
            <p>{`findAllDuplicateinway2([1, 2, 3]) : ${JSON.stringify(findAllDuplicateinway2([1, 2, 3]))}`}</p>
            <p>{`findAllDuplicateinway2([1, 1, 2, 2, 3, 3]) : ${JSON.stringify(findAllDuplicateinway2([1, 1, 2, 2, 3, 3]))}`}</p>
            <p>Time Complexity: O(N) where N is the length of the array.</p>
            <p>Space Complexity: O(N) for storing the frequency count.</p>  

            <h3>Note:</h3>
            <p>Both methods effectively find duplicates in an array, but the first method using Sets is often more straightforward and efficient for this specific task.</p>
            <h3>Usage:</h3>
            <p>To use these functions, simply call them with an array of integers as shown in the examples above.</p>
            <h3>Conclusion:</h3>
            <p>Finding duplicates in an array is a common problem in programming. The methods provided here demonstrate efficient ways to achieve this using Sets and frequency counts.</p>


        </div>
    );
}

export default FindAllDuplicate;