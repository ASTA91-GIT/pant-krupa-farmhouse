// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force-enable Nitro so self-hosted builds (Vercel, Render, Netlify, Node)
// produce a real SSR server. Without this, builds outside the Lovable sandbox
// emit only static client assets and every route 404s in production.
// Preset auto-detection still applies:
//   - Vercel sets NITRO_PRESET=vercel automatically
//   - Netlify sets NITRO_PRESET=netlify automatically
//   - Render / generic Node: set NITRO_PRESET=node-server in the environment
//     (render.yaml does this and runs `node dist/server/index.mjs`)
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: process.env.NITRO_PRESET || "node-server",
  },
});
