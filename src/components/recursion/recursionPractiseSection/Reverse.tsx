import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function reverseFnString(str: string): string {
    if (str.length <= 1) {
        return str;
    }
    return reverseFnString(str.slice(1)) + str[0];
}

function Reverse() {
  return (
    <div>
        <h2>Reverse String using Recursion</h2>
        <p>Write a recursive function called reverse which accepts a string and returns a new string in reverse.</p>
        <p>Function Code:</p>
        <SyntaxHighlighter language="typescript" style={dark}>
            {reverseFnString.toString()}
        </SyntaxHighlighter>
        <h3>Explanation:</h3>
        <p>This function reverses a string by recursively calling itself with the substring excluding the first character, and appending the first character at the end.</p>
        <h3>Example:</h3>
        <p>{`reverseFnString("hello") : ${reverseFnString("hello")}`}</p>
        <p>{`reverseFnString("world") : ${reverseFnString("world")}`}</p>
        <p>{`reverseFnString("recursion") : ${reverseFnString("recursion")}`}</p>
        <p>Time Complexity: O(N) where N is the length of the string.</p>
        <p>Space Complexity: O(N) due to the call stack from recursion.</p>
    </div>
  )
}

export default Reverse