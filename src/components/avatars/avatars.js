import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'
import './avatars.css'

export default function Avatars(props) {
    
    const avatars=(
        <div className="avatars-wrapper flex-row">
            <div className="avatar  semibold size1">
                <span>XY</span>
            </div>
            <div className="avatar semibold size2">
                <span>XY</span>
            </div>
            <div className="avatar semibold size3">
                <span>XY</span>
            </div>
            <div className="avatar semibold size4">
                <span>XY</span>
            </div>
            <div className="avatar  semibold size5">
                <span>XY</span>
            </div>
      
            
          
         

        </div>
    )
    
    const imageAvatars = (
       <div className="avatars-wrapper flex-row">
          <div className="avatar--img semibold size1">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
          </div>

          <div className="avatar--img semibold size2">
             <img className="avatar--img"
                src="https://static.wikia.nocookie.net/kiminonawa/images/
               a/a8/Taki_Tachibana_2016.png"
             ></img>
          </div>

          <div className="avatar--img semibold size3">
             <img className="avatar--img"
               src="https://static.wikia.nocookie.net/kiminonawa/images/c/c6/Taki_Tachibana_2022.png"
             ></img>
          </div>
          <div className="avatar--img semibold size4">
             <img className="avatar--img"
               src="https://static.wikia.nocookie.net/kiminonawa/images/c/c6/Taki_Tachibana_2022.png"
             ></img>
          </div>

          <div className="avatar--img semibold size5">
             <img className="avatar--img"
               src="https://static.wikia.nocookie.net/kiminonawa/images/c/c6/Taki_Tachibana_2022.png"
             ></img>
          </div>
       </div>
    );
    return (
       <>
          <p className="text-3xl bold">Avatars</p>
          <p className="text light">
             Avatars are the masters who can bend all 4 elements whose duty is
             to maintain harmony among the four nations and act as a mediator
             between humans and spirits.
          </p>
          <br />
          <p className="text-xl semibold">Avatars with various sizes</p>
          <Codedisplay component={avatars} />

          <p className="text-xl semibold">Avatars with Image tags</p>
          <Codedisplay component={imageAvatars} />
       </>
    );
}
