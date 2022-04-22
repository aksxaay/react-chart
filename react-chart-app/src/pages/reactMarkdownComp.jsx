import React, { useState, useEffect } from "react";

import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import remarkGfm from "remark-gfm";
import remarkCodesandbox from "remark-codesandbox";

import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";

import raw from "../docs/sample.md";

// Did you know you can use tildes instead of backticks for code in markdown? ✨

const ReactMarkdownComp = () => {
  const [termsFrPath, settermsFrPath] = useState(null);
  useEffect(() => {
    console.log("about to fetch response");

    const markdown = fetch(raw)
      .then((response) => response.text())
      .then((markdown) => {
        console.log(markdown);
        settermsFrPath(markdown);
      });
  }, []);

  return (
    <>
      <ReactMarkdown
        children={termsFrPath}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={([rehypeHighlight], [rehypeSanitize], [rehypeRaw])}
      />
    </>
  );
};

export default ReactMarkdownComp;
