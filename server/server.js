const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001; // You can adjust the port as needed

const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

app.use(express.json());

app.post('/api/chat-completion', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: req.body.messages,
      model: 'gpt-3.5-turbo',
    });

    res.json(completion.choices[0]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
