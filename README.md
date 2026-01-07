# cloudflare-slack-worker

A Cloudflare Worker for Slack integrations.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm
- A Cloudflare account (for deployment)

### Installation

```bash
npm install
```

### Development

Run the worker locally:

```bash
npm run dev
```

This will start a local development server at `http://localhost:8787/`.

### Available Endpoints

- `/message` - Returns a "Hello, World!" message
- `/random` - Returns a random UUID
- All other paths return a 404

### Deployment

To deploy the worker to Cloudflare:

```bash
npm run deploy
```

### Testing

Run tests:

```bash
npm test
```

### Configuration

Worker configuration is in `wrangler.jsonc`. See [Wrangler documentation](https://developers.cloudflare.com/workers/wrangler/configuration/) for more details.

## Learn More

- [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
- [Slack API documentation](https://api.slack.com/)