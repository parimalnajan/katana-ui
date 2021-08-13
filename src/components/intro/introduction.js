//you can override css by writing a new class and adding !important; 
//hence you can make your own color and size palettes coded inside your
//css variables and quickly append a new class with the !important properties


import React from 'react'

import Cards from '../cards'

let ColorTile = ({ color }) => {
   var bodyStyles = window.getComputedStyle(document.body);
   var fooBar = bodyStyles.getPropertyValue(`--${color}`); //get
   return (
      <div>
         <div
            className="colortile"
            style={{
               backgroundColor: `${fooBar}`,
            }}
         ></div>
         <p className="text-xs text-gray5 semibold mt0">{color}</p>
      </div>
   );
};

export default function Introduction(props) {

    const colors={ 
        grays:["gray0","gray1","gray2","gray3","gray4","gray5","gray6","gray7","gray8","gray9"],
        reds:["red0","red1","red2","red3","red4","red5","red6","red7","red8","red9"],
        greens:["red0","red1","red2","red3","red4","red5","red6","red7","red8","red9"],
        blues:["blue0","blue1","blue2","blue3","blue4","blue5","blue6","blue7","blue8","blue9"],
        greens:["green0","green1","green2","green3","green4","green5","green6","green7","green8","green9"],
        yellows:["yellow0","yellow1","yellow2","yellow3","yellow4","yellow5","yellow6","yellow7","yellow8","yellow9"],
      

    }
    
    const colorKeys=Object.keys(colors)

   
    const two =colorKeys.map((x,index)=>(
       colors[x]
    )  )
    console.log(two);
      
    return (
       <>
          <div className="text-3xl semibold mt1 mb1">
             Getting Started with KatanaUI
          </div>
          <div className="text-gray5 text-md mb2 medium">
             Here's how you can quickly include KatanaUI Components in your
             Project
          </div>

          <div class="card--basic--horizontal flex-col">
             <button class="link_copy button-primary">Copy</button>
             <p class="text-gray5">cocoa-ui.netlify.app/src/index.css</p>
          </div>

          <button class="intro-button text-sm button-primary ">
             To Components
          </button>
          <a
              href="/dist/css/export.css"
              type="button"
              download="katana.css"
              className=""
            >Download</a>


          <p class="text-2xl semibold mt3 mb1"> Katana Colors</p>
          <p class="text-md text-gray5 medium mb2 ">
             Here are the available color, with the css variables to use them eg.var(--red5)
          </p>

          <div className="color-wrapper">
             {Object.keys(colors).map((x, index) => (
                <div className="color-wrapper">
                   {colors[x].map((y, index2) => (
                      <div>
                         <ColorTile color={y}></ColorTile>
                      </div>
                   ))}
                </div>
             ))}
          </div>
       </>
    );
}
