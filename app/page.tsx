"use client";

import Header from "@/components/Header";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Header - Always visible at top */}
      <Header />

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto overflow-hidden">
        <Chat />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

