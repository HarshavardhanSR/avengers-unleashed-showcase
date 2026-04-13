import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { startAmbient, stopAmbient } from "@/lib/audioEngine";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      stopAmbient();
    } else {
      startAmbient();
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent transition-colors"
      style={{ boxShadow: playing ? "0 0 15px hsl(45 90% 55% / 0.3)" : undefined }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={playing ? "Mute ambient audio" : "Play ambient audio"}
    >
      {playing ? (
        <Volume2 className="w-4 h-4 text-accent" />
      ) : (
        <VolumeX className="w-4 h-4 text-muted-foreground" />
      )}
    </motion.button>
  );
}
