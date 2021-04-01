import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import formatCode from "./stringFormatter";
import './codeDisplay.css'

export default function Codedisplay({ component }) {
   const [codeDisplay, setCodeDisplay] = useState(false);

   const componentRawString = ReactDOMServer.renderToStaticMarkup(component);
   const componentFormattedString = formatCode(componentRawString);

   let copy = () => {
      navigator.clipboard.writeText(componentFormattedString).then(
         function () {
            console.log("success");
            alert("code copied to clipboard!");
         },
         function () {
            console.log("copied");
         }
      );
   };
   return (
      <>
         <div className="code-container">
            <div className="code-header">
               <ul className="list-nav-tabs flex-row justify-end">
                  <li onClick={() => setCodeDisplay(false)}>Component</li>
                  <li onClick={() => setCodeDisplay(true)}>Code</li>
                  <li onClick={copy}>Copy</li>
               </ul>
            </div>
            <div>
               {!codeDisplay && <div className="demo-block">{component}</div>}
               {codeDisplay && (
                  <SyntaxHighlighter
                     language="html"
                     style={vscDarkPlus}
                     wrapLines={true}
                     wrapLongLines={false}
                     customStyle={{ whiteSpace: "pre-wrap",margin:"0px"}}
                  >
                     {componentFormattedString}
                  </SyntaxHighlighter>
               )}
            </div>
         </div>
      </>
   );
}
