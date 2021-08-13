import React from 'react'
import Codedisplay from 'src/site-elements/codeDisplay'

export default function Loaders(props) {
    
const spinner = (
   <div className="spinner-container">
      <div className="spinner text-3xs">
         <div> </div>
         <div></div>
      </div>

      <div className="spinner text-lg">
         <div> </div>
         <div></div>
      </div>

      <div className="spinner text-3xl">
         <div> </div>
         <div></div>
      </div>
   </div>
);

const spinnerEmptyArea = (
   <div className="spinner-container">
      <div className="spinner empty text-3xs">
         <div></div>
         <div></div>
      </div>

      <div className="spinner empty text-lg">
         <div></div>
         <div></div>
      </div>

      <div className="spinner empty text-3xl">
         <div></div>
         <div></div>
      </div>
   </div>
);

    return (
        <>  
        <p className="text-3xl medium">Loaders</p>
        <p className="text light">
         Loaders can be used as placeholders while app data is populated
        <br/>
        Size of the loaders can be customized by adjusting the 'font-size' property of the 'spinner' class.

        </p>
        
        <br/>
        <p className="text-xl medium">Spinners with different sizes</p>
        <Codedisplay component={spinner}></Codedisplay>

        <p className="text-xl medium">Spinners with empty area</p>
        <p className="text light">
        The 'empty' class adds the empty area color</p>
        <Codedisplay component={spinnerEmptyArea}></Codedisplay>
        </>
    )
}
