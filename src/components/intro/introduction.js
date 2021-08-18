//you can override css by writing a new class and adding !important; 
//hence you can make your own color and size palettes coded inside your
//css variables and quickly append a new class with the !important properties


import React, { useRef, useState } from 'react'

import Toast from 'src/site-elements/toast';
export default function Introduction(props) {
   
   const [copyToast, setCopyToast] = useState(false);

    let copyLink = () => {
       navigator.clipboard.writeText(
          `<linkhref="https://cocoa-ui.netlify.app/dist/css/katana.css  rel="stylesheet" ">`
       );
       setCopyToast(true);
       setTimeout(() => {
          setCopyToast(false);
       }, 2000);
    };
    return (
       <div className="intro-page">
          <div className="text-3xl semibold mt1 mb1">
             Getting Started with KatanaUI
          </div>
          <div className="text-gray5 text-md mb2 medium">
             Here's how you can quickly include KatanaUI Components in your
             Project
          </div>

          <div class="card--basic--horizontal flex-col mb1">
             <div className="flex-row copy-header">
             {copyToast?<Toast sizePx={"10px"}>Copied Successfully!</Toast>:<span></span>}
            
             <i className="fas fa-clipboard mt0 ml1 mb0"  onClick={copyLink}> </i>
             </div>
             <span class="text-gray5">
                <span>{"<"}</span>               
                link href="https://cocoa-ui.netlify.app/dist/css/katana.css "
                rel="stylesheet"
                <span>{">"}</span>
             </span>
          </div>
          <div className="text-gray5 text-md mt2 medium">
           Alternatively, download the .css file and paste it in your project directory, and update the link tag accordingly.
          </div>
          <div class="card--basic--horizontal flex-col mb1 mt1">
               <span class="text-gray5 mt1">
                <span>{"<"}</span>               
                link href="project/pathTo/katana.css "
                rel="stylesheet"
                <span>{">"}</span>
             </span>
          </div>
        
          <a
             href="/dist/css/katana.css"
             type="button"
             download="katana.css"
             className="intro-button button-primary"
             style={{textDecoration:"none",backgroundColor:"var(--theme1)"}}             
          >
             Download .css
          </a>
         
       </div>
    );
}
