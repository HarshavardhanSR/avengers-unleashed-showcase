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
      </div>
    </div>
  );
}
