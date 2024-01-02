import { ReactSVG } from "react-svg";
import divfrac from '../../../images/dividing-fract.svg'
import { Image, Box } from '@chakra-ui/react'


export default function Divide() {
    return (
    <div className="container" >
    <div className="displaybox" style={{border: '3px solid green'}}>

      <ReactSVG src={divfrac} className="svg-container" />
      </div>
    </div>
    )
}