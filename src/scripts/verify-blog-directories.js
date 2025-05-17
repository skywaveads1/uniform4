/**
 * Verify Blog Directories and Pages Script
 * 
 * This script checks that all required directories and files exist for the blog pages
 * mentioned in the roadmap.md file. If any are missing, it creates placeholder files.
 */

const fs = require('fs');
const path = require('path');

// List of URLs from the roadmap that were giving 404 errors
const urlsToFix = [
  'https://esaudi.info/privacy/',
  'https://esaudi.info/about/',
  'https://esaudi.info/',
  'https://esaudi.info/contact/',
  'https://esaudi.info/blog/flight-crew/flight-10/',
  'https://esaudi.info/blog/flight-crew/flight-11/',
  'https://esaudi.info/blog/flight-crew/flight-7/',
  'https://esaudi.info/blog/flight-crew/flight-6/',
  'https://esaudi.info/blog/flight-crew/flight-12/',
  'https://esaudi.info/blog/',
  'https://esaudi.info/blog/flight-crew/flight-5/',
  'https://esaudi.info/blog/flight-crew/flight-4/',
  'https://esaudi.info/blog/flight-crew/flight-3/',
  'https://esaudi.info/blog/?category=clinic_wear',
  'https://esaudi.info/blog/flight-crew/flight-2/',
  'https://esaudi.info/blog/flight-crew/flight-1/',
  'https://esaudi.info/terms/',
  'https://esaudi.info/blog/?category=culinary_apparel',
  'https://esaudi.info/faq/',
  'https://esaudi.info/blog/?category=flight_crew',
  'https://esaudi.info/blog/flight-crew/flight-9/',
  'https://esaudi.info/blog/flight-crew/flight-8/',
  'https://esaudi.info/quote/',
];

// Function to parse the URL and extract the path
function parseUrl(url) {
  const parsedUrl = new URL(url);
  return {
    path: parsedUrl.pathname,
    query: parsedUrl.searchParams
  };
}

// Function to ensure a directory exists
function ensureDirectoryExists(directory) {
  const normalizedDir = directory.replace(/^\//, ''); // Remove leading slash
  const srcAppDir = path.join(process.cwd(), 'src', 'app', normalizedDir);
  
  if (!fs.existsSync(srcAppDir)) {
    console.log(`Creating directory: ${srcAppDir}`);
    fs.mkdirSync(srcAppDir, { recursive: true });
    return false; // Directory didn't exist before
  }
  return true; // Directory already existed
}

// Function to ensure a page.tsx file exists
function ensurePageExists(directory, isRoot = false) {
  const normalizedDir = directory.replace(/^\//, ''); // Remove leading slash
  const srcAppDir = path.join(process.cwd(), 'src', 'app', normalizedDir);
  const pageFilePath = path.join(srcAppDir, 'page.tsx');
  
  if (!fs.existsSync(pageFilePath)) {
    console.log(`Creating page file: ${pageFilePath}`);
    
    // Create a basic page template based on the path
    let pageContent;
    
    if (isRoot) {
      // The root page already exists, we don't need to create it
      return true;
    } else if (normalizedDir.includes('blog/flight-crew/flight-')) {
      // This will be handled by the [category]/[slug] dynamic route
      return true;
    } else if (normalizedDir === 'blog') {
      // The blog index page already exists, we don't need to create it
      return true;
    } else {
      // Create a simple page for other routes
      const pageName = normalizedDir.split('/').pop() || 'Home';
      const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
      
      pageContent = `'use client';

import React from 'react';
import { Container } from '@/components/ui/container';
import { PageHeader } from '@/components/PageHeader';

export default function ${capitalizedPageName}Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="${capitalizedPageName}"
        description="يونيفورم - الشركة الرائدة في مجال تصميم وإنتاج الأزياء الموحدة المخصصة في المملكة العربية السعودية"
        className="mb-12"
      />
      
      <Container className="py-12">
        <div className="prose prose-lg max-w-none">
          <p>محتوى صفحة ${capitalizedPageName} سيظهر هنا.</p>
        </div>
      </Container>
    </div>
  );
}`;
      
      fs.writeFileSync(pageFilePath, pageContent);
      return false; // Page didn't exist before
    }
  }
  return true; // Page already existed
}

// Process all URLs
console.log('Starting verification of blog directories and pages...');

urlsToFix.forEach(url => {
  const { path, query } = parseUrl(url);
  
  // Skip the root URL as it's already handled
  if (path === '/') {
    console.log('Root URL (/) already has a page');
    return;
  }
  
  // Remove trailing slash for processing
  const cleanPath = path.replace(/\/$/, '');
  
  // Check if directory exists
  const directoryExists = ensureDirectoryExists(cleanPath);
  
  // Check if page exists
  const pageExists = ensurePageExists(cleanPath, cleanPath === '');
  
  // Handle query parameters (specifically for blog category filters)
  if (cleanPath === '/blog' && query.has('category')) {
    const category = query.get('category');
    console.log(`URL has category query param: ${category}`);
    
    // No need to create separate pages for category queries as they're handled by the blog index page
  }
  
  console.log(`Processed ${url}: Directory ${directoryExists ? 'exists' : 'created'}, Page ${pageExists ? 'exists' : 'created'}`);
});

console.log('Verification complete!'); 