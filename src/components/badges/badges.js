import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'

export default function Badges(props) {
    
    const badges=(
        <div className="badges-wrapper flex-row ">
           <div> <span  className="text-2xs semibold badge--basic badge--primary" >NEW</span></div>
           <div> <span className="text-2xs semibold badge--basic badge--success">SALE</span></div>
           <div> <span className="text-sm semibold badge--basic badge--danger">Out of stock</span></div>
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

    const avatarBadges = (
       <div className="badges-wrapper flex-row">
         
            <div className="avatar--img badge--avatar semibold size1">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
             <div className=" badge--status badge--primary badge--avatar__badge"></div>
          </div>  
                
         
          <div className="avatar--img badge--avatar semibold size2">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
             <div className=" badge--status badge--success badge--avatar__badge"></div>
          </div> 

          
          <div className="avatar--img badge--avatar semibold size3">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
             <div className=" badge--status badge--warning badge--avatar__badge"></div>
          </div> 


          
          <div className="avatar--img badge--avatar semibold size4">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
             <div className=" badge--status badge--danger badge--avatar__badge"></div>
          </div> 

          <div className="avatar--img badge--avatar semibold size5">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
             <div className=" badge--status badge--passive badge--avatar__badge"></div>
          </div> 

       </div>
    )

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

            <p className="text-xl semibold">         
            Avatars with badges
            <p className="text light">
                Used to dispaly ser activity status
                These Badges use 'em' units 
            </p>
         </p>
            <Codedisplay component={avatarBadges}/>
        </>
    )
}
