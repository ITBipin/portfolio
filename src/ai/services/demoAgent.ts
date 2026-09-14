import { portfolioKnowledge } from '../knowledge';

export type AgentMode = 'general' | 'recruiter' | 'interviewer';

export type AgentResponse = {
  answer: string;
  sources: string[];
  suggestions: string[];
  mode: AgentMode;
  source?: { label: string; sectionId: string };
  navigation?: { label: string; sectionId: string };
  diagram?: string[];
};

const fallbackQuestions = [
  'Who is Bipin?',
  'Tell me about his .NET experience',
  'What projects has Bipin worked on?',
  'How strong is his Azure experience?',
  'What architecture patterns does he use?',
  'Why should I hire him?',
];

function findAnswer(text: string) {
  const q = text.toLowerCase();

  if (q.includes('who is bipin') || q.includes('bipin') && q.includes('who')) {
    return `Bipin Bihari is a Lead Full Stack .NET Developer with 9.6+ years of experience building enterprise systems, distributed platforms, and cloud-native applications. He specializes in .NET 8, ASP.NET Core, microservices, Azure, CQRS, system design, and architecture-led delivery.`;
  }

  if (q.includes('experience') || q.includes('years')) {
    return `Bipin has 9.6+ years of software engineering experience across enterprise applications, distributed systems, cloud architecture, and full-stack delivery.`;
  }

  if (q.includes('azure')) {
    return `Bipin has strong Azure experience and has worked with Azure across cloud deployment, architecture, and platform operations. His work includes Azure-focused solutions and cloud-native practices in the NeoSOFT project and other enterprise workloads.`;
  }

  if (q.includes('microservice') || q.includes('microservices')) {
    return `Yes. Bipin has direct microservices experience in the Musafir JETT Visa Platform at NeoSOFT, where he architected distributed cloud microservices for a platform handling 2M+ leads and 30M+ operations.`;
  }

  if (q.includes('cqrs')) {
    return `Bipin has implemented CQRS in the NeoSOFT platform to decouple legacy modules and support cleaner service boundaries. This is part of his broader work with distributed systems, event-driven patterns, and scalable architecture.`;
  }

  if (q.includes('project') || q.includes('projects')) {
    return `Bipin's most prominent project is the Musafir / JETT Visa Platform, where he served as Lead Full-Stack .NET Developer. The platform involved distributed microservices, Azure, RabbitMQ, MongoDB, Docker, and large-scale asynchronous processing.`;
  }

  if (q.includes('leadership') || q.includes('scrum')) {
    return `Bipin has leadership experience across engineering delivery and facilitation. At NeoSOFT, he led 8+ software engineers and facilitated Daily Scrum, Sprint Planning, and Sprint Retrospectives.`;
  }

  if (q.includes('why should i hire') || q.includes('hire bipin')) {
    return `Bipin brings 9.6+ years of enterprise engineering experience, strong architecture capability, cloud and microservices expertise, and leadership across engineering teams. He combines technical depth with practical delivery outcomes in high-scale systems.`;
  }

  if (q.includes('architecture')) {
    return `Bipin's architecture experience spans microservices, CQRS, Clean Architecture, distributed systems, event-driven design, and Azure-based platform delivery. He has also worked with performance tuning, scalability, and secure enterprise systems.`;
  }

  if (q.includes('react') || q.includes('angular')) {
    return `Bipin has frontend experience spanning Angular and React, and he has worked across full-stack applications, including modernized modules and enterprise product delivery.`;
  }

  if (q.includes('resume') || q.includes('certification') || q.includes('award')) {
    return `Bipin has certifications in Agile & Scrum Fundamentals, AZ-900: Microsoft Azure Fundamentals, and Dot Net Certified. He has also received awards including Shabash Card, Employee of the Month, Spotlight Award, and Star of the Month Award.`;
  }

  if (q.includes('neo') || q.includes('neoisoft')) {
    return `At NeoSOFT, Bipin serves as Lead Full-Stack .NET Developer & Scrum Facilitator. He led distributed microservices for the Musafir JETT Visa Platform, managed 8+ engineers, and improved asynchronous processing throughput by 25%.`;
  }

  if (q.includes('vaibhav') || q.includes('global')) {
    return `At Vaibhav Global Ltd, Bipin worked as a Senior Full-Stack .NET Developer / Architecture Lead on an enterprise e-commerce platform, improving API throughput by 40% and reducing response delays by 120ms.`;
  }

  if (q.includes('globallogic')) {
    return `At GlobalLogic, Bipin worked as a Full-Stack .NET Developer / Module Lead on academic management modules, applying Clean Architecture, Dapper, and xUnit while improving execution efficiency and reducing payload latency.`;
  }

  return `I don't have that information in Bipin's portfolio yet. I can answer questions about his experience, projects, architecture, Azure work, leadership, certifications, and technical strengths.`;
}

