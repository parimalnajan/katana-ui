import React, { useRef,useEffect } from 'react';
import './typographyPage.css';


import CodeDisplay from '../../site-elements/codeDisplay'

export default function Typography(props) {

   const textSizes = 
    <div>
       <p className="text-3xl">Sample text with size 1.6 rem</p>
       <p className="text-2xl">Sample text with size 1.42 rem</p>
       <p className="text-xl">Sample text with size 1.25 rem</p>
       <p className="text-lg">Sample text with size 1.12 rem</p>
       <p className="text">Sample text with size 1.00 rem</p>
       <p className="text-sm">Sample text with size 0.87 rem</p>
       <p className="text-xs">Sample text with size 0.75 rem</p>
       <p className="text-2xs">Sample text with size 0.70 rem</p>  
       <p className="text-3xs">Sample text with size 0.62 rem</p>       
    </div>

    const textWeights=<div>
       <p className="extralight">This is a sample of extralight text</p>
       <p className="light">This is a sample of light text</p>
       <p className="normal">This is a sample of normal text</p>
       <p className="medium">This is a sample of medium text</p>
       <p className="semibold">This is a sample of semibold text</p>
       <p className="bold">This is a sample of bold text</p>
       <p className="extrabold">This is a sample of extrabold text</p>
    </div>

   return (
      <>
         <p className="text-3xl bold">Typography</p>
         <p className="text-l semibold">Classes for size variations</p>       
         <CodeDisplay component={textSizes}/>
         <p className="text-l semibold"> Classs for weight variations</p>
         <CodeDisplay component={textWeights}/>
      
      </>
   );
}
