# Clydie Cronjé — Author Website

A Next.js 16 author website showcasing 30 books across 6 series and 5 standalone titles.

**Palette:** Navy `#2F4156` · Teal `#567C8D` · Beige `#F5EFEB` · Sky Blue `#C8D9E6` · White `#FFFFFF`

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Split hero, series grid, quote teaser, newsletter |
| `/books` | Books | Full 30-book catalogue organised by series |
| `/about` | About | Author bio, life details, themes, photo gallery |
| `/contact` | Contact | Contact form + social media links |
| `/series/[slug]` | Series | Dynamic page for each series (reading order, characters) |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** DM Sans + Playfair Display (Google Fonts)
- **Hosting:** Vercel + Cloudflare DNS

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Connect the repo in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Point your Cloudflare domain to Vercel:
   - In Cloudflare DNS, add a CNAME record pointing to `cname.vercel-dns.com`
   - In Vercel project settings → Domains, add your domain (e.g. `clydiecronje.com`)

## Editing Content

All book and series data lives in one file:

```
src/data/books.js
```

Edit titles, descriptions, series info, and standalone books there — changes propagate to every page automatically.

### Adding a book cover image

Replace the placeholder `BookCover` component covers with real images:

1. Add cover images to `public/covers/` (e.g. `hollow-library-1.jpg`)
2. Update `src/components/BookCover.jsx` to use `<Image>` from `next/image`

### Adding author photos

1. Add photos to `public/photos/`
2. Update the About page placeholders in `src/app/about/page.jsx`

## Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout (nav + footer)
│   ├── page.jsx             # Homepage
│   ├── globals.css           # Tailwind + palette
│   ├── books/page.jsx        # Books catalogue
│   ├── about/page.jsx        # About page
│   ├── contact/page.jsx      # Contact page
│   └── series/[slug]/page.jsx  # Dynamic series pages
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Newsletter.jsx
│   └── BookCover.jsx
└── data/
    └── books.js             # ← All content lives here
```

## Connecting Newsletter (Mailchimp / MailerLite)

The Newsletter component currently stores state locally. To connect it:

1. Create a free Mailchimp or MailerLite account
2. Create an API route at `src/app/api/subscribe/route.js`
3. Forward the email to your newsletter provider's API
4. Update `Newsletter.jsx` to POST to `/api/subscribe`

## Licence

© 2026 Clydie Cronjé. All rights reserved.

## Platform Integrations

The site supports four sales/distribution platforms. All buy links are configured in `src/data/books.js`.

### Draft2Digital → Books2Read (Universal Book Links)

When you publish through Draft2Digital, each book automatically gets a Universal Book Link (UBL). These links geo-target readers to their preferred store (Amazon, Kobo, Apple, B&N, etc.) and include print via IngramSpark.

**To add:** Copy your UBL from the Books2Read dashboard and paste it into the `books2read` field for each book in `src/data/books.js`:

```js
{ title: "The Hollow Library", books2read: "https://books2read.com/hollow-library-1", ... }
```

You can also customise the UBL URL at books2read.com (e.g. `books2read.com/hollow-library`).

**URL parameters:** Append `?format=ebook`, `?format=print`, or `?format=audiobook` to deep-link to a specific format.

### IngramSpark (Print Distribution)

IngramSpark print listings are automatically included in your Books2Read universal links. No separate website integration needed — just ensure your IngramSpark titles are published and scannable by Books2Read.

### Payhip (Direct Ebook Sales)

Payhip lets you sell ebooks/PDFs directly from your site with overlay checkout (reader never leaves your page).

**To add:**
1. Create products at payhip.com/products
2. Copy the product key (the part after `payhip.com/b/`)
3. Paste into the `payhip` field in `src/data/books.js`:

```js
{ title: "The Hollow Library", payhip: "ZjHXI", ... }
```

The site automatically loads Payhip's JS and creates overlay checkout buttons. You keep 95% of the sale.

### Paystack (ZAR Direct Payments)

Paystack provides inline checkout for South African readers paying in Rand.

**To set up:**
1. Create a Paystack account at paystack.com
2. Get your public key from Settings → API Keys
3. Update `config.paystackPublicKey` in `src/data/books.js`
4. Set the `paystack` field per book (amount in cents, e.g. `14900` = R149):

```js
{ title: "The Hollow Library", paystack: 14900, ... }
```

**Important:** For production, you should verify payments server-side. Create an API route at `src/app/api/verify-payment/route.js` that calls Paystack's verify endpoint with your secret key.

### How buy buttons display

Each book can have all four platforms, or just one:
- **Books2Read** → "Buy now" button (navy) — sends to universal store selector
- **Payhip** → "Buy ebook" button (teal) — overlay checkout on your site
- **Paystack** → "Buy in ZAR (R149)" button (outline) — inline SA payment
- **No links yet** → "Coming soon" badge

The `BuyButtons` component at `src/components/BuyButtons.jsx` handles all the logic.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your keys:

```bash
cp .env.local.example .env.local
```

Add your Paystack public key and other config. In Vercel, add these in Project Settings → Environment Variables.
