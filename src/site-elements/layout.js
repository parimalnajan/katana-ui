import React from 'react'
import Header from './header'
import './layout.css'

export default function Layout({children,navArray}) {
    
    return (
       <>
          <Header />
          {children}
          <div className="footer flex-row ">
             <div>
                <a
                   href="https://github.com/parimalnajan"
                   target="_blank"
                >
                   <i class="fab fa-github-square"> </i>
                </a>
             </div>
             <div>
             <a
                   href="https://www.linkedin.com/in/parimal-n-521008169/"
                   target="_blank"
                >
                <i class="fab fa-linkedin"></i>
                </a>
             </div>
             <div>
             <a
                   href="https://twitter.com/parimal_najan"
                   target="_blank"
                >
                <i class="fab fa-twitter-square"></i>
                </a>
             </div>
             <div title="Portfolio">
             <a
                   href="https://parimal-dev.netlify.app/"
                   target="_blank"
                >
                <i class="fas fa-folder"></i>
                </a>
             </div>
          </div>
       </>
    );
}

