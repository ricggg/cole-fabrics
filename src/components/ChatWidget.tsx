"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  RotateCcw,
  Minus,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const quickQuestions = [
  "What fabrics do you sell?",
  "Do you ship internationally?",
  "What are your prices?",
  "Can I get free samples?",
  "What are your business hours?",
  "How can I contact you?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    setShowQuickQuestions(false);

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: generateId(),
        role: "assistant",
        content:
          "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at sales@globaltailoringmaterials.com or call +1 (815) 575-8222.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  const resetChat = () => {
    setMessages([]);
    setShowQuickQuestions(true);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 1000,
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C8A960, #A88B3E)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 30px rgba(200, 169, 96, 0.4)",
            }}
          >
            <MessageCircle size={28} color="#FFFFFF" />
            <span
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                border: "2px solid rgba(200, 169, 96, 0.4)",
                animation: "chatPulse 2s ease-in-out infinite",
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 1000,
              width: "min(420px, calc(100vw - 32px))",
              height: "min(640px, calc(100vh - 80px))",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
              border: "1px solid rgba(200, 169, 96, 0.2)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #1B2A4A, #111D35)",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(200, 169, 96, 0.2)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sparkles size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    Global Tailoring Materials AI
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#C8A960",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#22C55E",
                        display: "inline-block",
                      }}
                    />
                    Online — Ask me anything
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={resetChat}
                  aria-label="Reset chat"
                  title="Reset conversation"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid rgba(200, 169, 96, 0.3)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(200, 169, 96, 0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <RotateCcw size={14} color="#C8A960" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Minimize chat"
                  title="Minimize"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid rgba(200, 169, 96, 0.3)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(200, 169, 96, 0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <Minus size={14} color="#C8A960" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  title="Close"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    border: "1px solid rgba(200, 169, 96, 0.3)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(200, 169, 96, 0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <X size={14} color="#C8A960" />
                </button>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "20px",
                backgroundColor: "#FDF8F0",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        minWidth: "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1B2A4A, #243560)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Bot size={16} color="#C8A960" />
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "16px",
                        borderTopLeftRadius: "4px",
                        padding: "14px 18px",
                        fontSize: "14px",
                        color: "#374151",
                        lineHeight: 1.6,
                        maxWidth: "85%",
                        border: "1px solid #E5E5E5",
                      }}
                    >
                      <p style={{ marginBottom: "8px" }}>
                        👋 Welcome to <strong>Global Tailoring Materials</strong>!
                      </p>
                      <p style={{ marginBottom: "8px" }}>
                        I&apos;m your AI assistant. I can help you with:
                      </p>
                      <ul
                        style={{
                          paddingLeft: "16px",
                          marginBottom: "8px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px",
                        }}
                      >
                        <li>🧵 Product information & recommendations</li>
                        <li>💰 Pricing & bulk discounts</li>
                        <li>🌍 Shipping & delivery details</li>
                        <li>📋 Ordering process</li>
                        <li>❓ Any other questions</li>
                      </ul>
                      <p>How can I help you today?</p>
                    </div>
                  </div>

                  {showQuickQuestions && (
                    <div>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#9CA3AF",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "10px",
                          paddingLeft: "42px",
                        }}
                      >
                        Quick Questions
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          paddingLeft: "42px",
                        }}
                      >
                        {quickQuestions.map((q) => (
                          <motion.button
                            key={q}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleQuickQuestion(q)}
                            style={{
                              padding: "8px 14px",
                              borderRadius: "20px",
                              border: "1px solid rgba(200, 169, 96, 0.4)",
                              backgroundColor: "#FFFFFF",
                              color: "#1B2A4A",
                              fontSize: "12px",
                              fontWeight: 500,
                              cursor: "pointer",
                              transition: "all 0.2s",
                              whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(200, 169, 96, 0.1)";
                              e.currentTarget.style.borderColor = "#C8A960";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#FFFFFF";
                              e.currentTarget.style.borderColor =
                                "rgba(200, 169, 96, 0.4)";
                            }}
                          >
                            {q}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent:
                      msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {msg.role === "assistant" && (
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        minWidth: "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #1B2A4A, #243560)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "flex-end",
                      }}
                    >
                      <Bot size={16} color="#C8A960" />
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "80%",
                    }}
                  >
                    <div
                      style={{
                        padding: "14px 18px",
                        borderRadius: "16px",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        ...(msg.role === "user"
                          ? {
                              background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                              color: "#FFFFFF",
                              borderTopRightRadius: "4px",
                            }
                          : {
                              backgroundColor: "#FFFFFF",
                              color: "#374151",
                              borderTopLeftRadius: "4px",
                              border: "1px solid #E5E5E5",
                            }),
                      }}
                    >
                      {msg.content}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#9CA3AF",
                        marginTop: "4px",
                        textAlign: msg.role === "user" ? "right" : "left",
                        paddingLeft: msg.role === "assistant" ? "4px" : "0",
                        paddingRight: msg.role === "user" ? "4px" : "0",
                      }}
                    >
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                  {msg.role === "user" && (
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        minWidth: "32px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "flex-end",
                      }}
                    >
                      <User size={16} color="#FFFFFF" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      minWidth: "32px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1B2A4A, #243560)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Bot size={16} color="#C8A960" />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "16px",
                      borderTopLeftRadius: "4px",
                      padding: "14px 20px",
                      border: "1px solid #E5E5E5",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Loader2
                      size={16}
                      color="#C8A960"
                      style={{ animation: "spin 1s linear infinite" }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#9CA3AF",
                        fontStyle: "italic",
                      }}
                    >
                      Thinking...
                    </span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div
              style={{
                padding: "16px 20px",
                backgroundColor: "#FFFFFF",
                borderTop: "1px solid #E5E5E5",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our fabrics, pricing, shipping..."
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: "12px",
                    border: "1px solid #E5E5E5",
                    fontSize: "14px",
                    color: "#2D2D2D",
                    backgroundColor: "#F7F7F7",
                    outline: "none",
                    transition: "border-color 0.2s, background-color 0.2s",
                    opacity: isLoading ? 0.6 : 1,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#C8A960";
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#E5E5E5";
                    e.currentTarget.style.backgroundColor = "#F7F7F7";
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    border: "none",
                    background:
                      !input.trim() || isLoading
                        ? "#E5E5E5"
                        : "linear-gradient(135deg, #C8A960, #A88B3E)",
                    cursor:
                      !input.trim() || isLoading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                >
                  <Send
                    size={18}
                    color={!input.trim() || isLoading ? "#9CA3AF" : "#FFFFFF"}
                  />
                </motion.button>
              </form>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "8px",
                  fontSize: "11px",
                  color: "#9CA3AF",
                }}
              >
                Powered by Global Tailoring Materials AI • Responses may not be 100% accurate
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes chatPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}