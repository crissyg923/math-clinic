import { ReactSVG } from "react-svg";
import exponents from '../../../images/creole-exponents.svg';
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Multiply () {
const [results, setResults] = useState('');


const fetchChatCompletion = async () => {
  
  try {
    const userPrompt = 'Explain exponents in the language of haitian creole.';
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
    <Container className="container"maxW='2xl'>
    <div className="col">
    <Link to='/creole'>
 <Center h='70px' color='white'>
   <Button colorScheme='pink'>Tounen</Button>
   </Center>
   </Link>
  <div className="displaybox">
      <ReactSVG src={exponents} className="svg-container" />
   <Center h='100px' color='white'>
   <Button colorScheme='pink' onClick={() => fetchChatCompletion()}>
    Klike la a pou jwenn plis èd nan men ChatGPT! Sa a ka pran kèk moman.
   </Button>
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
