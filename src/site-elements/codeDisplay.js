import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {formatToHTML,formatToJSX} from "./stringFormatter";
import './codeDisplay.css'

export default function Codedisplay({ component }) {
   const [codeDisplay, setCodeDisplay] = useState(false);

   const componentRawString = ReactDOMServer.renderToStaticMarkup(component);
   const HTMLString = formatToHTML(componentRawString);   
   const JSXString = formatToJSX(HTMLString)

   const [codeType,setCodeType] = useState(HTMLString);
 
   let copyToClipboard = (code) => {
      navigator.clipboard.writeText(code).then(
         function () {
            console.log("success");
            codeType===HTMLString?alert("HTML code copied!"):alert("JSX code Copied!");
         },
         function () {
            console.log("copied");
         }
      );
   };
   return (
      <>
         <div className="code-container">
            <div className="code-header flex-row">          
               <ul className="list-basic flex-row text-sm medium code-header__list">
                  {codeDisplay
                     ?<li onClick={() => setCodeDisplay(false)}>Component</li>
                     :<li onClick={() => setCodeDisplay(true)}>View Code</li>
                  }
                  <li onClick={()=>setCodeType(HTMLString)}>{'<html>'}</li>
                  <li onClick={()=>setCodeType(JSXString)}>{'<jsx>'}</li>
                  <li onClick={()=>copyToClipboard(codeType)}>Copy</li>
               </ul>
            </div>
            <div>              
                {!codeDisplay
                  ? <div className="demo-block">{component}</div>
                  : <SyntaxHighlighter
                     language="html"
                     style={vscDarkPlus}
                     wrapLines={true}
                     wrapLongLines={true}
                     customStyle={{ whiteSpace: "pre-wrap",margin:"0px",paddingTop:"0px"}}
                  >
                     {codeType}
                  </SyntaxHighlighter>
               }
            </div>
         </div>
      </>
   );
}
