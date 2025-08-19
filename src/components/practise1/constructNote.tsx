

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function constructNote(message: string, letters: string): boolean {
  if (message.length > letters.length) return false;

  const letterCount: Record<string, number> = {};

  // Count frequencies in letters
  for (const char of letters) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  // Check if message can be formed
  for (const char of message) {
    if (!letterCount[char]) {
      return false; // not enough of this character
    }
   // letterCount[char]--; // use one occurrence
  }

  return true;
}

const ConstructNote: React.FC = () => {
      return <div>
        <h2>Construct Note</h2>
        <p>Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.</p>
        <p>Function Code:</p>
        <SyntaxHighlighter language="typescript" style={dark}>
            {constructNote.toString()}
        </SyntaxHighlighter>
        <h3>Explanation:</h3> 
        <p>This function checks if a message can be constructed from the available letters by counting the occurrences of each letter.</p>
        <h3>Example:</h3>
        <p>{`constructNote("hello", "heoll") : ${constructNote("hello", "heoll")}`}</p>
        <p>{`constructNote("hello", "world") : ${constructNote("hello", "world")}`}</p>
        <p>{`constructNote("abc", "aabbcc") : ${constructNote("abc", "aabbcc")}`}</p>
        <p>Time Complexity: O(N) where N is the length of the message.</p>
        <p>Space Complexity: O(1) since the letter count is limited to the alphabet size.</p>
      </div>;
  }

export default ConstructNote;


