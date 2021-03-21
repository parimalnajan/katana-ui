import React from 'react';


export default function Navbar(props) {
    
    const navbar=(<div className="navbar">
    <div className="text-3xl semibold brand"><span>BRAND</span></div>
    <div className="header-right flex-row">
    <div className="search-box">
        <input 
        type="text" 
        placeholder="Search"
        className="text"></input> </div>
    <ul className="flex-row list-nav-tabs">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
    </div>
</div>
)
    return (<>
        {navbar}
        </>
    )
        
}
