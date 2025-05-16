# Lazy Loading Guide
Created on: 2025-05-13

This guide shows components that could benefit from lazy loading based on their size, complexity, or use of heavy libraries.

## What is Lazy Loading?

Lazy loading defers loading of non-critical resources (components or images) until they are needed.
Benefits include:
- Faster initial page load
- Lower memory usage
- Reduced bandwidth for users who don't view all content

## Components Recommended for Lazy Loading

- **src\components\BlogArticle.tsx** (341 lines)
- **src\components\ArticleTemplate.tsx** (157 lines)
- **src\app\components\Navbar.tsx** (135 lines)
- **src\app\components\Footer.tsx** (112 lines)

## How to Implement Lazy Loading

### For Next.js Components:

```jsx
import dynamic from 'next/dynamic';

// Instead of: import HeavyComponent from './HeavyComponent';
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: true // Set to false if component shouldn't render on server
});

// Use normally
function MyPage() {
  return <HeavyComponent />;
}
```

### For React Components:

```jsx
import { lazy, Suspense } from 'react';

// Instead of: import HeavyComponent from './HeavyComponent';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Wrap with Suspense
function MyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### For Images:

1. Use the Next.js Image component with priority=false (default)
2. For standard <img> tags, add loading="lazy" attribute
3. Consider adding width and height attributes to avoid layout shifts

## Specific Component Examples:

### BlogArticle

**File:** src\components\BlogArticle.tsx

**Next.js Dynamic Import:**
```jsx
// Next.js dynamic import example for BlogArticle
import dynamic from 'next/dynamic';

// Replace regular import with dynamic import
// import BlogArticle from './BlogArticle';
const BlogArticle = dynamic(() => import('./BlogArticle'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Set to false if this component shouldn't render on the server
});

// Then use normally - no Suspense needed
function ParentComponent() {
  return <BlogArticle />;
}
```

**React.lazy Alternative:**
```jsx
// React.lazy example for BlogArticle
import { lazy, Suspense } from 'react';

// Replace regular import with lazy import
// import BlogArticle from './BlogArticle';
const BlogArticle = lazy(() => import('./BlogArticle'));

// Then wrap with Suspense when using the component
function ParentComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogArticle />
    </Suspense>
  );
}
```


### ArticleTemplate

**File:** src\components\ArticleTemplate.tsx

**Next.js Dynamic Import:**
```jsx
// Next.js dynamic import example for ArticleTemplate
import dynamic from 'next/dynamic';

// Replace regular import with dynamic import
// import ArticleTemplate from './ArticleTemplate';
const ArticleTemplate = dynamic(() => import('./ArticleTemplate'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Set to false if this component shouldn't render on the server
});

// Then use normally - no Suspense needed
function ParentComponent() {
  return <ArticleTemplate />;
}
```

**React.lazy Alternative:**
```jsx
// React.lazy example for ArticleTemplate
import { lazy, Suspense } from 'react';

// Replace regular import with lazy import
// import ArticleTemplate from './ArticleTemplate';
const ArticleTemplate = lazy(() => import('./ArticleTemplate'));

// Then wrap with Suspense when using the component
function ParentComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticleTemplate />
    </Suspense>
  );
}
```


### Navbar

**File:** src\app\components\Navbar.tsx

**Next.js Dynamic Import:**
```jsx
// Next.js dynamic import example for Navbar
import dynamic from 'next/dynamic';

// Replace regular import with dynamic import
// import Navbar from './Navbar';
const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Set to false if this component shouldn't render on the server
});

// Then use normally - no Suspense needed
function ParentComponent() {
  return <Navbar />;
}
```

**React.lazy Alternative:**
```jsx
// React.lazy example for Navbar
import { lazy, Suspense } from 'react';

// Replace regular import with lazy import
// import Navbar from './Navbar';
const Navbar = lazy(() => import('./Navbar'));

// Then wrap with Suspense when using the component
function ParentComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
  );
}
```


### Footer

**File:** src\app\components\Footer.tsx

**Next.js Dynamic Import:**
```jsx
// Next.js dynamic import example for Footer
import dynamic from 'next/dynamic';

// Replace regular import with dynamic import
// import Footer from './Footer';
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Set to false if this component shouldn't render on the server
});

// Then use normally - no Suspense needed
function ParentComponent() {
  return <Footer />;
}
```

**React.lazy Alternative:**
```jsx
// React.lazy example for Footer
import { lazy, Suspense } from 'react';

// Replace regular import with lazy import
// import Footer from './Footer';
const Footer = lazy(() => import('./Footer'));

// Then wrap with Suspense when using the component
function ParentComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  );
}
```

