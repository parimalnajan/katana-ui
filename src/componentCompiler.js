import Navbar from './components/navbar'
import Button from './components/button'
import Typography from './components/typography'

export const navArray=[
    {name:"Typography",component:<Typography/>},
    {name:"Navbar", component:<Navbar/>},
    {name:"Button",component:<Button/>}
]

//todo:maintain different arrays for nav sections - introduction, utils, colors etc
export {Navbar,Button}