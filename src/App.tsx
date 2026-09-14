import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  Download,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  { value: '9.6+', label: 'Years Experience' },
  { value: '30M+', label: 'Platform Operations' },
  { value: '2M+', label: 'Active Leads / Records' },
  { value: '40%', label: 'API Throughput Improvement' },
  { value: '70%', label: 'Delivery Timeline Reduction' },
  { value: '35%', label: 'Database Query Efficiency Improvement' },
  { value: '25%', label: 'Asynchronous Processing Improvement' },
];

const expertise = [
  {
    title: 'Architecture & Design',
    items: ['System Design', 'Distributed Systems', 'Clean Architecture', 'Domain-Driven Design', 'Event-Driven Architecture', 'High Availability', 'Scalability', 'Design Patterns', 'Performance Tuning'],
  },
  {
    title: 'Backend',
    items: ['.NET 8', 'ASP.NET Core', 'C#', 'Web API', 'Microservices', 'Entity Framework Core', 'Dapper', 'CQRS', 'GraphQL', 'Redis', 'RabbitMQ'],
  },
  {
    title: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'Angular', 'RxJS', 'React', 'jQuery'],
  },
  {
    title: 'Databases',
    items: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'Advanced Indexing', 'Query Optimization'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'Azure Blob Storage', 'Azure Functions', 'Azure App Service', 'Azure Key Vault', 'Azure SQL', 'Azure DevOps', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'API Gateway'],
  },
  {
    title: 'Testing & Quality',
    items: ['xUnit', 'NUnit', 'Postman', 'SonarQube', 'SonarLint'],
  },
  {
    title: 'Security',
    items: ['JWT', 'OAuth', 'Token Authentication', 'OWASP Top 10', 'Threat Mitigation'],
  },
  {
    title: 'AI Development Tools',
    items: ['GitHub Copilot', 'Cursor', 'ChatGPT', 'Windsurf', 'Claude', 'Gemini'],
  },
];

const timeline = [
  {
    company: 'NeoSOFT',
    period: '01/2026 – Present',
    title: 'Lead Full-Stack .NET Developer & Scrum Facilitator',
    bullets: [
      'Architected distributed cloud microservices for the Musafir JETT Visa Platform.',
      'Worked with a platform handling 2M+ leads and 30M+ operations.',
      'Led 8+ software engineers.',
      'Facilitated Daily Scrum, Sprint Planning, and Sprint Retrospectives.',
      'Used .NET 8 and CQRS to decouple legacy modules.',
      'Worked with Azure.',
      'Optimized RabbitMQ asynchronous processing.',
      'Improved asynchronous processing throughput by 25%.',
      'Worked with Docker.',
      'Implemented SonarQube validation pipelines.',
      'Maintained zero-vulnerability quality gates according to the resume.',
    ],
  },
  {
    company: 'Vaibhav Global Ltd',
    period: '01/2024 – 12/2025',
    title: 'Senior Full-Stack .NET Developer / Architecture Lead',
    bullets: [
      'Application refactoring',
      'Query optimization',
      'Enterprise e-commerce platform',
      'Improved API throughput by 40%',
      'Reduced response delays by 120ms',
      'Task allocation and team coordination',
      'Sprint-based capacity planning',
      'Database optimization',
      'Advanced caching',
      'Reduced index fragmentation by 35%',
    ],
  },
  {
    company: 'GlobalLogic',
    period: '01/2021 – 12/2024',
    title: 'Full-Stack .NET Developer / Module Lead',
    bullets: [
      'Academic management modules',
      'Clean Architecture',
      'Multiple legacy environments',
      'xUnit',
      'Angular',
      'Dapper',
      'Improved execution efficiency',
      'Reduced payload round-trip latency by 20%',
      'Worked with Product Owners and stakeholders',
      'Sprint backlog management',
      'Requirement clarification',
      'Technical blocker resolution',
    ],
  },
  {
    company: 'Chetu India',
    period: '01/2019 – 12/2021',
    title: 'Full-Stack .NET Developer',
    bullets: [
      'Enterprise Healthcare IT systems',
      'Secure backend modules',
      'OWASP Top 10',
      'Azure DevOps',
      'Docker',
      'CI/CD',
      'Reduced deployment schedules by 70%',
    ],
  },
  {
    company: 'Unit One Solution',
    period: '01/2017 – 12/2019',
    title: 'Software Developer',
    bullets: [
      'Collage ERP application',
      'ASP.NET MVC',
      'Modular business logic',
      'Database communication optimization',
      'Reduced database communication latency by 25%',
    ],
  },
];

