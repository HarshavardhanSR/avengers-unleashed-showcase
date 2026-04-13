import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Character } from "@/data/characters";

export default function CharacterCard({ character, index }: { character: Character; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -8 }}
      onClick={() => navigate(`/character/${character.id}`)}
      className="relative cursor-pointer group"
    >
      <div className="hud-panel p-6 h-full transition-all duration-300"
        style={{
          boxShadow: `0 0 20px ${character.color}20, inset 0 0 20px ${character.color}10`,
        }}
      >
        {/* Scan line effect on hover */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-x-0 h-px bg-glow-blue/40 animate-hud-scan" />
        </div>

        {/* Character icon circle */}
        <div
          className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-display font-bold border-2 transition-all duration-300 group-hover:shadow-lg"
          style={{
            borderColor: character.color,
            color: character.color,
            boxShadow: `0 0 15px ${character.color}40`,
          }}
        >
          {character.name.charAt(0)}
        </div>

        <h3
          className="text-xl font-display font-bold text-center mb-1 transition-all"
          style={{ color: character.color }}
        >
          {character.name}
        </h3>
        <p className="text-muted-foreground text-center text-sm mb-3 font-mono">
          {character.realName}
        </p>
        <p className="text-foreground/60 text-center text-xs italic leading-relaxed">
          "{character.tagline}"
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px transition-all duration-500"
          style={{ backgroundColor: character.color }}
        />
      </div>
    </motion.div>
  );
}
