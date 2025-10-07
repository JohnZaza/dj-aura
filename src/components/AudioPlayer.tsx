// import { useEffect, useRef } from "react";

// interface AudioPlayerProps {
//   isMuted: boolean;
// }

// const AudioPlayer = ({ isMuted }: AudioPlayerProps) => {
//   const audioRef = useRef<HTMLAudioElement>(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = 0.25;
//       audioRef.current.muted = true;

//       const attemptPlay = async () => {
//         try {
//           await audioRef.current?.play();
//         } catch {
//           console.log("Autoplay blocked until user interaction.");
//         }
//       };

//       attemptPlay();

//       const unmuteOnClick = () => {
//         audioRef.current!.muted = isMuted;
//         window.removeEventListener("click", unmuteOnClick);
//       };
//       window.addEventListener("click", unmuteOnClick);
//     }
//   }, []);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.muted = isMuted;
//     }
//   }, [isMuted]);

//   return (
//     <audio ref={audioRef} loop preload="auto">
//       <source
//         src="https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
//         type="audio/mpeg"
//       />
//     </audio>
//   );
// };

// export default AudioPlayer;

import { useEffect, useRef } from "react";

interface AudioPlayerProps {
  isMuted: boolean;
}

const AudioPlayer = ({ isMuted }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const handleFirstInteraction = async () => {
      if (!hasStarted.current && audioRef.current) {
        try {
          audioRef.current.volume = 0.25;
          audioRef.current.muted = isMuted;
          await audioRef.current.play();
          hasStarted.current = true;
          window.removeEventListener("click", handleFirstInteraction);
        } catch (err) {
          console.log("User gesture required to start audio:", err);
        }
      }
    };

    // Browser requires a gesture (click/tap) to allow sound
    window.addEventListener("click", handleFirstInteraction);
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, [isMuted]);

  useEffect(() => {
    // Sync mute/unmute immediately after user starts playback
    if (hasStarted.current && audioRef.current) {
      audioRef.current.muted = isMuted;
      if (!isMuted) {
        audioRef.current
          .play()
          .catch(() => console.log("Play failed after unmute"));
      }
    }
  }, [isMuted]);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source
        src="https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
