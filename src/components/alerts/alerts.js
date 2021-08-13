import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'

export default function Alerts(props) {
    
    const alerts = (
       <div className="alerts__list">
          <div className="alert--danger text ">
             <i class=" fas fa-times-circle "></i>
            <span>Some Error occured</span>
          </div>

          <div className="alert--warning text">
          <i aria-hidden="true" class="fas fa-exclamation-triangle"></i>
          <span>This Action will delete data permanantly</span>
          </div>

          <div className="alert--info text">
          <i aria-hidden="true" class="fas fa-info-circle"></i>
          <span>A newer version of this app is available!</span>
          </div>
        

        
          <div className="alert--success text">
          <i aria-hidden="true" class="fas fa-check-circle"></i>
          <span>Order placed successfully</span>
          </div>

       </div>
    );

    return (
        <>
            <p className="text-3xl medium">Alerts</p>
         <p className="text light">
         Alerts are used to communicate contextual feedback messages
         that affects a system, feature or page.
         </p>
         <br />
         <p className="text-xl medium">         
            Contextal Alerts
         </p>
            <Codedisplay component={alerts}/>
        </>
    )
}
