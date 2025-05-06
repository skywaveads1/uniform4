# Real Environment Variables for Netlify Deployment

## Required Environment Variables

Copy these exact values to your Netlify dashboard:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://uniform4.netlify.app
NEXT_PUBLIC_SITE_NAME=يونيفورم
NEXT_PUBLIC_SITE_DESCRIPTION=أفضل موقع متخصص في الأزياء الموحدة في المملكة العربية السعودية
NEXT_PUBLIC_DEFAULT_LOCALE=ar
NEXT_TELEMETRY_DISABLED=1
BUILD_LOCALE=ar
```

## Optional Enhancement Variables

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-X12ABCDEFG
NEXT_PUBLIC_CONTACT_EMAIL=uniform.sa@gmail.com
NEXT_PUBLIC_PHONE=+966555000000
NEXT_PUBLIC_TWITTER_HANDLE=@uniformsa
NEXT_PUBLIC_META_IMAGE=/images/utility_services/utility_uniforms.jpeg
```

## Production Context Variables

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://uniform4.netlify.app
```

## Deploy Preview Context Variables

```
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://deploy-preview-{PR_NUMBER}--uniform4.netlify.app
```

## Branch Deploy Context Variables

```
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://{BRANCH_NAME}--uniform4.netlify.app
``` 