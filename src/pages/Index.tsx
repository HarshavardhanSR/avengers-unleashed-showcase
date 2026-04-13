import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleField from "@/components/ParticleField";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden scanline">
      <ParticleField color="#e63946" />

      {/* Hero gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Top HUD line */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-20 h-px bg-glow-blue/40" />
          <span className="text-mono text-xs text-glow-blue/60 tracking-[0.3em]">AVENGERS INITIATIVE</span>
          <div className="w-20 h-px bg-glow-blue/40" />
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-wider text-foreground mb-2">
            <span className="text-primary glow-text-red">A</span>VENGERS
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl font-display tracking-[0.4em] text-muted-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          EARTH'S MIGHTIEST HEROES
        </motion.p>

        <motion.div
          className="w-40 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* CTA */}
        <motion.button
          onClick={() => navigate("/characters")}
          className="group relative px-10 py-4 font-display font-bold text-sm tracking-[0.3em] uppercase border-2 border-primary text-primary hover:text-primary-foreground transition-colors duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Enter the Universe</span>
          <motion.div
            className="absolute inset-0 bg-primary"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Bottom decorative elements */}
        <motion.div
          className="absolute bottom-8 flex items-center gap-3 text-mono text-xs text-muted-foreground/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span>SYSTEM ONLINE</span>
          <span>•</span>
          <span>6 HEROES DETECTED</span>
        </motion.div>
      </div>
    </div>
  );
}
