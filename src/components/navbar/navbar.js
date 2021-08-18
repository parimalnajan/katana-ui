import React from 'react';
import Codedisplay from '../../site-elements/codeDisplay';


export default function Navbar(props) {
   const navbar = (
      <div className="navbar shadow2">
         <div className="text-2xl semibold brand text-gray6">
            <span>BRAND</span>
         </div>
         <div className="header-right flex-row">
            <ul className="flex-row list-nav-tabs">
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
            </ul>
         </div>
      </div>
   );

   const siteFooter=(
      <div className="site-footer flex-row ">
      <div>
         <a
            href="https://github.com/parimalnajan"
            target="_blank"
         >
            <i class="fab fa-github-square"> </i>
         </a>
      </div>
      <div>
      <a
            href="https://www.linkedin.com/in/parimal-n-521008169/"
            target="_blank"
         >
         <i class="fab fa-linkedin"></i>
         </a>
      </div>
      <div>
      <a
            href="https://twitter.com/parimal_najan"
            target="_blank"
         >
         <i class="fab fa-twitter-square"></i>
         </a>
      </div>
      <div title="Portfolio">
      <a
            href="https://parimal-dev.netlify.app/"
            target="_blank"
         >
         <i class="fas fa-folder"></i>
         </a>
      </div>
   </div>
   )
   return (
      <>
         {" "}
         <p className="text-3xl bold">Navbars</p>
         <p className="text light"></p>
         <br />
         <p className="text-xl semibold">Navbar with searchbox and link</p>
         <Codedisplay component={navbar} />
         <p className="text-xl semibold">Footer with icons</p>
         <Codedisplay component={siteFooter} />
      </>
   );
}
