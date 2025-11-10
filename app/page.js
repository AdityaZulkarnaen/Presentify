'use client';

import { LandingSection } from '@/modules/landing';
import { UploadPage } from '@/modules/upload';
import { Container } from '@/components';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-black font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-12">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">P</span>
          </div>
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Presentify
          </span>
        </div>

        {/* Landing Section */}
        <LandingSection />

        {/* Upload Section */}
        <section className="w-full py-12 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Mulai Analisis Sekarang
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Upload file audio atau video presentasi Anda untuk mendapatkan analisis filler words secara instan.
              </p>
            </div>
            <UploadPage />
          </Container>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800">
          <Container>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 text-center">
              MVP - Analisis menggunakan data simulasi. Integrasi dengan speech-to-text akan dilakukan di tahap berikutnya.
            </p>
          </Container>
        </footer>
      </main>
    </div>
  );
}
