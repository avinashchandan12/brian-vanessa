import { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        {/* Audio src to be provided by the couple */}
      </audio>
      <button
        onClick={toggle}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-forest border-[1.5px] border-gold flex items-center justify-center text-gold font-display text-lg transition-transform hover:scale-105"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing && (
          <span
            className="absolute inset-0 rounded-full border-2 border-gold"
            style={{
              animation: 'music-pulse 2s infinite',
            }}
          />
        )}
        <span className="relative z-10">{playing ? '⏸' : '▶'}</span>
      </button>
    </>
  );
};

export default MusicPlayer;
