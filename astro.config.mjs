import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site:
    process.env.SITE_URL ??
    (process.env.NODE_ENV === 'production'
      ? 'https://christianrodriguez.me'
      : 'http://localhost:4321'),
  integrations: [tailwind()]
});
