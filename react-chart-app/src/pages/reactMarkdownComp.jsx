import React from "react";

import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import remarkGfm from "remark-gfm";

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

**strong boi**

- bullet points

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

function ReactMarkdownComp() {
  return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />;
}

export default ReactMarkdownComp;
