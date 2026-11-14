# Harshit Chaplot — Portfolio

Personal portfolio website for **Harshit Chaplot**, CSE student at RTU Kota focused on AI automation and practical AI workflows.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket (or use the Vercel CLI).
2. Import the project in [Vercel](https://vercel.com/new):
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy — static assets in `public/` (including `public/Harshit-Chaplot-CV.pdf` and `public/assets/aistudio/*`) are served directly at `/`.

Or deploy directly with the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```
