import React, { useRef, useState } from 'react'

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
 
export default function Colors(props) {
    const colors={ 
        theme:["theme1","theme2","theme3","theme4","theme5"],
       grays:["gray0","gray1","gray2","gray3","gray4","gray5","gray6","gray7","gray8","gray9"],
       reds:["red0","red1","red2","red3","red4","red5","red6","red7","red8","red9"],
       greens:["red0","red1","red2","red3","red4","red5","red6","red7","red8","red9"],
       blues:["blue0","blue1","blue2","blue3","blue4","blue5","blue6","blue7","blue8","blue9"],
       greens:["green0","green1","green2","green3","green4","green5","green6","green7","green8","green9"],
       yellows:["yellow0","yellow1","yellow2","yellow3","yellow4","yellow5","yellow6","yellow7","yellow8","yellow9"],
     
   }
    const colorKeys = Object.keys(colors);

    const two = colorKeys.map((x, index) => colors[x]);
    console.log(two);
    


    return (
        <div className="colors-page">
               <p class="text-2xl semibold mt3 mb1">  Colors</p>
          <p class="text-md text-gray5 medium mb2 ">
             These are the available colors, the colors can be used by applying its code as a css variable
             eg.var(--blue5)
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

        </div>
    )
}
