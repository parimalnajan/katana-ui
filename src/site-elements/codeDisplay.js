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
   let [copyToast,setCopyToast] = useState({visibility: "hidden"})
 
   let copyToClipboard = (code) => {
      navigator.clipboard.writeText(code).then(
         function () {
            setCopyToast({...copyToast,visibility:"visible"});
            setTimeout(() => {
               setCopyToast({...copyToast,visibility: "hidden"});
            }, 2000);
            console.log("success");
            //codeType===HTMLString?alert("HTML code copied!"):alert("JSX code Copied!");
            
         },
         function () {
            console.log("copied");
         },
         function(){
           
         }
      );
   };
   return (
      <>
         <div className="code-container">
            <div className="code-header flex-row">
               <ul className="list-basic flex-row text-sm medium code-header__list">
                  {codeDisplay ? (
                     <>
                        <li onClick={() => setCodeType(HTMLString)}>
                           {"html"}
                        </li>
                        <li onClick={() => setCodeType(JSXString)}>{"jsx"}</li>
                        <li onClick={() => setCodeDisplay(false)}>
                        <i class="far fa-eye"></i>
                        </li>
                     </>
                  ) : (
                     <li onClick={() => setCodeDisplay(true)}>
                        <i class="fas fa-code"></i>
                     </li>
                  )}

                  <li onClick={() => copyToClipboard(codeType)}>
                     <i class="fas fa-clipboard"></i>
                  </li>
               </ul>
            </div>
            
            <div>
            <div style={copyToast} className="copy-toast--master">
            <div class="alert--success text-sm copy-toast">
               <i aria-hidden="true" class="fas fa-check-circle"></i>
               <span> copied successfully</span>
            </div>
            </div>
               {!codeDisplay ? (
                  <div className="demo-block">{component}</div>
               ) : (
                  <SyntaxHighlighter
                     language="html"
                     style={vscDarkPlus}
                     wrapLines={true}
                     wrapLongLines={true}
                     customStyle={{
                        whiteSpace: "pre-wrap",
                        margin: "0px",
                        paddingTop: "0px",
                        borderBottomLeftRadius:"8px",
                        borderBottomRightRadius:"8px"
                     }}
                  >
                     {codeType}
                  </SyntaxHighlighter>
               )}
            </div>
         </div>
      </>
   );
}
