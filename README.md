# Bipin Bihari - Lead Full Stack .NET Developer

Personal developer portfolio for Bipin Bihari, a Lead Full Stack .NET Developer with 9.6+ years of experience building enterprise software, distributed systems, and cloud-native applications.

## Focus

.NET, ASP.NET Core, C#, Microservices, Azure, Angular, React, CQRS, System Design, Clean Architecture, Event-Driven Architecture, performance engineering, and technical leadership.

## Features

- Responsive portfolio
- Experience timeline
- Technical skills
- Selected projects
- Architecture visualizations
- AI Portfolio Assistant with grounded demo fallback
- Resume download
- Contact links

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## AI Architecture

The browser uses an API-first AI service. When `/api/chat` is available, requests are handled by a server-side provider abstraction. When no provider is configured, the portfolio remains functional with structured, portfolio-grounded demo responses. Provider credentials are never stored in the React client.

## Deployment

This website is deployed using GitHub Pages and GitHub Actions. Pushes to the `master` branch run the workflow in `.github/workflows/deploy.yml`, build the Vite application, and publish the `dist` artifact.

## Local development

```bash
npm install
npm run dev
```

Create a server-side environment from `.env.example` only when deploying the optional AI API. Never expose provider credentials through `VITE_*` variables.

## Links

- LinkedIn: https://www.linkedin.com/in/bipin-bihari-linkdin/
- GitHub: https://github.com/ITBipin/
