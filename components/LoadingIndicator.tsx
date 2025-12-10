"use client";

import React, { useState, useEffect } from "react";

const loadingMessages = [
  { emoji: "🔍", text: "Kaynaklar taranıyor..." },
  { emoji: "🌐", text: "İnternet kontrol ediliyor..." },
  { emoji: "🤔", text: "Cevap oluşturuluyor..." },
  { emoji: "📊", text: "Veriler analiz ediliyor..." },
  { emoji: "📚", text: "Bilgiler derleniyor..." },
  { emoji: "✨", text: "Son rötuşlar yapılıyor..." },
];

const LoadingIndicator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = loadingMessages[currentIndex];

  return (
    <div className="flex w-full justify-start animate-fade-in">
      <div className="flex items-end gap-2 max-w-[85%] sm:max-w-[75%]">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-sm">
          🤖
        </div>

        {/* Loading Bubble */}
        <div className="message-bubble-ai shadow-soft px-4 py-3">
          {/* Animated Status Message */}
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-lg animate-bounce-subtle"
              style={{ animationDuration: "1s" }}
            >
              {currentMessage.emoji}
            </span>
            <span className="text-sm text-surface-600 font-medium animate-pulse">
              {currentMessage.text}
            </span>
          </div>

          {/* Typing Dots */}
          <div className="flex items-center gap-1.5">
            <div className="loading-dot w-2 h-2 bg-primary-400 rounded-full"></div>
            <div className="loading-dot w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="loading-dot w-2 h-2 bg-primary-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;