export async function getDemoAgentResponse(message: string, mode: AgentMode = 'general'): Promise<AgentResponse> {
  const question = message.toLowerCase();
  let answer = findAnswer(message);
  let source = { label: 'Portfolio Knowledge', sectionId: 'home' };
  let navigation: AgentResponse['navigation'];
  let diagram: string[] | undefined;

  if (question.includes('architecture') || question.includes('cqrs') || question.includes('microservice')) {
    source = { label: 'Architecture Experience', sectionId: 'architecture' };
    navigation = { label: 'Explore architecture experience', sectionId: 'architecture' };
  } else if (question.includes('project') || question.includes('musafir')) {
    source = { label: 'Selected Projects', sectionId: 'projects' };
    navigation = { label: 'Explore project details', sectionId: 'projects' };
  } else if (question.includes('experience') || question.includes('neo') || question.includes('vaibhav') || question.includes('global')) {
    source = { label: 'Career Experience', sectionId: 'experience' };
    navigation = { label: 'View career experience', sectionId: 'experience' };
  } else if (question.includes('resume') || question.includes('award') || question.includes('certification') || question.includes('achievement')) {
    source = { label: 'Recognition & Resume', sectionId: 'recognition' };
    navigation = { label: 'View recognition', sectionId: 'recognition' };
  }

  if (question.includes('cqrs') || question.includes('architecture')) {
    diagram = ['Command', 'Command Handler', 'Write Model', 'Database', 'Query Handler', 'Read Model'];
  }

  if (mode === 'recruiter') {
    answer = `${answer}\n\nRecruiter summary: Bipin combines 9.6+ years of enterprise .NET delivery with architecture leadership, cloud experience, measurable performance improvements, and team facilitation.`;
  }

  return {
    answer,
    sources: [source.label],
    suggestions: fallbackQuestions,
    mode,
    source,
    navigation,
    diagram,
  };
}

export async function getInterviewerQuestion(topic: string): Promise<AgentResponse> {
  const normalizedTopic = topic.toLowerCase();
  const selectedTopic = normalizedTopic.includes('azure') ? 'Azure and cloud architecture' : normalizedTopic.includes('cqrs') ? 'CQRS and distributed systems' : normalizedTopic.includes('performance') ? 'API and database performance' : '.NET 8 and ASP.NET Core';

  return {
    answer: `Technical Interviewer\n\nQuestion: Based on Bipin's experience with ${selectedTopic}, how would you design a reliable production solution and explain the trade-offs you would evaluate?\n\nAnswer one question at a time. I can provide portfolio-grounded feedback on your response next.`,
    sources: ['Interview Mode'],
    suggestions: ['Ask a .NET question', 'Ask an Azure question', 'Ask a CQRS question', 'Ask a performance question'],
    mode: 'interviewer',
    source: { label: 'Technical Experience', sectionId: 'experience' },
  };
}

export async function getInterviewerFeedback(answer: string): Promise<AgentResponse> {
  const hasArchitectureSignal = /trade-off|scalab|reliab|observab|failure|security|latency/i.test(answer);
  return {
    answer: `Technical Interviewer feedback\n\n${hasArchitectureSignal ? 'Good direction. Your answer considers important production concerns such as reliability, scalability, or trade-offs.' : 'A useful starting point. Strengthen the answer by discussing reliability, scalability, security, observability, and explicit trade-offs.'}\n\nThis is portfolio practice feedback, not an official assessment or certification.`,
    sources: ['Interview Mode'],
    suggestions: ['Ask another interview question', 'Ask an Azure question', 'Ask a CQRS question'],
    mode: 'interviewer',
    source: { label: 'Architecture Experience', sectionId: 'architecture' },
  };
}

export function getDemoSuggestions() {
  return fallbackQuestions;
}

export function getPortfolioSummary() {
  return {
    profile: portfolioKnowledge.profile,
    experienceCount: portfolioKnowledge.experience.length,
    projectCount: portfolioKnowledge.projects.length,
    certifications: portfolioKnowledge.achievements.certifications.length,
  };
}
