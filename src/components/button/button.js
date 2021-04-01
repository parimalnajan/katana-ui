import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactDOMServer from 'react-dom/server';



export default function Button(props) {
    const codeString = <button>
        <span>im a span</span>nesadsadsasadsadasdasdasdasdsadasdsadw</button>;
    const codeString2 = ReactDOMServer.renderToStaticMarkup(codeString)



    return (<>
        <p className="text-2xl"> Buttons  </p>
            <button>Accept</button>
            
    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {codeString2}
    </SyntaxHighlighter>
     
        </>
    )
}
