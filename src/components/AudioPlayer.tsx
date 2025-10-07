import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  isMuted: boolean;
}

const AudioPlayer = ({ isMuted }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      // Try to play audio
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented, user will need to interact first
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      {/* Using a placeholder ambient music URL - in production, replace with actual music file */}
      <source src="https://www.bensound.com/bensound-music/bensound-tenderness.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
