import { Card, CardBody, Text, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function HomePageCreole() {
    return (
   <div className='home'>
    <div className="cardholder">
    <Link to="/creole/fraksyon/miltipliyefraksyon" style={{ textDecoration: 'none' }}>
        <Card className='card'>
        <CardBody>
            <Heading>Miltipliye Fraksyon</Heading>
       
          <Text>Jwenn ed ak miltipliye fraksyon isit la!!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link to="/creole/fraksyon/divizefraksyon" style={{ textDecoration: 'none' }}>
      <Card className='card'>
      <CardBody>
        <Heading>Divize Fraksyon</Heading>
          <Text>Jwenn ed pou divize fraksyon isit la!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      <div className="cardholder">
      <Link to="/creole/fraksyon/regroupementfraksyon" style={{ textDecoration: 'none' }}>
      <Card className="card">
      <CardBody>
            <Heading>Regroupement Fraksyon</Heading>
          <Text>Jwenn ed pou rregroupement rraksyon isit la!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div>
      {/* <div className="cardholder">
      <Link style={{ textDecoration: 'none' }}>
      <Card className="card">
      <CardBody>
            <Heading>Soustraksyon Fraksyon</Heading>
       
          <Text>Jwenn ed ak soustraksyon fraksyon isit la!</Text>
        </CardBody>
      </Card> 
      </Link>
      </div> */}
    </div> 
    )
}