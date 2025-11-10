# Presentify

Aplikasi web untuk berlatih kemampuan presentasi dengan menganalisis filler words dalam bahasa Indonesia.

## Fitur MVP

✅ Upload file audio (MP3, WAV, OGG, WebM)  
✅ Upload file video (MP4, WebM, OGG, MOV)  
✅ Drag & drop file support  
✅ Analisis filler words bahasa Indonesia:
  - Eee, Emm, Hmm
  - Anu
  - Jadi (di awal kalimat)
  - Terus (sebagai penghubung)
  - Gitu
  - Seperti/Kayak (berlebihan)
✅ Visualisasi hasil analisis  
✅ Tips untuk mengurangi filler words  
✅ Responsive design (mobile & desktop)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (React 19)

## Development

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Roadmap

### Phase 1 - MVP (Current) ✅
- Upload audio/video files
- Simulasi analisis filler words
- UI/UX yang user-friendly

### Phase 2 - Speech-to-Text Integration
- [ ] Integrasi dengan Google Cloud Speech-to-Text API
- [ ] Support bahasa Indonesia
- [ ] Real-time transcription
- [ ] Extract audio dari video

### Phase 3 - Advanced Features
- [ ] Record audio/video langsung dari browser
- [ ] History analisis
- [ ] Export hasil analisis (PDF/CSV)
- [ ] Perbandingan progress dari waktu ke waktu
- [ ] Tips personalized berdasarkan pola filler words

### Phase 4 - Collaboration & Learning
- [ ] User authentication
- [ ] Berbagi hasil analisis
- [ ] Latihan dengan template presentasi
- [ ] Leaderboard & gamification

## Catatan untuk Production

Untuk menggunakan aplikasi ini di production, Anda perlu:

1. **Speech-to-Text API**: Setup API key untuk Google Cloud Speech-to-Text, Azure Speech, atau Deepgram
2. **Backend Service**: Buat backend untuk processing audio/video yang lebih besar
3. **Database**: Simpan history analisis user
4. **Cloud Storage**: Untuk menyimpan file audio/video

## Struktur Project

```
presentify/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js              # Main page
├── src/
│   ├── components/
│   │   ├── Hero.js          # Hero section
│   │   ├── FileUploader.js  # File upload component
│   │   ├── FillerWordAnalyzer.js  # Analysis display
│   │   └── index.js
│   └── services/
│       └── fillerWordService.js   # Analysis logic
└── public/
```

## Contributing

Contributions are welcome! Silakan buat issue atau pull request.

## License

MIT
