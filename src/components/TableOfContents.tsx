'use client';

import React, { useEffect, useState, useCallback } from 'react';

interface TableOfContentsProps {
  content: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  const extractHeadings = useCallback(() => {
    try {
      // Create a temporary DOM element to parse the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;

      // Extract headings (h2, h3, h4)
      const headings = tempDiv.querySelectorAll('h2, h3, h4');
      
      const items: TocItem[] = Array.from(headings).map((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        const text = heading.textContent || '';
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        
        // Set the id attribute on the heading element
        heading.id = id;
        
        return { id, text, level };
      });

      setTocItems(items);
    } catch (error) {
      console.error('Error extracting headings:', error);
      setTocItems([]);
    }
  }, [content]);

  useEffect(() => {
    extractHeadings();
  }, [extractHeadings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      tocItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
      <h3 className="text-xl font-semibold mb-4">جدول المحتويات</h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li
              key={item.id}
              style={{ marginRight: `${(item.level - 2) * 1.5}rem` }}
            >
              <button
                onClick={() => scrollToHeading(item.id)}
                className={`text-gray-700 hover:text-blue-600 transition-colors text-right w-full ${
                  activeId === item.id ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 