const projects = [
  {
    name: 'Musafir / JETT Visa Platform',
    role: 'Lead Full-Stack .NET Developer',
    scale: '2M+ leads • 30M+ platform operations',
    summary: 'Distributed microservices platform for high-volume visa processing, asynchronous workflows, and cloud-native delivery.',
    technologies: ['.NET 8', 'ASP.NET Core', 'C#', 'Microservices', 'CQRS', 'Azure', 'MongoDB', 'RabbitMQ', 'Docker', 'GitHub Actions', 'SonarQube'],
    highlights: ['Distributed microservices', 'Visa processing workflows', 'High-traffic operations', 'Asynchronous processing', 'Legacy module decoupling', 'Cloud architecture', 'CI/CD', 'Code quality', 'Security'],
    diagram: [
      ['Client', 'API Gateway', 'Microservices', 'Message Broker', 'Data Layer', 'Azure'],
    ],
  },
  {
    name: 'Enterprise E-Commerce Platform',
    role: 'Senior Full-Stack .NET Developer / Architecture Lead',
    scale: 'Enterprise scale',
    summary: 'Refactoring and optimization initiative focused on throughput, query performance, caching, and database efficiency.',
    technologies: ['.NET 8', 'ASP.NET Core', 'SQL Server', 'C#', 'Query Optimization', 'Caching', 'API Performance'],
    highlights: ['40% API throughput improvement', '120ms response-time improvement', '35% database/index optimization improvement', 'Application refactoring', 'Advanced caching'],
  },
  {
    name: 'Academic Management Platform',
    role: 'Full-Stack .NET Developer / Module Lead',
    scale: 'Legacy modernization',
    summary: 'Modernized academic modules using clean architecture patterns and performance-focused refactoring.',
    technologies: ['Clean Architecture', 'Angular', 'Dapper', 'xUnit', 'ASP.NET Core'],
    highlights: ['20% reduction in payload round-trip latency', '35% execution efficiency improvement', 'Clean Architecture', 'Legacy system modernization', 'Performance optimization'],
  },
  {
    name: 'Healthcare IT Systems',
    role: 'Full-Stack .NET Developer',
    scale: 'Secure enterprise backend systems',
    summary: 'Built and maintained secure backend modules for healthcare workflows with strong delivery and quality processes.',
    technologies: ['OWASP Top 10', 'Azure DevOps', 'Docker', 'CI/CD', 'Secure Backend'],
    highlights: ['Secure backend systems', 'OWASP Top 10', 'Azure DevOps', 'Docker', 'CI/CD'],
  },
];

const principles = [
  ['Scalability first', 'Design systems that handle growth without sacrificing response times or reliability.'],
  ['Clean and maintainable architecture', 'Favor clear boundaries, modularity, and domain-driven logic that teams can evolve safely.'],
  ['Performance-driven development', 'Measure bottlenecks early and optimize for throughput, latency, and resource efficiency.'],
  ['Secure-by-design systems', 'Embed security and compliance checks into the application lifecycle from the start.'],
  ['Automated quality gates', 'Use CI/CD, validation pipelines, and static analysis to improve confidence in every release.'],
  ['Observability and reliability', 'Instrument systems to surface operational issues before they reach production users.'],
  ['Continuous delivery', 'Shorten the path from idea to deployment while maintaining quality and accountability.'],
  ['Strong team collaboration', 'Align product, engineering, and delivery teams through clear communication and planning.'],
];

