import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'

export default function Inputs(props) {
    const searchInput=
        <div className="input--search-box ">
        <i class="fa fa-search text-gray5" aria-hidden="true"></i> 
        <input
           type="text"
           placeholder= "Search"
           className="text ml1"
        ></input>{" "}
     </div>

     const basicInput=(
         <div className="flex column">
         <div className="text-2xs medium mb25 ml25">User Name</div>
         <input 
         className="input--basic text-sm"
         type="text"
         placeholder= "Enter Username"
         >
         </input>
         </div>
     )

     const inputError=(
        <div className="flex column">
        <div className="text-2xs text-red5 medium mb25 ml25">Password</div>
        <input 
        className="input--basic input--error text-sm"
        type="text"
        placeholder= "Enter Password"
        >
        </input>
        </div>
     )
    

    return (
        <> <p className="text-3xl medium">Inputs</p>
       
        <p className="text-xl medium">SearchBox</p>
        <Codedisplay component={searchInput} />
        <p className="text-xl medium">Basic input box</p>
        <Codedisplay component={basicInput} /> 
        <p className="text-xl medium">Basic input box</p>
        <Codedisplay component={inputError} />       
        </>
    )
}
