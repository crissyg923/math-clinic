import OpenAI from "openai";
import 'dotenv/config';
import express from 'express';


const apiKey = process.env.OPENAI_API_KEY;
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.post('/api/dividingfractions', async (req, res) => {
  try {
  const response = await fetch("https://api.openai.com/v1/completions", {
  method: "POST",
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      "model": "text-davinci-003",
      "prompt": "I am a highly intelligent question answering bot. If you ask me a  Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
      "temperature": 0,
      "max_tokens": 100,
      "top_p": 1,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0,
      "stop": ["\n"]
    })
  });

    if(!response.ok) {
        throw new Error(`HTTP  error! Status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  }
  catch(error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
