import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleField from "@/components/ParticleField";
import { characters } from "@/data/characters";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden scanline">
      <ParticleField color="#e63946" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-20 h-px bg-glow-blue/40" />
          <span className="text-mono text-xs text-glow-blue/60 tracking-[0.3em]">SENTINEL SQUAD ™ MERCH CO.</span>
          <div className="w-20 h-px bg-glow-blue/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-wider text-foreground mb-2 leading-none">
            <span className="text-primary glow-text-red">S</span>ENTINEL <span className="text-secondary glow-text-blue">S</span>QUAD
          </h1>
        </motion.div>

        <motion.p
          className="text-base md:text-xl font-display tracking-[0.3em] text-muted-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          EARTH'S MIGHTIEST MARGINS
        </motion.p>

        <motion.p
          className="text-sm text-foreground/60 italic max-w-md mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Six heroes. Thirty very real, very legal products. One suspiciously enthusiastic AI concierge.
        </motion.p>

        {/* Animated logo strip */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, staggerChildren: 0.1 }}
        >
          {characters.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => navigate(`/character/${c.id}`)}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08 }}
              whileHover={{ scale: 1.15, y: -6 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Shop ${c.name}`}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{ backgroundColor: c.color }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              />
              <motion.img
                src={c.logo}
                alt={`${c.name} logo`}
                width={64}
                height={64}
                className="relative w-14 h-14 md:w-16 md:h-16 object-contain"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        <motion.button
          onClick={() => navigate("/characters")}
          className="group relative px-10 py-4 font-display font-bold text-sm tracking-[0.3em] uppercase border-2 border-primary text-primary hover:text-primary-foreground transition-colors duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Shop the Squad</span>
          <motion.div
            className="absolute inset-0 bg-primary"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <motion.div
          className="absolute bottom-8 flex items-center gap-3 text-mono text-xs text-muted-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span>STORE ONLINE</span>
          <span>•</span>
          <span>{characters.length} HEROES • 30 PRODUCTS</span>
        </motion.div>
      </div>
    </div>
  );
}
