import { OpenAIApi, Configuration } from 'openai';

const API_KEY = 'CHAT_API_KEY';

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMessage(prompt: string): Promise<string> {
  const modelId = 'gpt-3.5-turbo';

  const result = await openai.createChatCompletion({
    model: modelId,
    messages: [{ role: 'user', content: prompt }],
  });

  const responseText = result.data.choices.shift().message.content;
  return responseText;
}
