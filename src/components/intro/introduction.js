//you can override css by writing a new class and adding !important; 
//hence you can make your own color and size palettes coded inside your own
//css variables and quickly append a new class with the !important properties

import React from 'react'

export default function Introduction(props) {
    

    return (
        <>
        <div className="text-3xl semibold">Im an intro</div>
        <div className="text medium">
            im a paragraph
            something something amazing library 
        </div>
        <div className="text-xl"> Get started</div>
        <div class="card--basic--horizontal">
            copy this code to get started
            </div>


        </>
    )
}
