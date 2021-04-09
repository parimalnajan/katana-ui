import React from 'react'
import Header from './header'

export default function Layout({children,navArray}) {
    
    return (<>
        <Header/>
       {children}       
        <div className="footer">f o o t e r</div>
        </>
    )
}

