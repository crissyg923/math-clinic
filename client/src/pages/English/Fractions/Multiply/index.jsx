import { ReactSVG } from "react-svg";
import multifrac from '../../../../images/multiplying-fractions.svg'
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Multiply() {
const [results, setResults] = useState('');


const fetchChatCompletion = async () => {
  
  try {
    const userPrompt = 'Explain how to multiply fractions.';
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
    <Link to='/english/fractions'>
 <Center h='70px' color='white'>
   <Button colorScheme='pink'>Back</Button>
   </Center>
   </Link>
  <div className="displaybox">

    <ReactSVG src={multifrac} className="svg-container" />
   
    <Center h='100px' color='white'>
   <Button colorScheme='pink' onClick={() => fetchChatCompletion()}>Click Here for More Help</Button>
   </Center>
   </div>
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
