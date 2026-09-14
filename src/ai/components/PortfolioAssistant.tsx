import { useEffect, useRef, useState } from 'react';
import { Bot, ChevronRight, CircleHelp, Eraser, LoaderCircle, MessageSquareText, Minimize2, Send, Sparkles, UserRound, X } from 'lucide-react';
import { getDemoSuggestions, getInterviewerFeedback, type AgentMode, type AgentResponse } from '../services/demoAgent';
import { getAgentResponse, getInterviewResponse } from '../services/agent';

type Message = { id: string; role: 'assistant' | 'user'; text: string; response?: AgentResponse };

const modeOptions: { value: AgentMode; label: string }[] = [
  { value: 'general', label: 'General' },
  { value: 'recruiter', label: 'Recruiter' },
  { value: 'interviewer', label: 'Technical Interviewer' },
];

const welcomeMessage = 'Hello! I can answer questions about Bipin\'s experience, technical strengths, architecture mindset, project history, and hiring fit.';

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function PortfolioAssistant({ embedded = false }: { embedded?: boolean }) {
  const [open, setOpen] = useState(embedded);
  const [mode, setMode] = useState<AgentMode>('general');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 'welcome', role: 'assistant', text: welcomeMessage }]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const suggestions = getDemoSuggestions();

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isLoading]);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);

  const clearChat = () => setMessages([{ id: `welcome-${Date.now()}`, role: 'assistant', text: welcomeMessage }]);

  const sendMessage = async (messageText?: string) => {
    const finalText = (messageText ?? input).trim();
    if (!finalText || isLoading) return;
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: 'user', text: finalText }]);
    setInput('');
    setIsLoading(true);
    try {
      const hasInterviewQuestion = messages.some((message) => message.role === 'assistant' && message.id !== 'welcome');
      const response = mode === 'interviewer'
        ? hasInterviewQuestion ? await getInterviewerFeedback(finalText) : await getInterviewResponse(finalText)
        : await getAgentResponse(finalText, mode);
      setMessages((current) => [...current, { id: `assistant-${Date.now()}`, role: 'assistant', text: response.answer, response }]);
    } catch (error) {
      setMessages((current) => [...current, { id: `error-${Date.now()}`, role: 'assistant', text: 'Sorry, I could not process that request right now. Please try again.' }]);
      console.error(error);
    } finally { setIsLoading(false); }
  };

  const chatPanel = (
    <div className={`${embedded ? 'h-full' : 'mb-4 w-[min(92vw,410px)]'} overflow-hidden rounded-[1.75rem] border border-slate-700 bg-slate-950/95 shadow-2xl shadow-sky-950/40 backdrop-blur-xl`}>
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-3">
        <div className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300"><Bot size={18} /></div><div><p className="text-sm font-semibold text-white">Bipin AI</p><p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Portfolio engineering assistant</p></div></div>
        <div className="flex items-center gap-2"><button type="button" aria-label="Clear chat" title="Clear chat" onClick={clearChat} className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white"><Eraser size={15} /></button>{!embedded && <button type="button" aria-label="Close AI assistant" title="Close AI assistant" onClick={() => setOpen(false)} className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white"><X size={15} /></button>}{embedded && <button type="button" aria-label="Minimize AI assistant" title="Minimize AI assistant" onClick={() => setOpen(false)} className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-slate-500 hover:text-white"><Minimize2 size={15} /></button>}</div>
      </div>
      <div className="border-b border-slate-800 bg-slate-900/60 px-3 py-2"><div className="flex flex-wrap gap-2">{modeOptions.map((option) => <button key={option.value} type="button" onClick={() => setMode(option.value)} className={`rounded-full px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition ${mode === option.value ? 'border border-sky-400/40 bg-sky-500/10 text-sky-200' : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500'}`}>{option.label}</button>)}</div></div>
      <div className={`${embedded ? 'h-[390px]' : 'max-h-[390px]'} space-y-3 overflow-y-auto p-4`}>
        {messages.map((message) => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === 'user' ? 'bg-sky-500 text-slate-950' : 'border border-slate-700 bg-slate-900 text-slate-200'}`}><div className="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] opacity-80">{message.role === 'user' ? <UserRound size={12} /> : <Sparkles size={12} />}{message.role === 'user' ? 'You' : 'Bipin AI'}</div><p className="whitespace-pre-line">{message.text}</p>{message.response?.diagram && <div className="mt-3 space-y-1.5 rounded-xl border border-sky-400/20 bg-slate-950/70 p-3 text-center text-[10px] uppercase tracking-[0.12em] text-sky-200">{message.response.diagram.map((block, index) => <div key={`${block}-${index}`}><div className="rounded-lg border border-sky-400/20 bg-sky-500/10 px-2 py-1.5">{block}</div>{index < message.response!.diagram!.length - 1 && <ChevronRight size={12} className="mx-auto my-0.5 rotate-90 text-slate-500" />}</div>)}</div>}{message.response?.source && <button type="button" onClick={() => scrollToSection(message.response!.source!.sectionId)} className="mt-3 inline-flex items-center gap-1 text-xs text-sky-300 hover:text-sky-200">Based on {message.response.source.label}<ChevronRight size={13} /></button>}{message.response?.navigation && <button type="button" onClick={() => scrollToSection(message.response!.navigation!.sectionId)} className="mt-2 block text-xs font-medium text-sky-300 hover:text-sky-200">{message.response.navigation.label}</button>}</div></div>)}
        {isLoading && <div className="flex justify-start"><div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200"><LoaderCircle size={15} className="animate-spin text-sky-300" /> Bipin AI is thinking...</div></div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t border-slate-800 bg-slate-900/50 p-3"><div className="mb-2 flex flex-wrap gap-2">{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => void sendMessage(suggestion)} className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[10px] text-slate-200 transition hover:border-sky-400/40 hover:text-white">{suggestion}</button>)}</div><div className="flex items-center gap-2"><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') void sendMessage(); }} placeholder="Ask me anything about Bipin..." className="w-full rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400" /><button type="button" onClick={() => void sendMessage()} disabled={isLoading || !input.trim()} aria-label="Send message" title="Send message" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"><Send size={16} /></button></div><p className="mt-2 flex items-center gap-1 text-[10px] text-slate-500"><CircleHelp size={11} /> Answers are grounded in Bipin&apos;s portfolio knowledge.</p></div>
    </div>
  );

  if (embedded) return <div className="h-full">{open ? chatPanel : <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"><MessageSquareText size={17} /> Open Bipin AI</button>}</div>;
  return <div className="fixed bottom-5 right-5 z-50">{open && chatPanel}<button type="button" onClick={() => setOpen((current) => !current)} className="flex items-center gap-3 rounded-full border border-sky-400/40 bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-300"><MessageSquareText size={18} /><span>Ask Bipin AI</span></button></div>;
}