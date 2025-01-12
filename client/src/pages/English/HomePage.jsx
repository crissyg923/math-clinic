import { Card, CardBody, Text, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function HomePageEng() {
    return (
        <div className="home">
        <Link className="link" style={{ textDecoration: 'none' }} to="/english/fractions">
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>   
        <CardBody>
            <Heading>Fractions</Heading>
          <Text>Get help with fractions here!</Text>
        </CardBody>       
      </Card> 
      </Link>
      
      <Link className="link" style={{ textDecoration: 'none' }} to="/english/exponents"> 
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
            <Heading>Exponents</Heading>
          <Text>Get help with exponents here!</Text>
        </CardBody>
      </Card> 
      </Link>

      <Link className="link" style={{ textDecoration: 'none' }} to="/english/decimals"> 
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
            <Heading>Decimals</Heading>
          <Text>Get help with decimals here!</Text>
        </CardBody>
      </Card> 
      </Link>
        </div>

    )
}