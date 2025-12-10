"use client";

import React from "react";

export interface MessageType {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  // Format message content with line breaks and preserve formatting
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < content.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div
      className={`flex w-full animate-fade-in ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex items-end gap-2 max-w-[85%] sm:max-w-[75%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
            isUser
              ? "bg-gradient-to-br from-primary-500 to-primary-700 text-white"
              : "bg-gradient-to-br from-accent-400 to-accent-500 text-white"
          }`}
        >
          {isUser ? "👤" : "🤖"}
        </div>

        {/* Message Bubble */}
        <div
          className={`relative px-4 py-3 ${
            isUser
              ? "message-bubble-user shadow-md shadow-primary-500/10"
              : "message-bubble-ai shadow-soft"
          }`}
        >
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
            {formatContent(message.content)}
          </p>

          {/* Timestamp */}
          <div
            className={`mt-1.5 text-[10px] sm:text-xs ${
              isUser ? "text-white/60" : "text-surface-400"
            }`}
          >
            {message.timestamp.toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

