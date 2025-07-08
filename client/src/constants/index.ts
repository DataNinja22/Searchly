/**
 * Constants for the Searchly application
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_BASE_URL 
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : 'http://localhost:8000',
  ENDPOINTS: {
    CHAT_STREAM: '/chat_stream',
  },
  TIMEOUT: 30000, // 30 seconds
} as const;

// UI Constants
export const UI_CONFIG = {
  COLORS: {
    PRIMARY: '#4A3F71',
    SECONDARY: '#5E507F',
    ACCENT: '#14B8A6', // teal-500
    BACKGROUND: '#FCFCF8',
    MESSAGE_BG: '#F3F3EE',
  },
  LAYOUT: {
    MAX_MESSAGE_WIDTH: 'max-w-md',
    CONTAINER_WIDTH: 'w-[70%]',
    CONTAINER_HEIGHT: 'h-[90vh]',
  },
  ANIMATION: {
    TYPING_DURATION: 1000,
    TRANSITION_DURATION: 200,
  },
} as const;

// Search Stages
export const SEARCH_STAGES = {
  SEARCHING: 'searching',
  READING: 'reading',
  WRITING: 'writing',
  ERROR: 'error',
} as const;

// Message Types
export const MESSAGE_TYPES = {
  MESSAGE: 'message',
  SYSTEM: 'system',
  ERROR: 'error',
} as const;

// API Response Types
export const API_RESPONSE_TYPES = {
  CHECKPOINT: 'checkpoint',
  CONTENT: 'content',
  SEARCH_START: 'search_start',
  SEARCH_RESULTS: 'search_results',
  SEARCH_ERROR: 'search_error',
  END: 'end',
} as const;

// Default Messages
export const DEFAULT_MESSAGES = {
  WELCOME: 'Hi there, how can I help you?',
  ERROR: 'Sorry, there was an error processing your request.',
  CONNECTION_ERROR: 'Sorry, there was an error connecting to the server.',
  LOADING: 'Waiting for response...',
} as const;

// Validation
export const VALIDATION = {
  MAX_MESSAGE_LENGTH: 1000,
  MIN_MESSAGE_LENGTH: 1,
} as const;
