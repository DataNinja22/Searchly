/**
 * Utility functions for the Searchly application
 */

/**
 * Generates a unique ID for messages
 * @param existingMessages - Array of existing messages
 * @returns New unique ID
 */
export const generateMessageId = (existingMessages: Array<{ id: number }>): number => {
  return existingMessages.length > 0 
    ? Math.max(...existingMessages.map(msg => msg.id)) + 1 
    : 1;
};

/**
 * Validates message input
 * @param message - Message content to validate
 * @returns Boolean indicating if message is valid
 */
export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0 && message.trim().length <= 1000;
};

/**
 * Formats URL for API calls
 * @param baseUrl - Base API URL
 * @param endpoint - API endpoint
 * @param params - URL parameters
 * @returns Formatted URL
 */
export const formatApiUrl = (
  baseUrl: string, 
  endpoint: string, 
  params?: Record<string, string>
): string => {
  let url = `${baseUrl}${endpoint}`;
  
  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }
  
  return url;
};

/**
 * Safely parses JSON with error handling
 * @param jsonString - JSON string to parse
 * @returns Parsed object or null if parsing fails
 */
export const safeJsonParse = <T>(jsonString: string): T | null => {
  try {
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return null;
  }
};

/**
 * Debounce function for performance optimization
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Scrolls to bottom of element smoothly
 * @param element - Element to scroll
 */
export const scrollToBottom = (element: HTMLElement | null): void => {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Truncates text to specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Formats timestamp for display
 * @param timestamp - Timestamp to format
 * @returns Formatted time string
 */
export const formatTimestamp = (timestamp: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(timestamp);
};
