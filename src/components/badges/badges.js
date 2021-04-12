import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'

export default function Badges(props) {
    
    const badges=(
        <div className="badges-wrapper flex-row ">
           <div> <span  className="text-2xs semibold badge badge--primary" >NEW</span></div>
           <div> <span className="text-2xs semibold badge badge--success">SALE</span></div>
           <div> <span className="text-sm semibold badge badge--danger">Out of stock</span></div>
        </div>
    )

    const statusBadges = (
       <div className="badges-wrapper flex-row ">
          <div class="  semibold size1">
             <div className=" badge--status badge--primary"></div>
          </div>

          <div class="  semibold size2">
             <div className=" badge--status badge--success"></div>
          </div>

          <div class="semibold size3 ">
             <div className=" badge--status badge--warning"></div>
          </div>

          <div class="  semibold size4">
             <div className=" badge--status badge--danger"></div>
          </div>

          <div class="  semibold size5">
             <div className=" badge--status badge--passive"></div>
          </div>
       </div>
    );

    return (
        <>
                 <p className="text-3xl bold">Badges</p>
         <p className="text light">
           Bagdes are required for trainers to participate in regional leagues.
           Every badge is unique, it acts as a proof that the trainer has defeated
           the particular gym leader. 

         </p>
         <br />
         <p className="text-xl semibold">         
            Badges with contextual variations
         </p>
            <Codedisplay component={badges}/>
            <p className="text-xl semibold">         
            Badges for activity status
            <p className="text light">
                These Badges use 'em' units so theyre responsive
                 to the font size of 
                the parent container.
            </p>
         </p>
            <Codedisplay component={statusBadges}/>
        </>
    )
}
