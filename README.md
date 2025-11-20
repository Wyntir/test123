# Mirai Cho - Portfolio

A modern, high-performance portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Optimized for 100/100 performance scores and deployed on Cloudflare Pages.

## 🚀 Features

- ⚡ Next.js 16 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS 4 for styling
- 🌓 Dark mode support
- 📱 Fully responsive design
- ♿ Accessibility optimized
- 🚀 Optimized for Cloudflare Pages
- 🎯 100/100 Performance Score ready

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Cloudflare Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

### Standard Build
```bash
npm run build
npm start
```

## 🚀 Deployment to Cloudflare Pages

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to **Pages** > **Create a project**
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/`
   - **Node version:** `20` or later
6. Click **Save and Deploy**

### Option 2: Direct Upload via Wrangler

1. Install Wrangler (Cloudflare CLI):
```bash
npm install -g wrangler
```

2. Build the project:
```bash
npm run build
```

3. Login to Cloudflare:
```bash
wrangler login
```

4. Deploy:
```bash
wrangler pages deploy out --project-name=mirai-cho-portfolio
```

## 📝 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://miraicho.com
```

### Customization

- **Content:** Edit `src/app/page.tsx` to update portfolio content
- **Styles:** Modify `src/app/globals.css` for global styles
- **Metadata:** Update `src/app/layout.tsx` for SEO settings
- **Projects:** Update the projects array in `page.tsx`

## 🎨 Customization Guide

### Update Personal Information

1. **Name & Bio:** Edit the hero section in `src/app/page.tsx`
2. **Skills:** Modify the skills array in the About section
3. **Projects:** Update the projects array with your actual projects
4. **Contact:** Update email and social media links

### Add New Sections

Create new sections by adding them to `page.tsx`:

```tsx
<section className="relative px-6 py-20 sm:py-32">
  {/* Your new section content */}
</section>
```

## 📊 Performance Optimization

This portfolio is optimized for maximum performance:

- ✅ Static site generation (SSG)
- ✅ Optimized images
- ✅ CSS optimized with Tailwind
- ✅ Minimal JavaScript bundle
- ✅ Semantic HTML
- ✅ Accessibility best practices
- ✅ Smooth scroll behavior
- ✅ Reduced motion support

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 💬 Contact

- **Email:** hello@miraicho.com
- **GitHub:** [Your GitHub]
- **LinkedIn:** [Your LinkedIn]
- **Twitter:** [Your Twitter]

---

Built with ❤️ using Next.js and Tailwind CSS
