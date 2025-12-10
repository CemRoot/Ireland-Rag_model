"use client";

import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Message, { MessageType } from "./Message";
import LoadingIndicator from "./LoadingIndicator";

const WELCOME_MESSAGE = `Merhaba! 👋 Ben Dublin Expat Assistant. İrlanda'da yaşayan Türkler için buradayım.

Şu konularda yardımcı olabilirim:
• 💰 Vergi hesaplama (PAYE, USC, PRSI)
• 📋 Vize bilgileri (Stamp 1G, Ankara Anlaşması)
• 🆔 PPS başvurusu
• 🏠 Kira ve Rent Tax Credit
• 📄 Bordro analizi

Nasıl yardımcı olabilirim?`;

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize session and welcome message
  useEffect(() => {
    // Get or create session ID
    let storedSessionId = sessionStorage.getItem("sessionId");
    if (!storedSessionId) {
      storedSessionId = uuidv4();
      sessionStorage.setItem("sessionId", storedSessionId);
    }
    setSessionId(storedSessionId);

    // Add welcome message
    const welcomeMessage: MessageType = {
      id: uuidv4(),
      content: WELCOME_MESSAGE,
      role: "assistant",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Auto-resize textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  // Send message
  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: MessageType = {
      id: uuidv4(),
      content: inputValue.trim(),
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

      if (!webhookUrl) {
        // Demo mode - show example response
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const demoResponse: MessageType = {
          id: uuidv4(),
          content:
            "⚠️ Demo modu aktif. Webhook URL ayarlanmamış.\n\nGerçek cevaplar için NEXT_PUBLIC_WEBHOOK_URL ortam değişkenini ayarlayın.",
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, demoResponse]);
      } else {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            message: userMessage.content,
            source: "web",
          }),
        });

        const data = await response.json();

        if (data.ok && data.response) {
          const aiMessage: MessageType = {
            id: uuidv4(),
            content: data.response,
            role: "assistant",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, aiMessage]);
        } else {
          throw new Error("Invalid response from server");
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: MessageType = {
        id: uuidv4(),
        content:
          "Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin. 😔",
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-surface-200 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-end gap-3 bg-white rounded-2xl shadow-soft border border-surface-200 p-2 focus-within:ring-2 focus-within:ring-primary-500/30 focus-within:border-primary-400 transition-all duration-200">
            {/* Textarea */}
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Mesajınızı yazın..."
              rows={1}
              className="flex-1 resize-none bg-transparent px-3 py-2 text-sm sm:text-base text-surface-800 placeholder-surface-400 focus:outline-none max-h-[120px]"
              disabled={isLoading}
            />

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Gönder"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>

          {/* Hint Text */}
          <p className="text-center text-xs text-surface-400 mt-2">
            Enter tuşu ile gönder • Shift+Enter yeni satır
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;

