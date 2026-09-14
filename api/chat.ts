import { portfolioKnowledge } from '../src/ai/knowledge';
import { OpenAICompatibleProvider } from '../server/ai/openAiCompatibleProvider';

type Request = { method?: string; body?: { message?: unknown; mode?: unknown } };
type Response = { status: (code: number) => Response; json: (body: unknown) => void };

const systemPrompt = `You are Bipin AI, a professional portfolio assistant. Answer only with facts found in the supplied portfolio knowledge. If the answer is unavailable, say: "I don't have that information in Bipin's portfolio yet." Never invent employers, clients, metrics, salary, personal data, or responsibilities. Keep answers concise and professional. You are not an official assessment or certification service.

Portfolio knowledge:
${JSON.stringify(portfolioKnowledge)}`;

export default async function handler(request: Request, response: Response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' });

  const message = typeof request.body?.message === 'string' ? request.body.message.trim().slice(0, 1200) : '';
  const mode = request.body?.mode === 'recruiter' || request.body?.mode === 'interviewer' ? request.body.mode : 'general';
  if (!message) return response.status(400).json({ error: 'A message is required' });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return response.status(503).json({ error: 'AI provider is not configured' });

  try {
    const provider = new OpenAICompatibleProvider(apiKey, process.env.AI_ENDPOINT, process.env.AI_MODEL);
    const answer = await provider.complete([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `[Mode: ${mode}] ${message}` },
    ]);
    return response.status(200).json({ answer, sources: ['Portfolio Knowledge'], suggestions: [], mode });
  } catch {
    return response.status(502).json({ error: 'AI provider unavailable' });
  }
}
