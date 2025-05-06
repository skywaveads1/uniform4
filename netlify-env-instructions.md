# Netlify Environment Variables Setup

This document provides instructions for setting up the required environment variables in your Netlify dashboard for the Uniform Blog project.

## How to Add Environment Variables in Netlify

1. Log in to your [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Go to **Site Settings** → **Build & deploy** → **Environment**
4. Click on **Edit variables**
5. Add each variable as a key-value pair

## Required Environment Variables

Copy and paste these into your Netlify environment variables section:

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `NODE_ENV` | `production` | Environment mode |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.netlify.app` | Your site's URL |
| `NEXT_PUBLIC_SITE_NAME` | `يونيفورم` | Site name in Arabic |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | `أفضل موقع متخصص في الأزياء الموحدة في المملكة العربية السعودية` | Site description |
| `NEXT_PUBLIC_DEFAULT_LOCALE` | `ar` | Default locale (Arabic) |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disable Next.js telemetry |
| `BUILD_LOCALE` | `ar` | Build locale setting |

## Optional Environment Variables

These are not required but can enhance your site:

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | `UA-XXXXXXXXX-X` | Google Analytics tracking ID |
| `NEXT_PUBLIC_HOTJAR_ID` | `0000000` | Hotjar tracking ID |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `contact@example.com` | Contact email for your site |
| `NEXT_PUBLIC_PHONE` | `+966000000000` | Contact phone number |
| `NEXT_PUBLIC_TWITTER_HANDLE` | `@youruniformaccount` | Twitter username |
| `NEXT_PUBLIC_META_IMAGE` | `/images/uniform-logo.png` | Default meta image for SEO |

## Environment-Specific Variables

You can set different variables for different deployment contexts (production, staging, branch deploys) in the Netlify dashboard. This corresponds to the settings in your `netlify.toml` file:

### Production
- `NODE_ENV`: `production`
- `NEXT_PUBLIC_SITE_URL`: Your production URL

### Deploy Previews
- `NODE_ENV`: `development`
- `NEXT_PUBLIC_SITE_URL`: Netlify's preview URL format

## Security Note

Never commit sensitive environment variables to Git. Always set API keys, tokens, and secrets directly in the Netlify dashboard. 