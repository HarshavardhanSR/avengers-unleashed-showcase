import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { characters } from "@/data/characters";
import CharacterCard from "@/components/CharacterCard";
import ParticleField from "@/components/ParticleField";
import { ArrowLeft } from "lucide-react";

export default function Characters() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen scanline">
      <ParticleField color="#4488ff" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-wider">
              SELECT <span className="text-primary glow-text-red">HERO</span>
            </h1>
            <p className="text-mono text-xs text-muted-foreground tracking-widest mt-1">
              CHOOSE YOUR AVENGER • {characters.length} AVAILABLE
            </p>
          </div>
        </motion.div>

        {/* Character Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((char, i) => (
            <CharacterCard key={char.id} character={char} index={i} />
          ))}
        </div>

        {/* Relationship graph link */}
        <motion.div
          className="max-w-6xl mx-auto mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => navigate("/relationships")}
            className="px-8 py-3 font-display font-bold text-sm tracking-[0.3em] uppercase border-2 border-secondary text-secondary hover:bg-secondary/10 transition-all"
            style={{ boxShadow: "0 0 20px hsl(220 80% 55% / 0.2)" }}
          >
            VIEW NETWORK MAP
          </button>
        </motion.div>
      </div>
    </div>
  );
}
