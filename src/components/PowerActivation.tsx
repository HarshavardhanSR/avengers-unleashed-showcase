import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Character } from "@/data/characters";

const effectLabels: Record<string, string> = {
  repulsor: "FIRE REPULSOR",
  shield: "THROW SHIELD",
  lightning: "SUMMON LIGHTNING",
  smash: "HULK SMASH",
  strike: "WIDOW'S BITE",
  web: "WEB SLING",
};

export default function PowerActivation({ character }: { character: Character }) {
  const [active, setActive] = useState(false);

  const activate = () => {
    setActive(true);
    setTimeout(() => setActive(false), 1500);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={activate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 font-display font-bold text-sm tracking-widest uppercase border-2 transition-all relative overflow-hidden"
        style={{
          borderColor: character.color,
          color: character.color,
          boxShadow: `0 0 20px ${character.color}30`,
        }}
      >
        <span className="relative z-10">
          {effectLabels[character.powerEffect] || "ACTIVATE POWER"}
        </span>
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: character.color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1, opacity: 0.15 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Flash */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: character.color }}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />

            {/* Expanding ring */}
            <motion.div
              className="absolute w-40 h-40 rounded-full border-4"
              style={{ borderColor: character.color }}
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 8, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Power text */}
            <motion.span
              className="font-display text-4xl md:text-6xl font-black tracking-widest uppercase"
              style={{ color: character.color }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {character.powerEffect === "smash" ? "SMASH!" :
               character.powerEffect === "lightning" ? "⚡ THUNDER ⚡" :
               character.powerEffect === "repulsor" ? "💥 BLAST" :
               character.powerEffect === "shield" ? "🛡️ THROW" :
               character.powerEffect === "web" ? "🕸️ THWIP" :
               "⚡ STRIKE"}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
