import React from 'react';
import Codedisplay from '../../site-elements/codeDisplay';


export default function Navbar(props) {
   const navbar = (
      <div className="navbar shadow2">
         <div className="text-2xl semibold brand text-gray6">
            <span>BRAND</span>
         </div>
         <div className="header-right flex-row">
            <div className="search-box ">
               <input
                  type="text"
                  placeholder="Search"
                  className="text shadow"
               ></input>{" "}
            </div>
            <ul className="flex-row list-nav-tabs">
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
            </ul>
         </div>
      </div>
   );
   return <> <p className="text-3xl bold">Navbars</p>
   <p className="text light">
      
   </p>
   <br />
   <p className="text-xl semibold">         
      Navbar with searchbox and link
   </p>
   <Codedisplay component={navbar} />
   </>;
}
