import { ReactSVG } from "react-svg";
import divfrac from '../../../../images/dividing-fract.svg'
import { Button, ButtonGroup, Container, Center } from '@chakra-ui/react'
import { useState } from 'react';



export default function Divide() {
const [results, setResults] = useState('');


const fetchChatCompletion = async () => {
  
  try {
    const userPrompt = 'Explain how to divide a fraction in spanish.';
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
    // Handle the response data as needed
  } catch (error) {
    console.error('Error:', error);
    // Handle errors
  }
}



    return (
    // <div className="container" >
    //   <div className="col">
    // <div className="displaybox" style={{border: '3px solid green'}}>

    //   <ReactSVG src={divfrac} className="svg-container" />
    //   </div>
    //  {/* <button onClick={() => fetchChatCompletion}></button>  */}
    //  <Button colorScheme='blue' onClick={() => fetchChatCompletion()}>Button</Button>
    //  {results && (
    //     <div>
    //       <p className="resultsbox">{results}</p>
    //     </div>
    //  )}
    //  </div>
    // </div>
    <div className="container">
    <Container maxW='2xl'>
    <div className="col">
  <div className="displaybox" style={{border: '3px solid green'}}>

    <ReactSVG src={divfrac} className="svg-container" />
    </div>
   {/* <button onClick={() => fetchChatCompletion}></button>  */}
   <Center h='100px' color='white'>
   <Button colorScheme='blue' onClick={() => fetchChatCompletion()}>Button</Button>
   </Center>
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
