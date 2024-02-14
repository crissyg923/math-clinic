import { ReactSVG } from "react-svg";
import decimals from '../../../images/spanish-decimaldiv.svg'
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Multiply() {
const [results, setResults] = useState('');


const fetchChatCompletion = async () => {
  
  try {
    const userPrompt = 'Explain exponents in spanish.';
    const response = await fetch('/.netlify/functions/chat-completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: userPrompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    setResults(data.response);
    console.log('Server response:', data.response);
  } catch (error) {
    console.error('Error:', error);
  }
}



    return (

    <div className="container">
    <Container maxW='2xl'>
    <div className="col">
    <Link to='/espanol'>
 <Center h='70px' color='white'>
   <Button colorScheme='pink'>Regresa</Button>
   </Center>
   </Link>
  <div className="displaybox" style={{border: '3px solid green'}}>

    <ReactSVG src={decimals} className="svg-container" />
    </div>
   {/* <Center h='100px' color='white'>
   <Button colorScheme='blue' onClick={() => fetchChatCompletion()}>¡Haga clic aquí para obtener más ayuda de ChatGPT! Esto puede tardar unos momentos.</Button>
   </Center> */}
   {results && (
      <div>
        <p className="resultsbox">{results}</p>
      </div>
   )}
   
   </div>
  </Container>
  </div>
    )
}
