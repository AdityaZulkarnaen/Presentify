'use client';

import Image from "next/image";
import { useState } from "react";
import { Hero, FileUploader, FillerWordAnalyzer } from "@/components";
import { analyzeFillerWords } from "@/services/fillerWordService";

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleFileSelect = async (file) => {
    setIsProcessing(true);
    setAnalysis(null);

    try {
      // Simulasi analisis untuk MVP
      const result = await analyzeFillerWords(file);
      setAnalysis(result);
    } catch (error) {
      console.error('Error analyzing file:', error);
      alert('Terjadi kesalahan saat menganalisis file. Silakan coba lagi.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setAnalysis(null);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black font-sans p-4">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-12 px-4 sm:px-8">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">P</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <Hero />
        </div>

        {/* Main Content */}
        {!analysis ? (
          <>
            <FileUploader onFileSelect={handleFileSelect} isProcessing={isProcessing} />
            
            {isProcessing && (
              <div className="mt-8 flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                  Menganalisis filler words...
                </p>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-2">
                  Mohon tunggu sebentar
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            <FillerWordAnalyzer analysis={analysis} />
            
            <button
              onClick={handleReset}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Analisis File Lain
            </button>
          </>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            MVP - Analisis menggunakan data simulasi. Integrasi dengan speech-to-text akan dilakukan di tahap berikutnya.
          </p>
        </div>
      </main>
    </div>
  );
}
