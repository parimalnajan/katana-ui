import React, { useState } from 'react'
import './sidenav.css'

export default function Sidenav({ navArray, changeComponent }) {
  const [sideNavClass,setSideNavClass]=useState("sidenav nav-visible")
  const [drawerOpen,setDrawerOpen]=useState(false);
   return (
      <>
         <div className="sidenav static-nav"
               >         
            {navArray.map((navElement) => (
               <a href="#" onClick={() => 
                  changeComponent(navElement.component)               
                  }>
                  {navElement.name}
               </a>
            ))}           
         </div>
         {drawerOpen?
         <div className="sidenav drawer-nav" onClick={()=>setDrawerOpen(false)}>
             {navArray.map((navElement) => (
               <a href="#" onClick={() => 
                  changeComponent(navElement.component)               
                  }>
                  {navElement.name}
               </a>
            ))}
            </div>
            :<div></div>}
         <button onClick={()=>setDrawerOpen(!drawerOpen)}class="button--floating drawer-button text-2xl">
               <i class="fas fa-bars">
               </i>
            </button>
      </>
   );
}
