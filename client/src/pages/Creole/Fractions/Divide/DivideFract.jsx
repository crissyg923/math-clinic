import { ReactSVG } from "react-svg";
import divfrac from '../../../../images/creole-divfract.svg'
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'
import { useState } from 'react';



export default function Divide() {
const [results, setResults] = useState('');


const fetchChatCompletion = async () => {
  
  try {
    const userPrompt = 'Explain how to divide a fraction in haitian creole.';
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
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
}



    return (
    // <div className="container">
    <Container className="container"maxW='2xl'>
    <div className="col">
  <div className="displaybox">
      <ReactSVG src={divfrac} className="svg-container" />
  
   <Center h='100px' color='white'>
   <Button colorScheme='blue' onClick={() => fetchChatCompletion()}>Klike la a pou jwenn plis èd nan men ChatGPT! Sa a ka pran kèk moman.</Button>
   </Center>
   </div>
   {results && (
      <div>
        <p className="resultsbox">{results}</p>
      </div>
   )}
   
   </div>
  </Container>
  // </div>
    )
}
