import React from 'react'
import Codedisplay from '../../site-elements/codeDisplay'

export default function Lists(props) {
    const plainList=(
        <div>
        <ul className="list--plain">
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
        </ul>
        <br/>
        <br/>
        <ul className="list--plain--horizontal">
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
        </ul>
        </div>
    )

    const stackedList=(
        <ul className="list--stacked">
            <li>first notification</li>
            <li>second notification</li>
            <li>third notification</li>
            <li>fourth notification</li>
            <li>fifth notification</li>
            <li>sixth notification</li>
        </ul>
    )

    const numberedList=(
        <ul className="list--numbered">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
            <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
            <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
            <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
        </ul>
    )

    return (
        <>
           <p className="text-3xl medium">Lists</p>
         <p className="text light">
           
         </p>
         <br />
         <p className="text-xl semibold">         
            Basic List
         </p>
         <p className="text light">
            Horizontal and vertical variants
         </p>
         <Codedisplay component={plainList} />  

         <p className="text-xl semibold">   
            Stacked List
         </p>
         <Codedisplay component={stackedList} />  

         <p className="text-xl semibold">   
            Numbered List
         </p>
         <Codedisplay component={numberedList} />  
        </>
    )
}
