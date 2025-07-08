/**
 * API service for handling chat interactions
 */

import { API_CONFIG, API_RESPONSE_TYPES } from '@/constants';
import { formatApiUrl, safeJsonParse } from '@/utils';
import type { ApiResponse } from '@/types';

export class ChatApiService {
  private static instance: ChatApiService;

  private constructor() {}

  static getInstance(): ChatApiService {
    if (!ChatApiService.instance) {
      ChatApiService.instance = new ChatApiService();
    }
    return ChatApiService.instance;
  }

  /**
   * Creates EventSource for streaming chat responses
   * @param userInput - User's message
   * @param checkpointId - Optional checkpoint ID for conversation continuity
   * @returns EventSource instance
   */
  createChatStream(userInput: string, checkpointId?: string): EventSource {
    const params: Record<string, string> = {};
    
    if (checkpointId) {
      params.checkpoint_id = checkpointId;
    }

    const url = formatApiUrl(
      API_CONFIG.BASE_URL,
      `${API_CONFIG.ENDPOINTS.CHAT_STREAM}/${encodeURIComponent(userInput)}`,
      Object.keys(params).length > 0 ? params : undefined
    );

    return new EventSource(url);
  }

  /**
   * Parses API response data safely
   * @param eventData - Raw event data from EventSource
   * @returns Parsed API response or null
   */
  parseApiResponse(eventData: string): ApiResponse | null {
    return safeJsonParse<ApiResponse>(eventData);
  }

  /**
   * Validates API response type
   * @param response - API response to validate
   * @returns Boolean indicating if response type is valid
   */
  isValidResponseType(response: ApiResponse): boolean {
    return Object.values(API_RESPONSE_TYPES).includes(response.type as any);
  }

  /**
   * Handles EventSource errors
   * @param error - Error event
   * @param onError - Error callback
   */
  handleStreamError(error: Event, onError: (message: string) => void): void {
    console.error('EventSource error:', error);
    onError('Connection error occurred. Please try again.');
  }

  /**
   * Cleans up EventSource connection
   * @param eventSource - EventSource to close
   */
  cleanup(eventSource: EventSource): void {
    if (eventSource.readyState !== EventSource.CLOSED) {
      eventSource.close();
    }
  }
}

// Export singleton instance
export const chatApiService = ChatApiService.getInstance();