const certifications = [
  { title: 'Agile & Scrum Fundamentals', issuer: 'Udemy' },
  { title: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft' },
  { title: 'Dot Net Certified', issuer: 'Ducat, Noida' },
];

const recognition = [
  { title: 'Shabash Card', issuer: 'NeoSOFT', year: '2026' },
  { title: 'Employee of the Month', issuer: 'Vaibhav Global Ltd', year: '2025' },
  { title: 'Spotlight Award', issuer: 'GlobalLogic', year: '2021 & 2023' },
  { title: 'Star of the Month Award', issuer: 'GlobalLogic', year: '2023' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bipin-bihari-linkdin/', icon: Globe },
  { label: 'GitHub', href: 'https://github.com/ITBipin/', icon: Globe },
  { label: 'Email', href: 'mailto:bipinit93@gmail.com', icon: Mail },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-slate-100 uppercase">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/60 bg-sky-500/10 text-sky-300">BB</span>
            Bipin Bihari
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm text-sky-200 transition hover:border-sky-300 hover:bg-sky-500/20 md:inline-flex">
            Let's Build
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(15,118,110,0.12),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                BIPIN <span className="text-sky-300">BIHARI</span>
              </h1>
              <p className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
                Lead Full Stack .NET Developer
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                9.6+ years of experience building scalable enterprise applications, distributed systems, and cloud-native solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-sky-200">
                {['.NET 8', 'ASP.NET Core', 'C#', 'Microservices', 'Azure', 'Angular', 'React', 'CQRS', 'System Design'].map((tag) => (
                  <span key={tag} className="rounded-full border border-sky-400/30 bg-slate-900/70 px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                  View My Work <ArrowRight size={16} />
                </a>
                <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
                  <Download size={16} /> Download Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 transition hover:border-sky-400/70 hover:text-white">
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative z-10">
              <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/70 p-4 shadow-glow">
                <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950 p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      {['bg-red-400', 'bg-amber-400', 'bg-emerald-400'].map((color) => (
                        <span key={color} className={`h-3 w-3 rounded-full ${color}`} />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Architecture View</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/5 px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-sky-200">
                      Client Experience Layer
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
                      <div className="rounded-xl border border-slate-700 bg-slate-900 p-2">Web</div>
                      <div className="rounded-xl border border-slate-700 bg-slate-900 p-2">API</div>
                      <div className="rounded-xl border border-slate-700 bg-slate-900 p-2">Mobile</div>
                    </div>
                    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
                      <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">Core Services</div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-slate-200">
                        <div className="rounded-lg border border-sky-400/30 bg-sky-500/10 p-2">Lead</div>
                        <div className="rounded-lg border border-sky-400/30 bg-sky-500/10 p-2">Visa</div>
                        <div className="rounded-lg border border-sky-400/30 bg-sky-500/10 p-2">Booking</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center text-[10px] uppercase tracking-[0.18em] text-slate-300">
                      <div className="rounded-xl border border-violet-400/30 bg-violet-500/10 p-2">RabbitMQ</div>
                      <div className="rounded-xl border border-violet-400/30 bg-violet-500/10 p-2">Redis</div>
                      <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-2">MongoDB</div>
                      <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-2">SQL</div>
                    </div>
                    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-center text-[10px] uppercase tracking-[0.2em] text-slate-200">
                      Azure Cloud Runtime
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/60" id="engineering">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Engineering impact</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Measured outcomes across scaled platforms</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-700 bg-slate-950/80 p-6"
                >
                  <p className="text-3xl font-semibold text-sky-300">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Professional introduction</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Engineering systems that scale with business pressure.</h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-300">
              <p>
                I am a Lead Full-Stack .NET Developer with 9.6+ years of enterprise software engineering experience.
              </p>
              <p>
                I specialize in distributed systems, microservices, cloud architecture, .NET 8, ASP.NET Core, CQRS, DDD, Clean Architecture, event-driven systems, performance optimization, Azure, and full-stack development.
              </p>
              <p>
                I have worked on high-availability platforms handling millions of records and tens of millions of operations, delivering system stability, performance, and architecture clarity in fast-moving enterprise environments.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Technology landscape</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Core capabilities across architecture, product, and delivery.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {expertise.map((group) => (
                <div key={group.title} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                  <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Career journey</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A progression from engineering execution to system leadership.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-slate-700 md:left-1/2" />
            {timeline.map((item, index) => (
              <div key={item.company} className={`relative mb-8 md:mb-10 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto md:w-[calc(50%-2rem)]'}`}>
                <div className="ml-10 md:ml-0">
                  <div className="absolute left-2 top-4 h-4 w-4 rounded-full border-4 border-slate-900 bg-sky-400 md:left-1/2 md:-translate-x-1/2" />
                  <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 md:p-7">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-medium tracking-[0.22em] text-sky-200 uppercase">{item.company}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                      </div>
                      <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">{item.period}</span>
                    </div>
                    <ul className="space-y-2 text-sm leading-7 text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Engineering work built for scale, speed, and operational clarity.</h2>
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              {projects.map((project) => (
                <motion.article key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium tracking-[0.2em] text-sky-200 uppercase">{project.role}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                    </div>
                    <ArrowUpRight className="text-sky-300" size={18} />
                  </div>
                  <p className="mb-4 text-sm text-slate-300">{project.summary}</p>
                  <div className="mb-5 rounded-2xl border border-slate-700 bg-slate-900 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Scale</p>
                    <p className="mt-2 text-base font-medium text-slate-100">{project.scale}</p>
                  </div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-[11px] text-slate-200">{tech}</span>
                    ))}
                  </div>
                  <div className="mb-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Key engineering areas</p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.name === 'Musafir / JETT Visa Platform' && (
                    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                      <p className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-400">Conceptual architecture</p>
                      <div className="space-y-3 text-center text-[11px] uppercase tracking-[0.18em] text-slate-200">
                        <div className="rounded-xl border border-slate-700 bg-slate-950 px-2 py-2">Client</div>
                        <div className="rounded-xl border border-slate-700 bg-slate-950 px-2 py-2">API Gateway</div>
                        <div className="grid grid-cols-3 gap-2 text-[10px]">
                          <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 px-2 py-2">Lead</div>
                          <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 px-2 py-2">Visa</div>
                          <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 px-2 py-2">Booking</div>
                        </div>
                        <div className="rounded-xl border border-slate-700 bg-slate-950 px-2 py-2">Message Broker</div>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-2 py-2">MongoDB</div>
                          <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-2 py-2">Redis</div>
                        </div>
                        <div className="rounded-xl border border-slate-700 bg-slate-950 px-2 py-2">Azure</div>
                      </div>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Architecture thinking</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">System design patterns that support resilient enterprise delivery.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Microservices',
                blocks: ['Client', 'API Gateway', 'Service A', 'Service B', 'Service C', 'Databases / Messaging / Cache'],
              },
              {
                title: 'CQRS',
                blocks: ['Command', 'Command Handler', 'Write Model', 'Database', 'Query', 'Query Handler', 'Read Model', 'Database'],
              },
              {
                title: 'Event-Driven',
                blocks: ['Producer', 'Message Broker', 'Consumer A', 'Consumer B', 'Consumer C'],
              },
              {
                title: 'Clean Architecture',
                blocks: ['Presentation', 'Application', 'Domain', 'Infrastructure'],
              },
            ].map((diagram) => (
              <div key={diagram.title} className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-5">
                <h3 className="mb-4 text-lg font-semibold text-white">{diagram.title}</h3>
                <div className="space-y-2 text-center text-[10px] uppercase tracking-[0.16em] text-slate-200">
                  {diagram.blocks.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-700 bg-slate-900 px-2 py-2">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Engineering principles</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">How I approach building resilient technology platforms.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {principles.map(([title, description]) => (
                <div key={title} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                  <div className="mb-3 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 p-2 text-sky-200">
                    <Workflow size={18} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recognition" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Recognition</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Recent achievements and formal recognition.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="space-y-5">
              {certifications.map((cert) => (
                <div key={cert.title} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                  <div className="mb-3 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 p-2 text-sky-200">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{cert.issuer}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
              {recognition.map((item) => (
                <div key={`${item.title}-${item.year}`} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                  <div className="mb-3 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 p-2 text-sky-200">
                    <BriefcaseBusiness size={18} />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/80 p-8 sm:p-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Education</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Bachelor of Technology (B.Tech) in Computer Science</h2>
                </div>
                <div className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300">06/2010 – 05/2015</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/20 p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-medium tracking-[0.28em] text-sky-200 uppercase">Let's build something</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">Have a challenging system to build?</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">Let's talk about architecture, scalability, and engineering.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:bipinit93@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                <Mail size={16} /> Email Me
              </a>
              {socialLinks.filter((link) => link.label !== 'Email').map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800">
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
            <div className="mt-8 space-y-3 text-sm text-slate-300 sm:text-base">
              <p className="flex items-center gap-3"><Mail size={16} className="text-sky-300" /> <a href="mailto:bipinit93@gmail.com">bipinit93@gmail.com</a></p>
              <p className="flex items-center gap-3"><Globe size={16} className="text-sky-300" /> <a href="https://www.linkedin.com/in/bipin-bihari-linkdin/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/bipin-bihari-linkdin/</a></p>
              <p className="flex items-center gap-3"><Globe size={16} className="text-sky-300" /> <a href="https://github.com/ITBipin/" target="_blank" rel="noreferrer">https://github.com/ITBipin/</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Bipin Bihari. Built for scalable engineering leadership.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-200">Home</a>
            <a href="#projects" className="hover:text-slate-200">Projects</a>
            <a href="#contact" className="hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
