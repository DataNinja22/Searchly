// Import React hooks for state management
import React, { useState } from "react"

/**
 * InputBar Component Props Interface
 * Defines the expected props for the InputBar component
 */
interface InputBarProps {
    currentMessage: string;                              // Current value of the input field
    setCurrentMessage: (message: string) => void;       // Function to update the input value
    onSubmit: (e: React.FormEvent) => void;             // Form submission handler
}

/**
 * InputBar Component - User input interface for the chat application
 * 
 * This component provides:
 * - Text input field with controlled state management
 * - Submit button with gradient styling and hover effects
 * - Additional action buttons (emoji, attachment placeholders)
 * - Form validation and submission handling
 * - Responsive design with smooth transitions
 * 
 * Design features:
 * - Rounded pill-shaped container with shadow
 * - Teal gradient submit button with rotation animation
 * - Icon buttons for additional functionality
 * - Clean, minimalist aesthetic matching the app design
 * 
 * @param currentMessage - Current text in the input field
 * @param setCurrentMessage - Function to update input text
 * @param onSubmit - Handler for form submission
 */
const InputBar = ({ currentMessage, setCurrentMessage, onSubmit }: InputBarProps) => {

    /**
     * Input change handler - updates the message state as user types
     * 
     * @param e - Input change event containing the new value
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value)
    }

    return (
        // Form wrapper with submission handling and bottom padding
        <form onSubmit={onSubmit} className="p-4 bg-white">
            {/* Main input container with rounded design and shadow */}
            <div className="flex items-center bg-[#F9F9F5] rounded-full p-3 shadow-md border border-gray-200">
                
                {/* Emoji/mood button - placeholder for future emoji picker functionality */}
                <button
                    type="button"
                    className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200"
                >
                    {/* Smiley face icon SVG - indicates emoji/mood functionality */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </button>
                
                {/* Main text input field with controlled state */}
                <input
                    type="text"
                    placeholder="Type a message"
                    value={currentMessage}
                    onChange={handleChange}
                    className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-700"
                />
                
                {/* Attachment button - placeholder for future file upload functionality */}
                <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
                >
                    {/* Paperclip icon SVG - indicates attachment functionality */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                    </svg>
                </button>
                
                {/* Submit button with gradient background and animation effects */}
                <button
                    type="submit"
                    className="bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-600 hover:to-teal-500 rounded-full p-3 ml-2 shadow-md transition-all duration-200 group"
                >
                    {/* Send icon SVG with rotation and scaling animations */}
                    <svg className="w-6 h-6 text-white transform rotate-45 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </button>
            </div>
        </form>
    )
}

// Export the InputBar component for use in other parts of the application
export default InputBar