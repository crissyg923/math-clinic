import { Card, CardBody, Text, Heading, Center, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function FractionPageSpanish() {
    return (
   <div className='home'>
               <Link to='/espanol'>
 <Center h='70px' color='white'>
   <Button colorScheme='pink'>Regresa</Button>
   </Center>
   </Link>
   
    <div className="cardholder">

    <Link to="/espanol/fracciones/multiplicarfracciones" style={{ textDecoration: 'none' }}>
        <Card className='card'>
        <CardBody>
            <Heading>Multiplicar Fracciones</Heading>
       
          <Text>¡Obtén ayuda para multiplicar fracciones aquí!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link to="/espanol/fracciones/dividirfracciones" style={{ textDecoration: 'none' }}>
      <Card className='card'>
      <CardBody>
        <Heading>Dividir Fracciones</Heading>
          <Text>¡Obtén ayuda para dividir fracciones aquí!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link to="/espanol/fracciones/reaguparfracciones" style={{ textDecoration: 'none' }}>
      <Card className="card">
      <CardBody>
            <Heading>Reagrupar fracciones</Heading>
          <Text>¡Obtén ayuda para reagrupar fracciones aquí!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      {/* <div className="cardholder">
      <Link style={{ textDecoration: 'none' }}>
      <Card className="card">
      <CardBody>
            <Heading>Restar Fracciones</Heading>
       
          <Text>¡Obtén ayuda para restar fracciones aquí!</Text>
        </CardBody>
      </Card> 
      </Link>
    
      </div> */}
      
    </div> 
    )
}