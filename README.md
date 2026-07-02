# StreamWave - Premium Landing Page

StreamWave is a clean, premium, mobile-first landing page built for the StreamWave Android streaming application. It features a highly polished monochrome black-and-white theme, fast performance, search engine optimization (SEO), and smooth transitions powered by Framer Motion.

---

## 🚀 Deployment Instructions

StreamWave is fully compatible with modern static web hosts. Below are the zero-config instructions to deploy the landing page to production.

### 🔺 Deploying to Vercel

Vercel provides native Vite support, global CDN caching, and automatic edge SSL.

#### Method 1: Vercel CLI (Local Machine)
1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command from the project root:
   ```bash
   vercel
   ```
3. Set the following configuration settings when prompted:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (produces the static `/dist` directory)
   - **Output Directory**: `dist`
4. Deploy to production:
   ```bash
   vercel --prod
   ```

#### Method 2: Git Integration (Recommended)
1. Push this codebase to a private/public GitHub repository.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New** > **Project**.
3. Import your StreamWave repository.
4. Vercel will automatically detect **Vite** as the framework. Leave all settings at default and click **Deploy**.

---

### ◈ Deploying to Netlify

Netlify is a robust serverless host perfect for single-page applications.

#### Method 1: Git Integration
1. Push this codebase to your GitHub, GitLab, or Bitbucket account.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Choose your Git provider and select your repository.
5. In the Build settings, specify:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**.

#### Method 2: Netlify Drag & Drop
1. Build the production build locally:
   ```bash
   npm run build
   ```
2. Log in to Netlify and go to the **Sites** tab.
3. Drag and drop the compiled **`dist`** folder directly into the browser deployment area.

---

## 🛠️ Configuration & Customization

The landing page is engineered to make updating your application details as simple as editing a single configuration file.

### Updating the APK & Telegram Links

To change the APK download URL or the Telegram channel invite link, open **`src/config.ts`** and edit the variables:

```typescript
// src/config.ts
export const APK_URL = "https://example.com/streamwave.apk";
export const TELEGRAM_URL = "https://t.me/streamwave_official";
```

All CTA buttons throughout the header, hero, install guide, and footer automatically inherit these configurations.

---

## 📁 Folder Structure Reference

```text
/
├── public/                 # Static assets served at root
│   ├── robots.txt          # SEO search engine crawlers instructions
│   └── sitemap.xml         # SEO site page index maps
├── src/
│   ├── assets/             # Raw image and style assets
│   │   └── images/         # 9:16 vertical high-contrast screen mockup JPGs
│   ├── components/         # Modular React components
│   │   ├── AppPreview.tsx  # Device mockups with scroll snapping
│   │   ├── FAQ.tsx         # Interactive vertical accordions
│   │   ├── Features.tsx    # 6 Feature cards displaying key benefits
│   │   ├── Footer.tsx      # Minimalist, elegant footer links
│   │   ├── Header.tsx      # Desktop/mobile navigation with backdrop blur
│   │   ├── Hero.tsx        # High-impact display headings and CTAs
│   │   └── Logo.tsx        # Handcrafted "SW" SVG monogram
│   ├── config.ts           # Centralized environment URLs
│   ├── types.ts            # Global TypeScript data structures
│   ├── App.tsx             # Application wrapper layout
│   ├── index.css           # Global Tailwind v4 directive & Google Fonts
│   └── main.tsx            # DOM initialization element
├── index.html              # Custom SEO keywords & inline SVG favicon head config
├── package.json            # Vite scripts & node dependencies configuration
└── tsconfig.json           # Type resolution parameters
```

---

## 📈 Search Engine Optimization (SEO) & Lighthouse

StreamWave contains custom metadata configurations to guarantee a Lighthouse performance & accessibility score above 95:
- **Responsive Viewport**: Set for all screen densities.
- **Sleek Favicon**: Self-contained inline SVG in `index.html` to avoid broken icon requests.
- **Structured XML Sitemap**: Indexed and exposed at the root for crawlers.
- **Robots Policies**: Clear crawling permissions mapping in `robots.txt`.
- **Open Graph Protocol**: Fully integrated tags to customize beautiful rich link previews in messaging systems (Telegram, WhatsApp, Twitter).
