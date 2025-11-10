'use client';

export default function FillerWordAnalyzer({ analysis }) {
  if (!analysis) return null;

  const fillerWords = [
    { word: 'eee', label: 'Eee', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { word: 'emm', label: 'Emm', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
    { word: 'hmm', label: 'Hmm', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
    { word: 'anu', label: 'Anu', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
    { word: 'jadi', label: 'Jadi (awal kalimat)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
    { word: 'terus', label: 'Terus (penghubung)', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { word: 'gitu', label: 'Gitu', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
    { word: 'seperti', label: 'Seperti (berlebihan)', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300' },
  ];

  const totalFillers = fillerWords.reduce((sum, fw) => sum + (analysis[fw.word] || 0), 0);
  
  const getScore = () => {
    if (totalFillers === 0) return { text: 'Sempurna!', color: 'text-green-600 dark:text-green-400', emoji: '🌟' };
    if (totalFillers <= 5) return { text: 'Sangat Baik', color: 'text-blue-600 dark:text-blue-400', emoji: '😊' };
    if (totalFillers <= 10) return { text: 'Baik', color: 'text-yellow-600 dark:text-yellow-400', emoji: '👍' };
    if (totalFillers <= 20) return { text: 'Perlu Latihan', color: 'text-orange-600 dark:text-orange-400', emoji: '💪' };
    return { text: 'Banyak Filler Words', color: 'text-red-600 dark:text-red-400', emoji: '📝' };
  };

  const score = getScore();

  return (
    <div className="w-full max-w-2xl space-y-6">
      {/* Score Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-900">
        <div className="text-center">
          <div className="text-5xl mb-2">{score.emoji}</div>
          <h3 className={`text-2xl font-bold mb-1 ${score.color}`}>
            {score.text}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Total Filler Words: <span className="font-bold text-zinc-900 dark:text-zinc-100">{totalFillers}</span>
          </p>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
          Detail Analisis
        </h3>
        
        <div className="space-y-3">
          {fillerWords.map((fw) => {
            const count = analysis[fw.word] || 0;
            const percentage = totalFillers > 0 ? (count / totalFillers) * 100 : 0;
            
            return (
              <div key={fw.word} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {fw.label}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${fw.color}`}>
                    {count}x
                  </span>
                </div>
                {count > 0 && (
                  <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100 flex items-center">
          <span className="mr-2">💡</span>
          Tips Mengurangi Filler Words
        </h3>
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            <span>Latih kesadaran diri saat berbicara dan kenali pola filler words Anda</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            <span>Gunakan jeda diam (pause) daripada mengisi dengan filler words</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            <span>Persiapkan materi presentasi dengan baik agar lebih percaya diri</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            <span>Rekam dan dengarkan kembali presentasi Anda untuk evaluasi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
