import React, {useState, useEffect} from 'react'


export default function Toast(props) {
    
    const [copyToast,setCopyToast] = useState({display: "none",fontSize:"16px"})
    
    useEffect(()=>{
        setCopyToast({copyToast:"block"})
        console.log(copyToast)
        setTimeout(() => {
            setCopyToast({display: "none"});
         }, 2000); 
         props.fontSize??setCopyToast({fontSize:props.sizePx})
    },[])

   

       return (
        <> 
         <div style={copyToast} class="alert--success mt25">
        <i aria-hidden="true" class="fas fa-check-circle">
        </i>
        <span>{props.children}
        </span>
             </div>
            
        </>
    )
}
