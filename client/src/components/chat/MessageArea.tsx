/**
 * MessageArea Component - Main chat messages display area
 */

import React from 'react';
import { TypingAnimation } from '@/components/ui/TypingAnimation';
import { SearchStages } from '@/components/chat/SearchStages';
import { DEFAULT_MESSAGES } from '@/constants';
import type { MessageAreaProps } from '@/types';

export const MessageArea: React.FC<MessageAreaProps> = ({ messages, messagesEndRef }) => {
  return (
    <div className="flex-grow overflow-y-auto bg-[#FCFCF8] border-b border-gray-100" style={{ minHeight: 0 }}>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col gap-4 pb-4" ref={messagesEndRef}>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-5`}>
              <div className="flex flex-col max-w-md">
                
                {/* Search Status Display */}
                {!message.isUser && message.searchInfo && (
                  <SearchStages searchInfo={message.searchInfo} />
                )}

                {/* Message Content Container */}
                <div
                  className={`rounded-lg py-3 px-5 ${
                    message.isUser
                      ? 'bg-gradient-to-br from-[#5E507F] to-[#4A3F71] text-white rounded-br-none shadow-md'
                      : 'bg-[#F3F3EE] text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {message.isLoading ? (
                    <TypingAnimation />
                  ) : (
                    message.content || (
                      <span className="text-gray-400 text-xs italic">
                        {DEFAULT_MESSAGES.LOADING}
                      </span>
                    )
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
