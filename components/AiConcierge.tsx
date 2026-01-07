
import React, { useState, useRef, useEffect } from 'react';
import { getTravelAdvice } from '../services/geminiService';
import { Message } from '../types';

const AiConcierge: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome! I'm your K-Journey AI Assistant. I have local knowledge on transit, beauty hotspots, and culture. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await getTravelAdvice(input, history);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div ref={scrollRef} className="flex-1 overflow-y-auto mb-6 space-y-6 pr-2 hide-scrollbar">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-6 py-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
              m.role === 'user' 
                ? 'bg-[#88C8FF] text-white rounded-br-none' 
                : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 px-6 py-4 rounded-3xl rounded-bl-none border border-slate-200 shadow-sm">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#88C8FF]/50 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#88C8FF]/50 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-[#88C8FF]/50 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about Myeongdong, T-Money, or Gyeongbokgung..."
          className="w-full pl-6 pr-16 py-5 rounded-[1.5rem] bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-[#88C8FF]/10 focus:border-[#88C8FF] text-sm outline-none transition-all shadow-inner"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="absolute right-3 top-2.5 p-3 bg-[#88C8FF] text-white rounded-2xl disabled:opacity-50 transition-all hover:bg-[#6fb3f0] active:scale-95 shadow-lg shadow-[#88C8FF]/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AiConcierge;
