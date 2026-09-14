import type { AIProvider, ProviderMessage } from './provider';

export class OpenAICompatibleProvider implements AIProvider {
  constructor(
    private readonly apiKey: string,
    private readonly endpoint = 'https://api.openai.com/v1/chat/completions',
    private readonly model = 'gpt-4o-mini',
  ) {}

  async complete(messages: ProviderMessage[]) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model: this.model, messages, temperature: 0.2, max_tokens: 700 }),
    });

    if (!response.ok) throw new Error('AI provider request failed');
    const payload = await response.json() as { choices?: { message?: { content?: string } }[] };
    const answer = payload.choices?.[0]?.message?.content;
    if (!answer) throw new Error('AI provider returned an empty response');
    return answer;
  }
}
