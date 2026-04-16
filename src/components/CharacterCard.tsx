import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Character } from "@/data/characters";

export default function CharacterCard({ character, index }: { character: Character; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ scale: 1.04, y: -8 }}
      onClick={() => navigate(`/character/${character.id}`)}
      className="relative cursor-pointer group"
    >
      <div
        className="hud-panel p-5 h-full transition-all duration-300 flex flex-col"
        style={{
          boxShadow: `0 0 20px ${character.color}25, inset 0 0 20px ${character.color}10`,
        }}
      >
        {/* Animated logo */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-50"
            style={{ backgroundColor: character.color }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={character.logo}
            alt={`${character.name} logo`}
            width={96}
            height={96}
            loading="lazy"
            className="relative w-24 h-24 object-contain drop-shadow-[0_0_10px_currentColor]"
            style={{ color: character.color }}
            animate={{ rotate: [0, 3, -3, 0], y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 0 }}
          />
        </div>

        {/* Animated full body image preview */}
        <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-sm border" style={{ borderColor: `${character.color}40` }}>
          <motion.img
            src={character.hero}
            alt={`${character.name} full body`}
            loading="lazy"
            width={300}
            height={400}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: [1.05, 1.1, 1.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.18 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(180deg, transparent 50%, ${character.color}30 100%)`,
            }}
          />
        </div>

        <h3
          className="text-lg font-display font-bold text-center mb-1 transition-all"
          style={{ color: character.color }}
        >
          {character.name.toUpperCase()}
        </h3>
        <p className="text-muted-foreground text-center text-xs mb-2 font-mono">
          {character.realName}
        </p>
        <p className="text-foreground/60 text-center text-xs italic leading-relaxed mb-3">
          "{character.tagline}"
        </p>

        <div
          className="mt-auto pt-3 text-center text-mono text-[10px] tracking-widest border-t"
          style={{ borderColor: `${character.color}30`, color: character.color }}
        >
          SHOP MERCH →
        </div>
      </div>
    </motion.div>
  );
}
