import Navbar from './components/navbar'
import Button from './components/button'
import Typography from './components/typography'
import Alerts from './components/alerts'

export const navArray=[
    {name:"Typography",component:<Typography/>},
    {name:"Navbar", component:<Navbar/>},
    {name:"Button",component:<Button/>},
    {name:"Alerts",component:<Alerts/>},
]

//todo:maintain different arrays for nav sections - introduction, utils, colors etc
export {Navbar}