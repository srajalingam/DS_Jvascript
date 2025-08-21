

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function isSubsequencefn(str1: string, str2: string): boolean {
    let i = 0, j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++; // move to next character in str1
        }
        j++; // always move to next character in str2
    }
    return i === str1.length; // if we reached the end of str1, it's a subsequence
}

const IsSubsequence:React.FC = () => {
    return (
        <div>   
            <h2>Is Subsequence</h2>
            <p>Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.</p>
            <p>Function Code:</p>
            <SyntaxHighlighter language="typescript" style={dark}>
                {isSubsequencefn.toString()}
            </SyntaxHighlighter>
            <h3>Explanation:</h3>
            <p>This function uses two pointers to check if the first string is a subsequence of the second string. It iterates through both strings, moving the pointer in the first string only when a matching character is found in the second string.</p>
            <h3>Example:</h3>
            <p>{`isSubsequencefn("abc", "ahbgdc") : ${isSubsequencefn("abc", "ahbgdc")}`}</p>
            <p>{`isSubsequencefn("axc", "ahbgdc") : ${isSubsequencefn("axc", "ahbgdc")}`}</p>
            <p>{`isSubsequencefn("hello", "hello world") : ${isSubsequencefn("hello", "hello world")}`}</p>
            <p>{`isSubsequencefn("abc", "def") : ${isSubsequencefn("abc", "def")}`}</p>
            <p>Time Complexity: O(N) where N is the length of the second string.</p>
            <p>Space Complexity: O(1) since we are using only two pointers.</p>
            <h3>Note:</h3>
            <p>This function assumes that the input strings only contain lowercase letters and does not handle cases where the strings are empty.</p>
        </div>
    );
}

export default IsSubsequence;
