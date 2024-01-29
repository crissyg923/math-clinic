import OpenAI from "openai";
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';


const apiKey = process.env.OPENAI_API_KEY;
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/dist'), { type: 'module' }));


const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });
app.post('/api/chat-completion', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Add your OpenAI logic here to generate a response based on the prompt
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant tutoring fourth graders in math.' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-3.5-turbo'
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
