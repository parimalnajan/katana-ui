import React, { useRef,useEffect } from 'react';
import './typography.css';


import CodeDisplay from '../../site-elements/codeDisplay'

export default function Typography(props) {

   const textSizes = 
    <div>
       <p class="text-2xl" >Sample text with size 1.5 rem</p>
       <p class="text-xl">Sample text with size 1.25 rem</p>
       <p class="text-l">Sample text with size 1.12 rem</p>
       <p className="text">Sample text with size 1.00 rem</p>
       <p className="text-s">Sample text with size 0.87 rem</p>
       <p class="text-xs">Sample text with size 0.75 rem</p>
       <p className="text-xxs">Sample text with size 0.70 rem</p>
    </div>

   return (
      <>
         <p className="text-2xl">Typography</p>
         <p className="text">Classes for different text sizes are available</p>
       
         <CodeDisplay component={textSizes}/>
      
      </>
   );
}
