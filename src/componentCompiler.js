import Navbar from './components/navbar'
import Button from './components/button'
import Typography from './components/typography'

export const navArray=[
    {name:"Typography",component:<Typography/>},
    {name:"Navbar", component:<Navbar/>},
    {name:"Button",component:<Button/>}
]

//to get nav sections of introduction, utils, colors etc, maintain different arrays
export {Navbar,Button}