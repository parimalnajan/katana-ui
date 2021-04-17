import Sidenav from "./site-elements/sidenav";
import Layout from "./site-elements/layout";
import { useState } from "react";
import "./App.css";

import { navArray, Introduction } from "./componentCompiler";

function App() {   
   const [activeComponent, setActiveComponent] = useState(<Introduction />);

   const changeComponent = (componentFromSideNav) => {
      setActiveComponent(componentFromSideNav);
   };
   return (
      <Layout>
         <div className="App flex-row content-area">
            <Sidenav navArray={navArray} changeComponent={changeComponent} />
            <div className="main-content">{activeComponent}</div>
         </div>
      </Layout>
   // make sidenav a part of layout and flex-row it with it's children, i.e main content
   );
}

export default App;
