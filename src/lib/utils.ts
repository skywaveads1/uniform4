/**
 * Format a date string to a localized Arabic date format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Calculate the estimated reading time for a given content
 * Assumes average reading speed of 200 words per minute
 */
export function getReadingTime(content: string): number {
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, '');
  
  // Count words (simple approach)
  const wordCount = textContent.trim().split(/\s+/).length;
  
  // Calculate reading time (200 words per minute)
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  
  return readingTimeMinutes;
} 