import React from "react";

import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import remarkGfm from "remark-gfm";

import raw from "../docs/sample.md";

// Did you know you can use tildes instead of backticks for code in markdown? ✨

console.log("about to fetch response");

const ReactMarkdownComp = () => {
  const markdown = fetch(raw)
    .then((response) => response.text())
    .then((response) => response);
  return (
    <>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </>
  );
};

export default ReactMarkdownComp;
