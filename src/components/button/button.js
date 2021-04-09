import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactDOMServer from 'react-dom/server';
import Codedisplay from '../../site-elements/codeDisplay';



export default function Button(props) {
    const button = <button>
        <span>im a span</span></button>;
 



    return (<>
      <p className="text-3xl bold">Buttons</p>
         <p className="text-l semibold"> Buttons with various sizes</p>       
         <Codedisplay component={button}/>
        </>
    )
}
