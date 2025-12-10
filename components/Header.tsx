"use client";

import React, { useState } from "react";

const APP_VERSION = "0.1.0";

const CHANGELOG = [
  {
    version: "0.1.0",
    date: "Aralık 2025",
    tag: "Beta Lansmanı",
    features: [
      "🚀 İlk beta sürümü yayınlandı",
      "💬 AI destekli sohbet arayüzü",
      "💰 Vergi hesaplama desteği (PAYE, USC, PRSI)",
      "📋 Vize bilgileri (Stamp 1G, Ankara Anlaşması)",
      "🆔 PPS başvuru rehberliği",
      "🏠 Rent Tax Credit bilgileri",
      "📄 Bordro analizi desteği",
      "🌐 Türkçe arayüz",
      "📱 Mobil uyumlu tasarım",
    ],
  },
];

const Header: React.FC = () => {
  const [showChangelog, setShowChangelog] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              {/* Irish Flag Inspired Logo */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <span className="text-xl sm:text-2xl">🇮🇪</span>
                </div>
                {/* Accent dot */}
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent-400 rounded-full border-2 border-white shadow-sm"></div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl font-bold text-surface-900 tracking-tight">
                  Dublin Expat Assistant
                </h1>
                <p className="text-xs sm:text-sm text-surface-500 font-medium">
                  İrlanda'daki Türkler için AI Asistan
                </p>
              </div>
            </div>

            {/* Right Side - Status & Version */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Status Badge - Hidden on mobile */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-full border border-primary-100">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-primary-700">Çevrimiçi</span>
              </div>

              {/* Version Badge - Clickable */}
              <button
                onClick={() => setShowChangelog(true)}
                className="group flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-full border border-amber-200 transition-all duration-200 hover:shadow-md hover:scale-105"
              >
                <span className="text-[10px] sm:text-xs font-bold text-amber-700">
                  v{APP_VERSION}
                </span>
                <span className="px-1.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] sm:text-[10px] font-bold rounded-full uppercase tracking-wide">
                  Beta
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Changelog Modal */}
      {showChangelog && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowChangelog(false)}
        >
          <div 
            className="relative w-full max-w-md max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    🎉 Yenilikler
                  </h2>
                  <p className="text-primary-100 text-sm mt-0.5">
                    Sürüm geçmişi ve yeni özellikler
                  </p>
                </div>
                <button
                  onClick={() => setShowChangelog(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)] p-6">
              {CHANGELOG.map((release, index) => (
                <div key={release.version} className={index > 0 ? "mt-6 pt-6 border-t border-surface-200" : ""}>
                  {/* Version Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-primary-100 text-primary-700 text-sm font-bold rounded-lg">
                        v{release.version}
                      </span>
                      <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold rounded-full uppercase">
                        {release.tag}
                      </span>
                    </div>
                    <span className="text-xs text-surface-400">{release.date}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {release.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-surface-700"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary-500 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Coming Soon */}
              <div className="mt-6 pt-6 border-t border-surface-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-surface-600">🔮 Yakında Gelecek</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-surface-500">
                    <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                    Belge yükleme ve analiz
                  </li>
                  <li className="flex items-center gap-2 text-sm text-surface-500">
                    <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                    Vergi hesaplayıcı aracı
                  </li>
                  <li className="flex items-center gap-2 text-sm text-surface-500">
                    <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                    Sohbet geçmişi kaydetme
                  </li>
                  <li className="flex items-center gap-2 text-sm text-surface-500">
                    <span className="w-1.5 h-1.5 bg-surface-300 rounded-full"></span>
                    Dark mode desteği
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-surface-50 border-t border-surface-200 px-6 py-3">
              <p className="text-xs text-surface-500 text-center">
                Geri bildirimleriniz için teşekkürler! 💚
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

