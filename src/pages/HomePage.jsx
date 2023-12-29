import { Card, CardBody, Text, Heading } from '@chakra-ui/react'

export default function HomePage() {
    return (
        <div className="home">
        <Card className="card">
            <Heading>Fractions</Heading>
        <CardBody>
          <Text>Get help with fractions here!</Text>
        </CardBody>
      </Card> 
      
        <Card className="card">
            <Heading>Exponents</Heading>
        <CardBody>
          <Text>Get help with exponents here!</Text>
        </CardBody>
      </Card> 
        </div>

    )
}