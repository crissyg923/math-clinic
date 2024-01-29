// netlify/functions/chat-completion.js

const { OpenAI } = require('openai');

exports.handler = async function (event, context) {
  console.log("Function received a request:", event)
  try {
    const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const { prompt } = JSON.parse(event.body);

    // Add your OpenAI logic here to generate a response based on the prompt
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant tutoring fourth graders in math.' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-3.5-turbo',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ response: completion.choices[0].message.content }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
