import React from 'react'
import './sidenav.css'
export default function Sidenav({navArray,changeComponent}) {
    

    return (
        <>
            <div className="sidenav">
                <a className="text-xl">INTRODUCTION</a>
            {navArray.map((x)=>(
                <a href="#" onClick={()=>changeComponent(x.component)}>{x.name}</a>
            ))}
            <a className="text-xl">UTILITIES</a>
            </div>
        </>
    )
}
