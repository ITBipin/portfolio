import { getDemoAgentResponse, getInterviewerQuestion, type AgentMode, type AgentResponse } from './demoAgent';

const MAX_MESSAGE_LENGTH = 1200;

type ChatRequest = {
  message: string;
  mode: AgentMode;
};

export async function getAgentResponse(message: string, mode: AgentMode): Promise<AgentResponse> {
  const request: ChatRequest = { message: message.slice(0, MAX_MESSAGE_LENGTH), mode };

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) throw new Error(`AI API responded with ${response.status}`);
    return await response.json() as AgentResponse;
  } catch {
    return getDemoAgentResponse(request.message, mode);
  }
}

export async function getInterviewResponse(message: string): Promise<AgentResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message.slice(0, MAX_MESSAGE_LENGTH), mode: 'interviewer' }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) throw new Error(`AI API responded with ${response.status}`);
    return await response.json() as AgentResponse;
  } catch {
    return getInterviewerQuestion(message);
  }
}
