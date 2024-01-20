import { Card, CardBody, Text, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function HomePageSpanish() {
    return (
        <div className="home">
       

        <Link className="link" style={{ textDecoration: 'none' }} to="/creole/fraksyon">
        
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            
        <CardBody>
            <Heading>Fracciones</Heading>
      
          <Text>¡Obtén ayuda con fracciones aquí!</Text>
        </CardBody>
       
      </Card> 
  
      </Link>
      
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
            <Heading>Exponentes</Heading>
          <Text>¡Obtén ayuda con exponentes aquí!</Text>
        </CardBody>
      </Card> 
        </div>

    )
}