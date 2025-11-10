// Service untuk analisis filler words dalam bahasa Indonesia
// Untuk MVP, ini akan menjadi simulasi analisis
// Dalam production, ini akan terhubung dengan speech-to-text API

export async function analyzeFillerWords(file) {
  return new Promise((resolve) => {
    // Simulasi proses analisis (2-3 detik)
    setTimeout(() => {
      // Untuk MVP, kita generate hasil analisis secara random
      // Dalam production, ini akan menggunakan speech-to-text API
      // seperti Google Cloud Speech-to-Text, Azure Speech, atau Deepgram
      
      const mockAnalysis = {
        eee: Math.floor(Math.random() * 8),
        emm: Math.floor(Math.random() * 6),
        hmm: Math.floor(Math.random() * 5),
        anu: Math.floor(Math.random() * 4),
        jadi: Math.floor(Math.random() * 7),
        terus: Math.floor(Math.random() * 5),
        gitu: Math.floor(Math.random() * 6),
        seperti: Math.floor(Math.random() * 4),
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        analyzedAt: new Date().toISOString(),
      };

      resolve(mockAnalysis);
    }, 2500);
  });
}

// Fungsi untuk implementasi speech-to-text (untuk future development)
export async function transcribeAudio(audioFile) {
  // TODO: Implementasi dengan API speech-to-text
  // Contoh API yang bisa digunakan:
  // 1. Google Cloud Speech-to-Text (support bahasa Indonesia)
  // 2. Azure Speech Services
  // 3. Deepgram
  // 4. Assembly AI
  
  throw new Error('Speech-to-text belum diimplementasikan. Gunakan analyzeFillerWords() untuk MVP.');
}

// Fungsi untuk extract audio dari video (untuk future development)
export async function extractAudioFromVideo(videoFile) {
  // TODO: Implementasi extract audio dari video
  // Bisa menggunakan FFmpeg.js atau server-side processing
  
  throw new Error('Extract audio dari video belum diimplementasikan.');
}

// Fungsi untuk deteksi filler words dari transcript
export function detectFillerWords(transcript) {
  const fillerWords = {
    eee: ['eee', 'ee', 'eeh', 'eh'],
    emm: ['emm', 'em', 'ehm'],
    hmm: ['hmm', 'hm', 'hmmmm'],
    anu: ['anu', 'anuu'],
    jadi: ['jadi', 'jadi ya', 'jadi gini'],
    terus: ['terus', 'terus nih', 'trus'],
    gitu: ['gitu', 'gituu', 'gitu ya', 'gitu loh'],
    seperti: ['seperti', 'kayak', 'kaya'],
  };

  const results = {};
  const lowerTranscript = transcript.toLowerCase();

  Object.keys(fillerWords).forEach((category) => {
    let count = 0;
    fillerWords[category].forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      const matches = lowerTranscript.match(regex);
      if (matches) {
        count += matches.length;
      }
    });
    results[category] = count;
  });

  return results;
}
