import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Zap, Users, Heart, Skull } from "lucide-react";
import { characters } from "@/data/characters";
import CharacterModel from "@/components/CharacterModel";
import PowerActivation from "@/components/PowerActivation";
import StatBar from "@/components/StatBar";
import HudFrame from "@/components/HudFrame";
import ParticleField from "@/components/ParticleField";

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((c) => c.id === id);

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground font-mono">HERO NOT FOUND</p>
      </div>
    );
  }

  const section = (icon: React.ReactNode, title: string, delay: number, children: React.ReactNode) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <HudFrame className="hud-panel p-6">
        <div className="flex items-center gap-3 mb-4">
          <span style={{ color: character.color }}>{icon}</span>
          <h3 className="font-display text-sm tracking-widest uppercase text-muted-foreground">{title}</h3>
        </div>
        {children}
      </HudFrame>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen scanline">
      <ParticleField color={character.color} />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 min-h-screen px-4 py-8 max-w-6xl mx-auto">
        {/* Back nav */}
        <motion.button
          onClick={() => navigate("/characters")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-mono text-xs tracking-widest">BACK TO ROSTER</span>
        </motion.button>

        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Model */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CharacterModel color={character.color} />
          </motion.div>

          {/* Right: Info */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-mono text-xs tracking-widest text-muted-foreground mb-2">
              {character.realName.toUpperCase()}
            </p>
            <h1
              className="text-4xl md:text-6xl font-display font-black tracking-wider mb-3"
              style={{ color: character.color }}
            >
              {character.name.toUpperCase()}
            </h1>
            <p className="text-foreground/60 italic text-lg mb-6 font-body">
              "{character.tagline}"
            </p>

            <PowerActivation character={character} />

            {/* Stats */}
            <div className="mt-8 space-y-3">
              {character.stats.map((stat, i) => (
                <StatBar
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  color={character.color}
                  delay={0.5 + i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Info sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {section(
            <Shield className="w-5 h-5" />,
            "Origin",
            0.6,
            <p className="text-foreground/70 leading-relaxed text-sm">{character.origin}</p>
          )}

          {section(
            <Zap className="w-5 h-5" />,
            "Abilities & Powers",
            0.7,
            <div className="flex flex-wrap gap-2">
              {character.abilities.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1 text-xs font-mono border rounded-sm"
                  style={{ borderColor: `${character.color}40`, color: character.color }}
                >
                  {a}
                </span>
              ))}
            </div>
          )}

          {section(
            <Users className="w-5 h-5" />,
            "Friends & Allies",
            0.8,
            <div className="flex flex-wrap gap-2">
              {character.friends.map((f) => (
                <span key={f} className="px-3 py-1 text-xs font-mono bg-secondary/30 text-secondary rounded-sm">
                  {f}
                </span>
              ))}
            </div>
          )}

          {section(
            <Heart className="w-5 h-5" />,
            "Family & Relationships",
            0.9,
            <ul className="space-y-1">
              {character.family.map((f) => (
                <li key={f} className="text-sm text-foreground/70 font-mono">• {f}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Enemies */}
        {section(
          <Skull className="w-5 h-5" />,
          "Enemies",
          1.0,
          <div className="flex flex-wrap gap-2">
            {character.enemies.map((e) => (
              <span key={e} className="px-3 py-1 text-xs font-mono border border-primary/30 text-primary rounded-sm">
                {e}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
