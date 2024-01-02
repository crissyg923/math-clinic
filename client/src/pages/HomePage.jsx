import { Card, CardBody, Text, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="home">
       

        <Link className="link" style={{ textDecoration: 'none' }} to="/fractions">
        
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            
        <CardBody>
            <Heading>Fractions</Heading>
      
          <Text>Get help with fractions here!</Text>
        </CardBody>
       
      </Card> 
  
      </Link>
      
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
            <Heading>Exponents</Heading>
          <Text>Get help with exponents here!</Text>
        </CardBody>
      </Card> 
        </div>

    )
}