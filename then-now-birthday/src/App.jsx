import React, { useState } from 'react';
import { birthdayData } from './data/birthdayData';
import { BalloonBackground } from './components/BalloonBackground';
import { FloatingNameAda } from './components/FloatingNameAda';
import { AudioPlayer } from './components/AudioPlayer';
import { LightboxModal } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { EmojiCursorTrail } from './components/EmojiCursorTrail';
import { FloatingEmojis } from './components/FloatingEmojis';
import { MarqueeTicker } from './components/MarqueeTicker';
import { SurpriseGiftModal } from './components/SurpriseGiftModal';
import { SpinWheelModal } from './components/SpinWheelModal';

import { IntroSection } from './sections/01_IntroSection';
import { ChildhoodSection } from './sections/02_ChildhoodSection';
import { ThenNowSection } from './sections/03_ThenNowSection';
import { TimelineSection } from './sections/04_TimelineSection';
import { GallerySection } from './sections/05_GallerySection';
import { CelebrationSection } from './sections/06_CelebrationSection';
import { CakeSection } from './sections/07_CakeSection';
import { LetterSection } from './sections/08_LetterSection';
import { FinalSurpriseSection } from './sections/09_FinalSurpriseSection';
import { ComplimentGeneratorSection } from './sections/ComplimentGeneratorSection';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isWheelOpen, setIsWheelOpen] = useState(false);

  const handleStartJourney = () => {
    const el = document.getElementById('childhood');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#090417] text-slate-100 selection:bg-pink-500 selection:text-white font-sans overflow-x-hidden">
      {/* Ambient DJ Background & Floating Name Ada Layers */}
      <BalloonBackground />
      <FloatingNameAda />
      <FloatingEmojis />
      <EmojiCursorTrail />

      {/* Music Toggle */}
      <AudioPlayer />

      {/* Floating Header */}
      <Navbar birthdayData={birthdayData} />

      {/* Main Experience Flow */}
      <main className="relative z-10 space-y-4">
        <IntroSection
          birthdayData={birthdayData}
          onStartJourney={handleStartJourney}
          onOpenGift={() => setIsGiftOpen(true)}
          onOpenWheel={() => setIsWheelOpen(true)}
        />

        {/* Scrolling Ticker Divider */}
        <MarqueeTicker birthdayName={birthdayData.birthdayPerson.name} />

        <ChildhoodSection birthdayData={birthdayData} onSelectPhoto={setSelectedPhoto} />
        <ThenNowSection birthdayData={birthdayData} onSelectPhoto={setSelectedPhoto} />

        <TimelineSection birthdayData={birthdayData} onSelectPhoto={setSelectedPhoto} />

        {/* Scrolling Ticker Divider */}
        <MarqueeTicker birthdayName={birthdayData.birthdayPerson.name} />

        <GallerySection birthdayData={birthdayData} onSelectPhoto={setSelectedPhoto} />

        {/* Compliment Generator */}
        <ComplimentGeneratorSection birthdayData={birthdayData} />

        <CelebrationSection birthdayData={birthdayData} />
        <CakeSection birthdayData={birthdayData} />
        <LetterSection birthdayData={birthdayData} />
        <FinalSurpriseSection birthdayData={birthdayData} onReplay={handleReplay} />
      </main>

      {/* Interactive Pop-up Modals */}
      <SurpriseGiftModal
        birthdayName={birthdayData.birthdayPerson.name}
        isOpen={isGiftOpen}
        onClose={() => setIsGiftOpen(false)}
      />

      <SpinWheelModal
        birthdayName={birthdayData.birthdayPerson.name}
        isOpen={isWheelOpen}
        onClose={() => setIsWheelOpen(false)}
      />

      {/* Click-to-Expand Photo Lightbox */}
      <LightboxModal item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center text-xs text-slate-400 border-t border-slate-900 bg-[#060210]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-medium">
          <p>© {new Date().getFullYear()} • Crafted with ❤️ for {birthdayData.birthdayPerson.name}'s Birthday</p>
          <p className="text-pink-400 font-semibold">
            Edit content in <code className="text-cyan-400 font-mono">src/data/birthdayData.js</code>
          </p>
        </div>
      </footer>
    </div>
  );
}
