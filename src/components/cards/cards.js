import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'

export default function Cards(props) {
  const text='Text only card. Lorem ipsum dolor sit amet consecteturadipisicing elit. Atque tempora modi qui, repellendusconsequuntur veniam corrupti quaerat recusandae, voluptatemnobis impedit? Modi maxime sapiente, delectus deleniti suscipitmollitia in placeat.';
    const basicCard = (
       <div className="card-wrapper flex-column">
          <div className="card--basic--vertical">
             <h3 className="text">Heading</h3>
             <span className="text-sm ">
             {text}
             </span>
          </div>

          <div className="card--basic--horizontal">
             <h3 className="text">Heading</h3>
             <span className="text-sm ">
               {text}{text}
             </span>
          </div>
       </div>
    );

    const shadowCard = (
       <div className="card--basic--vertical card__shadow">
          <h3 className="text">Heading</h3>
          <span className="text-sm ">
            {text}
          </span>
       </div>
    );

    const dismissCard = (
       <div className="flex-column m1">
          <div className="card--basic--vertical card__shadow">
             <button className="card__dismiss">
                <i class="fas fa-times"></i>
             </button>
             <h3 className="text">Heading</h3>
             <span className="text-sm ">
                {text}
             </span>
          </div>

          <div className="card--basic--vertical card__shadow">            
             <span class="text-2xs semibold badge--basic badge--primary card__label__topright">Featured
        </span>
             
             <h3 className="text">Heading</h3>
             <span className="text-sm ">
                {text}
             </span>
          </div>
         
       </div>
    );
    
    const product ={
        title: "Lenovo ThinkPad X1 Carbon (8th Gen)",
        category:"Gaming Laptops",
        ratingCount:"420",
        ratingScore:"4.5",
        price:"69,420",

    }
    const imageCard = (
       <div className="card--image flex-column">
          <div className="flex-row card--image__wishlist-btn">
             <i class="fas fa-heart"></i>
          </div>
          <img src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK-1024-80.jpg.webp"></img>

          <div className="card--image__body">
             <div className="prod_category text-xs light mb0">
                {product.category}
             </div>
             <div className="text semibold mb25">{product.title}</div>
             <div className="rating flex-row">
                <div className="text-2xs semibold badge--basic badge--success rating__badge">
                   <span>{product.ratingScore}</span>
                   <i class="fas text-3xs fa-star rating__star"></i>
                </div>
                <span className="text-2xs medium rating__count">
                   ({product.ratingCount})
                </span>
             </div>
             <div className="price mt0 flex-row">
                <i class="fas fa-rupee-sign mr25"></i>
                <span className="text-lg semibold">{product.price}</span>
             </div>
             <span className="text-xs light">
                <span class="text-3xs mt1 normal badge--basic badge--warning emi">
                   EMI available
                </span>
             </span>
             <button class="text-sm button-primary buy-button mt1">
                <i class="fas fa-shopping-cart mr25"></i> Add To Cart
             </button>
          </div>
       </div>
    );


    return (
        <>
        <p className="text-3xl medium">Cards</p>
         <p className="text light">
            The card component encapsulates relevant information pieces.
         </p>
         <br />
         <p className="text-xl medium">         
            Basic Cards
         </p>
         <p className="text light">
            Horizontal and vertical variants
         </p>
         <Codedisplay component={basicCard} />

         <p className="text-xl medium">         
            Cards with shadow
         </p>
         <p className="text">
            Utility classes for cards<br/>
            <span className="text-sm light">"card__shadow"
            </span> 
         </p>
         <Codedisplay component={shadowCard} />


         <p className="text-xl medium">         
            Cards with Dismiss icon and label
         </p>
         <p className="text medium "> 
           Utility classes for cards<br/>
        <span className="text-sm light">"card__dismiss" <br/> 
           "card__label__topright"<br/>
           "card__label__topleft"<br/>
         </span>
         </p>
         <Codedisplay component={dismissCard} />


         <p className="text-xl medium">         
            Cards with image and description
         </p>
         <Codedisplay component={imageCard} />


        </>
    )
}
