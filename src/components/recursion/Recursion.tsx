import React from 'react';
import { Link, Outlet } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Recursion: React.FC = () => {
    return (
        <div>
            <Link to="reverse">Reverse</Link> &nbsp;|
            <Link to="palindrome">Palindrome</Link> &nbsp;|
            <Outlet/>
        </div>
    );
};

export default Recursion;