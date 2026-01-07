/**
 * Welcome to Cloudflare Workers!
 * This is a simple Hello World worker.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World!', {
      headers: {
        'content-type': 'text/plain',
      },
    });
  },
};
