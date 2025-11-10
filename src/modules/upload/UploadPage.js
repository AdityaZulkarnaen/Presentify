'use client';

import { useState } from 'react';
import { FileUploader, FillerWordAnalyzer } from './index';
import { Button, LoadingSpinner } from '@/components';
import { analyzeFillerWords } from '@/services/fillerWordService';

export default function UploadPage() {
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
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] py-12">
      {!analysis ? (
        <>
          <FileUploader onFileSelect={handleFileSelect} isProcessing={isProcessing} />
          
          {isProcessing && (
            <div className="mt-8">
              <LoadingSpinner size="lg" text="Menganalisis filler words..." />
              <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-2 text-center">
                Mohon tunggu sebentar
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          <FillerWordAnalyzer analysis={analysis} />
          
          <Button
            onClick={handleReset}
            variant="primary"
            size="lg"
            className="mt-8"
          >
            Analisis File Lain
          </Button>
        </>
      )}
    </div>
  );
}
