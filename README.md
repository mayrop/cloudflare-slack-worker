# cloudflare-slack-worker

A simple Cloudflare Worker "Hello World" example.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Cloudflare account](https://dash.cloudflare.com/sign-up)

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the worker locally:

```bash
npm run dev
```

This will start a local development server. You can access your worker at `http://localhost:8787`.

### Deployment

Deploy the worker to Cloudflare:

```bash
npm run deploy
```

Note: You'll need to authenticate with Cloudflare on first deployment using `npx wrangler login`.

## Project Structure

```
.
├── src/
│   └── index.js       # Worker entry point
├── wrangler.toml      # Cloudflare Worker configuration
├── package.json       # Node.js dependencies
└── README.md          # This file
```

## Learn More

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)