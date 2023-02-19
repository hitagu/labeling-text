import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const text = req.body.text || '';
  const texts = req.body.texts;
  if (text.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter valid text",
      }
    });
    return;
  }

  try {
    const prompt = generatePrompt(text, texts);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.6,
      n: 3,
    });
    const answer = completion.data.choices;
    res.status(200).json({ result: answer });  
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(text, texts) {
  var prompt =  `Find the three strings in the list that are closest in similarity to ` + text + `. If there are less than three strings in the list, the other ones should be empty strings. The list is as follows: `;
  for (const textVar in texts) {
    prompt += textVar + `\n`;
  }
  return prompt;
}
