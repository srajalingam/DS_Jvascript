import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";


const findLongestSubstring = (str: string): number => {
    const charMap: { [key: string]: number } = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        const char = str[right];

        // If the character is already in the map, move the left pointer
        if (charMap[char] !== undefined && charMap[char] >= left) {
            left = charMap[char] + 1;
        }

        // Update the character's index in the map
        charMap[char] = right;

        // Calculate the maximum length of the substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

const FindLongestSubstring: React.FC = () => {
  return (
    <div>
      <h1>Find Longest Substring Without Repeating Characters</h1>
      <p>This function finds the length of the longest substring without repeating characters.</p>
      <SyntaxHighlighter language="typescript" style={dark}>
        {findLongestSubstring.toString()}
      </SyntaxHighlighter>
      <h3>Example:</h3>
      <p>{`findLongestSubstring("abcabcbb") : ${findLongestSubstring("abcabcbb")}`}</p>
      <p>{`findLongestSubstring("bbbbb") : ${findLongestSubstring("bbbbb")}`}</p>
      <p>{`findLongestSubstring("pwwkew") : ${findLongestSubstring("pwwkew")}`}</p>
      <p>Time complexity: O(N) where N is the length of the string.</p>
      <p>Space complexity: O(M) where M is the number of unique characters in the string.</p>
    </div>
  );
}

export default FindLongestSubstring;