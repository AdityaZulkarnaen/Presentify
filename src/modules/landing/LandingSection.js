'use client';

import { Hero } from './index';
import { Container } from '@/components';

export default function LandingSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Hero />
        
        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎤"
            title="Upload & Analisis"
            description="Upload rekaman audio atau video presentasi Anda dan dapatkan analisis instan tentang filler words yang digunakan."
          />
          <FeatureCard
            icon="📊"
            title="Visualisasi Detail"
            description="Lihat breakdown lengkap dari setiap jenis filler word dengan grafik dan persentase yang mudah dipahami."
          />
          <FeatureCard
            icon="💡"
            title="Tips & Saran"
            description="Dapatkan tips praktis dan saran personal untuk meningkatkan kemampuan presentasi Anda."
          />
        </div>

        {/* Filler Words Info */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-900">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 text-center">
            Filler Words yang Kami Deteksi
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-center mb-6 max-w-2xl mx-auto">
            Aplikasi ini dapat mendeteksi berbagai filler words umum dalam bahasa Indonesia yang sering muncul saat presentasi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Eee / Ehm',
              'Anu',
              'Jadi...',
              'Terus...',
              'Gitu',
              'Seperti / Kayak',
              'Hmm...',
              'Dan lain-lain',
            ].map((word) => (
              <div
                key={word}
                className="bg-white dark:bg-zinc-900 rounded-lg p-3 text-center border border-zinc-200 dark:border-zinc-800"
              >
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
