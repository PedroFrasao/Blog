import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pela URL final do seu site no Cloudflare Pages (ou seu domínio próprio)
export default defineConfig({
  site: 'https://meu-blog.pages.dev',
  integrations: [sitemap()],
});
