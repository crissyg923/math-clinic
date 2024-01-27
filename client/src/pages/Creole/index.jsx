import { Card, CardBody, Text, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function HomePageCreole() {
    return (
        <div className="home">
       

        <Link className="link" style={{ textDecoration: 'none' }} to="/creole/fraksyon">
        
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            
        <CardBody>
            <Heading>Fraksyon</Heading>
      
          <Text>Jwenn ed ak fraksyon isit la!</Text>
        </CardBody>
       
      </Card> 
  
      </Link>
      <Link className="link" style={{ textDecoration: 'none' }} to="/creole/ekspozan">
        <Card className="card" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <CardBody>
            <Heading>Ekspozan</Heading>
          <Text>Jwenn ed ak ekspozan isit la!</Text>
        </CardBody>
      </Card> 
      </Link>
        </div>

    )
}