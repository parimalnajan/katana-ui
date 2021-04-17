import Navbar from './components/navbar'
import Button from './components/button'
import Typography from './components/typography'
import Alerts from './components/alerts'
import Avatars from './components/avatars'
import Badges from './components/badges'
import Cards from './components/cards'

export const navArray=[
    {name:"Typography",component:<Typography/>},
    {name:"Navbar", component:<Navbar/>},
    {name:"Button",component:<Button/>},
    {name:"Alerts",component:<Alerts/>},
    {name:"Avatars",component:<Avatars/>},
    {name:"Badges",component:<Badges/>},
    {name:"Cards",component:<Cards/>}
]

//todo:maintain different arrays for nav sections - introduction, utils, colors etc
export {Navbar}