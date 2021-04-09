import Sidenav from "./site-elements/sidenav";
import Layout from "./site-elements/layout";
import { useState } from "react";
import "./App.css";

import { navArray, Navbar } from "./componentCompiler";

function App() {   
   const [activeComponent, setActiveComponent] = useState(<Navbar />);

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
   );
}

export default App;
