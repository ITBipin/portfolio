import { useState } from 'react';
import { CheckCircle2, Code2, Copy, ShieldAlert } from 'lucide-react';
import { reviewCSharpCode, type CodeReview } from '../services/codeReview';

const sampleCode = `public async Task<User> GetUser(int id)
{
  return await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
}`;

export default function CodeReviewDemo() {
  const [code, setCode] = useState('');
  const [review, setReview] = useState<CodeReview | null>(null);

  const runReview = () => setReview(reviewCSharpCode(code));

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
        <div className="mb-4 flex items-center gap-3"><Code2 className="text-sky-300" size={20} /><div><h3 className="font-semibold text-white">Paste a small C# snippet</h3><p className="text-xs text-slate-400">Demonstration only. Do not paste confidential code.</p></div></div>
        <textarea value={code} onChange={(event) => setCode(event.target.value)} placeholder={sampleCode} className="min-h-52 w-full resize-y rounded-2xl border border-slate-700 bg-slate-900 p-4 font-mono text-xs leading-6 text-slate-200 outline-none placeholder:text-slate-600 focus:border-sky-400" />
        <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={() => setCode(sampleCode)} className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-200 transition hover:border-slate-500">Use sample</button><button type="button" onClick={runReview} className="rounded-full bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300">Review code</button></div>
      </div>
      <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
        {!review ? <div className="flex h-full min-h-52 items-center justify-center text-center text-sm text-slate-400"><div><ShieldAlert className="mx-auto mb-3 text-slate-500" size={24} /><p>Review results will appear here.</p><p className="mt-1 text-xs">This is not a replacement for SonarQube or a security scanner.</p></div></div> : <div className="space-y-4"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Code quality</p><p className="mt-1 text-3xl font-semibold text-sky-300">{review.score}</p></div><CheckCircle2 className="text-emerald-300" size={25} /></div><div><p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Findings</p><ul className="space-y-2 text-sm text-slate-300">{review.criticalIssues.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />{item}</li>)}</ul></div><div><p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Recommendations</p><ul className="space-y-2 text-sm text-slate-300">{review.recommendations.slice(0, 4).map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />{item}</li>)}</ul></div><details className="rounded-2xl border border-slate-700 bg-slate-900 p-3"><summary className="cursor-pointer text-sm text-slate-200">View suggested improvement</summary><div className="mt-3 flex items-start gap-2"><pre className="min-w-0 flex-1 overflow-x-auto whitespace-pre-wrap text-xs leading-5 text-slate-300">{review.improvedCode}</pre><button type="button" aria-label="Copy suggested code" title="Copy suggested code" onClick={() => void navigator.clipboard?.writeText(review.improvedCode)} className="rounded-full border border-slate-700 p-2 text-slate-300 hover:text-white"><Copy size={14} /></button></div></details><p className="text-xs leading-5 text-slate-500">{review.explanation}</p></div>}
      </div>
    </div>
  );
}
