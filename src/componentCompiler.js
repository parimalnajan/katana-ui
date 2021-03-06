import Navbar from './components/navbar'
import Button from './components/button'
import Typography from './components/typography'
import Alerts from './components/alerts'
import Avatars from './components/avatars'
import Badges from './components/badges'
import Cards from './components/cards'
import Inputs from './components/inputs'
import Lists from './components/lists'
import Introduction from './components/intro/introduction'
import Loaders from './components/loaders'
import Colors from './components/colors/colors'

export const navArray=[
    {name:"Introduction",component:<Introduction/>},
    {name:"Typography",component:<Typography/>},    
    {name:"Colors",component:<Colors/>},
    {name:"Buttons",component:<Button/>},
    {name:"Alerts",component:<Alerts/>},
    {name:"Avatars",component:<Avatars/>},
    {name:"Badges",component:<Badges/>},
    {name:"Cards",component:<Cards/>},
    {name:"Inputs",component:<Inputs/>},
    {name:"Lists",component:<Lists/>},
    {name:"Navbar", component:<Navbar/>},
    {name:"Loaders", component:<Loaders/>},
   
]

//todo:maintain different arrays for nav sections - introduction, utils, colors , components
export {Introduction}