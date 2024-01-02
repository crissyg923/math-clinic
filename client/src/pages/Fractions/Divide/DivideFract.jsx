import { ReactSVG } from "react-svg";
import divfrac from '../../../images/dividing-fract.svg'
import { Image, Box } from '@chakra-ui/react'

import OpenAI from "openai";
import 'dotenv/config';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({ key: apiKey });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
main();

export default function Divide() {
    return (
    <div className="container" >
    <div className="displaybox" style={{border: '3px solid green'}}>

      <ReactSVG src={divfrac} className="svg-container" />
      </div>
      <p>{apiKey}</p>
    </div>
    )
}
