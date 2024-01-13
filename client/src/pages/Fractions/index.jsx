import { Card, CardBody, Text, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
   <div className='home'>
    <div className="cardholder">
    <Link style={{ textDecoration: 'none' }}>
        <Card className='card'>
        <CardBody>
            <Heading>Multiplying Fractions</Heading>
       
          <Text>Get help with multiplying fractions here!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link to="/english/fractions/divide" style={{ textDecoration: 'none' }}>
      <Card className='card'>
      <CardBody>
        <Heading>Dividing Fractions</Heading>
          <Text>Get help with dividing fractions here!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link style={{ textDecoration: 'none' }}>
      <Card className="card">
      <CardBody>
            <Heading>Adding Fractions</Heading>
          <Text>Get help with adding fractions here!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link style={{ textDecoration: 'none' }}>
      <Card className="card">
      <CardBody>
            <Heading>Subtracting Fractions</Heading>
       
          <Text>Get help with subtracting fractions here!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
    </div> 
    )
}