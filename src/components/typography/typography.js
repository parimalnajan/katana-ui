import React, { useRef,useEffect } from 'react';
import CodeDisplay from '../../site-elements/codeDisplay'

export default function Typography(props) {

   const textSizes = 
    <div>
       <p className="text-3xl">Sample text with class text-3xl</p>
       <p className="text-2xl">Sample text with class text--2xl</p>
       <p className="text-xl">Sample text with class text-xl </p>
       <p className="text-lg">Sample text with class text-lg</p>
       <p className="text">Sample text with class text</p>
       <p className="text-sm">Sample text with class text-sm </p>
       <p className="text-xs">Sample text with class text-xs</p>
       <p className="text-2xs">Sample text with class text-2xs </p>  
       <p className="text-3xs">Sample text with class text-3xs </p>       
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
         <p className="text-xl semibold">Classes for size variations</p>       
         <CodeDisplay component={textSizes}/>
         <p className="text-xl semibold"> Classs for weight variations</p>
         <CodeDisplay component={textWeights}/>
      
      </>
   );
}
