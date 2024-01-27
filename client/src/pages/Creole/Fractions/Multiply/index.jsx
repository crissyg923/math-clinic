import { ReactSVG } from "react-svg";
import multifrac from '../../../../images/creole-multiply.svg'
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'
import { useState } from 'react';



export default function Multiply () {
const [results, setResults] = useState('');


const fetchChatCompletion = async () => {
  
  try {
    const userPrompt = 'Explain how to multiply fractions in haitian creole.';
    const response = await fetch('http://localhost:3001/api/chat-completion', {
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
    <Container className="container"maxW='2xl'>
    <div className="col">
  <div className="displaybox">
      <ReactSVG src={multifrac} className="svg-container" />
  
   <Center h='100px' color='white'>
   <Button colorScheme='blue' onClick={() => fetchChatCompletion()}>Klike la a pou plis èd</Button>
   </Center>
   </div>
   {results && (
      <div>
        <p className="resultsbox">{results}</p>
      </div>
   )}
   
   </div>
  </Container>
    )
}
