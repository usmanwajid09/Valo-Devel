"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  cta?: { label: string; href: string };
};

const SUGGESTED_PROMPTS = [
  { label: "What is your 7-Day Guarantee?", query: "Tell me about the 7-day guarantee" },
  { label: "Is Global Vital Spark LLC US-registered?", query: "Tell me about your US legal entity and LLC registration" },
  { label: "What are your AI/Agentic capabilities?", query: "What can you build with GenAI and AI Agents?" },
  { label: "How much does a project cost?", query: "How do you calculate pricing and project costs?" },
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi! I'm Valor AI, your virtual engineering assistant. Ask me about our 7-day milestone guarantee, Austin TX legal registration, tech stacks, or pricing.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking/typing time
    setTimeout(() => {
      setIsTyping(false);
      const response = generateBotResponse(text);
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const generateBotResponse = (input: string): Message => {
    const text = input.toLowerCase();
    const id = `bot-${Date.now()}`;
    const timestamp = new Date();

    // 1. 7-Day Guarantee
    if (text.includes("guarantee") || text.includes("7-day") || text.includes("7 day") || text.includes("refund") || text.includes("milestone")) {
      return {
        id,
        sender: "bot",
        text: "We guarantee a fully functioning milestone within your first 7 days, or you get a full 100% refund. No meetings, no slide decks — just working software you can click and test in week one. From there, we iterate in weekly sprints.",
        cta: { label: "See Our Process", href: "/process" },
        timestamp,
      };
    }

    // 2. LLC & Legal
    if (text.includes("llc") || text.includes("legal") || text.includes("austin") || text.includes("texas") || text.includes("registered") || text.includes("united states") || text.includes("compliance")) {
      return {
        id,
        sender: "bot",
        text: "Yes, Valor Devs operates under Global Vital Spark LLC, legally registered in Austin, TX (78731). We hold all US legal compliance for contracts, NDAs, Master Service Agreements (MSAs), and invoicing, meaning you get the ease of working with a local US firm.",
        cta: { label: "View Trust Details", href: "/about#trust-center" },
        timestamp,
      };
    }

    // 3. AI / Agentic AI
    if (text.includes("ai") || text.includes("agent") || text.includes("ml") || text.includes("machine learning") || text.includes("rag") || text.includes("chatbot") || text.includes("llm")) {
      return {
        id,
        sender: "bot",
        text: "We build advanced AI solutions: Retrieval-Augmented Generation (RAG) search, autonomous AI Agents (LangChain, LlamaIndex), workflow automation (n8n, Zapier), and custom ML pipeline training. Every team member uses AI daily, which lets us build faster than standard agencies.",
        cta: { label: "AI Service Details", href: "/services/generative-ai-agentic-ai" },
        timestamp,
      };
    }

    // 4. Cost / Price
    if (text.includes("cost") || text.includes("price") || text.includes("rate") || text.includes("budget") || text.includes("estimate") || text.includes("calculator")) {
      return {
        id,
        sender: "bot",
        text: "Project pricing is based on the complexity, features, compliance needs, and timeline. I recommend using our new Interactive Project Planner to build your team and estimate your project's cost and timeline in 60 seconds.",
        cta: { label: "Open Project Planner", href: "/planner" },
        timestamp,
      };
    }

    // 5. Tech Stack
    if (text.includes("tech") || text.includes("stack") || text.includes("react") || text.includes("next") || text.includes("node") || text.includes("python") || text.includes("postgres")) {
      return {
        id,
        sender: "bot",
        text: "Our core stack includes Next.js, React, TypeScript, and Tailwind CSS for frontend. Node.js, PostgreSQL, and MongoDB for backend. React Native/Expo for mobile. Python, PyTorch, and LangChain for AI/ML. All managed via AWS/GCP and Terraform.",
        cta: { label: "Explore Tech Radar", href: "/services#tech-radar" },
        timestamp,
      };
    }

    // 6. About & Team
    if (text.includes("about") || text.includes("team") || text.includes("who are you") || text.includes("specialist")) {
      return {
        id,
        sender: "bot",
        text: "Our team consists of 8 specialists: Hamza Malik (Founder & CEO), Usman Wajid (Project Manager & IT Consultant), Fahad Bilal (Senior Full-Stack Developer), senior leads for AI/ML, UI/UX, and DevOps, and junior developers. One dedicated expert owns each part of your project.",
        cta: { label: "Meet the Team", href: "/about#team" },
        timestamp,
      };
    }

    // 7. Contact
    if (text.includes("contact") || text.includes("hire") || text.includes("email") || text.includes("phone") || text.includes("whatsapp") || text.includes("book")) {
      return {
        id,
        sender: "bot",
        text: `Let's build together! You can book a direct call, email us at ${siteConfig.contact.email}, or reach our team 24/7 on WhatsApp at ${siteConfig.contact.whatsapp}. We reply to all messages within 24 hours.`,
        cta: { label: "Go to Contact", href: "/contact" },
        timestamp,
      };
    }

    // Fallback
    return {
      id,
      sender: "bot",
      text: "I can help you understand how Valor Devs delivers projects. Try asking about:\n\n• Our 7-day guarantee\n• LLC legal registration\n• Project planner calculator\n• Our 4 engineering specialists",
      timestamp,
    };
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border border-gold/30 bg-surface shadow-card backdrop-blur-xl md:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/15 bg-card/65 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient text-background">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">Valor AI</h3>
                  <div className="flex items-center gap-1.5 text-[0.7rem] text-gold-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online & Ready
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg text-xs font-semibold ${
                      msg.sender === "user"
                        ? "bg-gold/10 border border-gold text-gold"
                        : "bg-surface border border-gold/30 text-white"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-gold" />}
                  </div>

                  {/* Bubble */}
                  <div className="space-y-2 max-w-[76%]">
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-gold text-background font-medium rounded-tr-none"
                          : "bg-card/70 border border-gold/10 text-white rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* CTA Button */}
                    {msg.cta && (
                      <Link
                        href={msg.cta.href}
                        onClick={() => {
                          if (!msg.cta?.href.startsWith("#")) {
                            setIsOpen(false);
                          }
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-gold/45 bg-gold/5 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/10 hover:border-gold"
                      >
                        {msg.cta.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {/* Bot typing state */}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 text-white">
                    <Bot className="h-4 w-4 text-gold" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-card/70 border border-gold/10 px-4 py-2.5">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted animate-bounce" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="border-t border-gold/10 bg-surface/80 p-3.5">
                <div className="text-[0.7rem] uppercase tracking-wider text-muted mb-2 font-medium">Quick Questions</div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt.label}
                      onClick={() => handleSendMessage(prompt.query)}
                      className="rounded-lg border border-gold/20 bg-card hover:border-gold/50 px-2.5 py-1.5 text-xs text-muted hover:text-white transition-colors"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="border-t border-gold/15 bg-card/40 p-4 flex gap-2"
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                className="flex-1 rounded-xl border border-gold/25 bg-background px-4 py-2 text-sm text-white placeholder-muted focus:border-gold focus:outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-background transition-transform duration-150 hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-background shadow-[0_8px_30px_rgba(201,168,76,0.3)]"
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white border border-background">
                <Sparkles className="h-2 w-2 text-gold-dark animate-pulse" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
