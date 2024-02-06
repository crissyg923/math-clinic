import { ReactSVG } from "react-svg";
import regroup from '../../../../images/regroup-creole.svg'
import { Button, ButtonGroup, Container, Center, Flex } from '@chakra-ui/react'




export default function Regroup () {
// const [results, setResults] = useState('');


// const fetchChatCompletion = async () => {
  
//   try {
//     const userPrompt = 'Explain how to multiply fractions in haitian creole.';
//     const response = await fetch('/.netlify/functions/chat-completion', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ prompt: userPrompt }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const data = await response.json();
//     setResults(data.response);
//     console.log('Server response:', data.response);

//   } catch (error) {
//     console.error('Error:', error);

//   }
// }



    return (
    <Container className="container"maxW='2xl'>
    <div className="col">
  <div className="displaybox">
      <ReactSVG src={regroup} className="svg-container" />
  
   {/* <Center h='100px' color='white'> 
   <Button  colorScheme='blue' onClick={() => fetchChatCompletion()}>Klike la a pou jwenn plis èd nan men ChatGPT! Sa a ka pran kèk moman.</Button>
   </Center> */}
   </div>
   {/* {results && (
      <div>
        <p className="resultsbox">{results}</p>
      </div>
   )} */}
   
   </div>
  </Container>
    )
}
