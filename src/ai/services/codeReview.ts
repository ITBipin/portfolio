export type CodeReview = {
  score: string;
  criticalIssues: string[];
  recommendations: string[];
  improvedCode: string;
  explanation: string;
};

const fallbackReview: CodeReview = {
  score: 'Evaluation pending',
  criticalIssues: ['This demonstration does not run a production compiler, security scanner, or test suite.'],
  recommendations: ['Review async boundaries and add CancellationToken where operations can be cancelled.', 'Keep business rules outside controllers.', 'Validate inputs before database operations and use parameterized queries.'],
  improvedCode: '// Paste a small C# snippet to receive a bounded demonstration review.',
  explanation: 'This is a portfolio demonstration of review workflow design. It is not a replacement for SonarQube, a compiler, or a production security assessment.',
};

export function reviewCSharpCode(code: string): CodeReview {
  const normalized = code.trim();
  if (!normalized) return fallbackReview;
  const issues: string[] = [];
  const recommendations = [...fallbackReview.recommendations];
  if (/\.Result|\.Wait\(/.test(normalized)) issues.push('Potential async blocking detected; prefer await to avoid thread starvation.');
  if (/catch\s*\{\s*\}/.test(normalized)) issues.push('Empty exception handling can hide production failures.');
  if (/string\s*\+|\$"/.test(normalized) && /sql|select|insert|update|delete/i.test(normalized)) issues.push('Possible SQL construction from strings; use parameterized queries.');
  if (/Controller|Http(Get|Post|Put|Delete)/.test(normalized) && /DbContext|SaveChanges|business/i.test(normalized)) recommendations.push('Move persistence and business orchestration behind an application/service boundary.');
  const score = Math.max(5.5, 9.2 - issues.length * 0.8 - (normalized.length > 900 ? 0.4 : 0)).toFixed(1);
  return {
    score: `${score}/10`,
    criticalIssues: issues.length ? issues : ['No obvious critical pattern was detected by this lightweight demonstration.'],
    recommendations,
    improvedCode: normalized.length > 700 ? `${normalized.slice(0, 700)}\n// Further refactoring recommended after tests and review.` : `${normalized}\n\n// Consider CancellationToken, validation, and explicit error handling.`,
    explanation: fallbackReview.explanation,
  };
}
