import React from 'react'
import './sidenav.css'

export default function Sidenav({ navArray, changeComponent }) {
   return (
      <>
         <div className="sidenav">         
            {navArray.map((navElement) => (
               <a href="#" onClick={() => changeComponent(navElement.component)}>
                  {navElement.name}
               </a>
            ))}
         </div>
      </>
   );
}
