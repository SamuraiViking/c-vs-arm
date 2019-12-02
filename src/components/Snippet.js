import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Snippet = (props) => {
  return (
    <SyntaxHighlighter className="snippet" language={props.lauguage} style={atomOneDark} showLineNumbers>
        {props.code}
    </SyntaxHighlighter>
  );
};

export default Snippet;