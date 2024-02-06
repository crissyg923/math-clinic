import { ReactSVG } from "react-svg";
import regroup from '../../../../images/regroup-spanish.svg'
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';



export default function Regroup() {
       return (

    <div className="container">
    <Container maxW='2xl'>
    <div className="col">
    <Link to='/espanol/fracciones'>
 <Center h='70px' color='white'>
   <Button colorScheme='pink'>Regresa</Button>
   </Center>
   </Link>
  <div className="displaybox" style={{border: '3px solid green'}}>

    <ReactSVG src={regroup} className="svg-container" />
    </div>
   {/* <Center h='100px' color='white'>
   <Button colorScheme='pink' onClick={() => fetchChatCompletion()}>¡Haga clic aquí para obtener más ayuda de ChatGPT! Esto puede tardar unos momentos.</Button>
   </Center>
   {results && (
      <div>
        <p className="resultsbox">{results}</p>
      </div> */}
   {/* )} */}
   
   </div>
  </Container>
  </div>
    )
}
