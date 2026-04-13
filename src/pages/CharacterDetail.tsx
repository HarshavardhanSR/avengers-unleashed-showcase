import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Shield, Zap, Users, Heart, Skull } from "lucide-react";
import { useRef } from "react";
import { characters } from "@/data/characters";
import CharacterModel from "@/components/CharacterModel";
import PowerActivation from "@/components/PowerActivation";
import StatBar from "@/components/StatBar";
import HudFrame from "@/components/HudFrame";
import ParticleField from "@/components/ParticleField";

function ParallaxSection({
  icon,
  title,
  color,
  index,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  index: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      <HudFrame className="hud-panel p-6">
        <div className="flex items-center gap-3 mb-4">
          <span style={{ color }}>{icon}</span>
          <h3 className="font-display text-sm tracking-widest uppercase text-muted-foreground">{title}</h3>
        </div>
        {children}
      </HudFrame>
    </motion.div>
  );
}

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((c) => c.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground font-mono">HERO NOT FOUND</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen scanline">
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

        {/* Hero section with parallax */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          style={{ y: heroY, scale: heroScale }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CharacterModel color={character.color} />
          </motion.div>

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
        </motion.div>

        {/* Cinematic divider */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${character.color}40, transparent)` }} />
          <span className="text-mono text-[10px] tracking-[0.4em] text-muted-foreground">CLASSIFIED INTEL</span>
          <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, transparent, ${character.color}40, transparent)` }} />
        </motion.div>

        {/* Info sections with parallax scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ParallaxSection icon={<Shield className="w-5 h-5" />} title="Origin" color={character.color} index={0}>
            <p className="text-foreground/70 leading-relaxed text-sm">{character.origin}</p>
          </ParallaxSection>

          <ParallaxSection icon={<Zap className="w-5 h-5" />} title="Abilities & Powers" color={character.color} index={1}>
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
          </ParallaxSection>

          <ParallaxSection icon={<Users className="w-5 h-5" />} title="Friends & Allies" color={character.color} index={2}>
            <div className="flex flex-wrap gap-2">
              {character.friends.map((f) => (
                <span key={f} className="px-3 py-1 text-xs font-mono bg-secondary/30 text-secondary rounded-sm">
                  {f}
                </span>
              ))}
            </div>
          </ParallaxSection>

          <ParallaxSection icon={<Heart className="w-5 h-5" />} title="Family & Relationships" color={character.color} index={3}>
            <ul className="space-y-1">
              {character.family.map((f) => (
                <li key={f} className="text-sm text-foreground/70 font-mono">• {f}</li>
              ))}
            </ul>
          </ParallaxSection>
        </div>

        {/* Enemies with parallax */}
        <ParallaxSection icon={<Skull className="w-5 h-5" />} title="Enemies" color={character.color} index={4}>
          <div className="flex flex-wrap gap-2">
            {character.enemies.map((e) => (
              <span key={e} className="px-3 py-1 text-xs font-mono border border-primary/30 text-primary rounded-sm">
                {e}
              </span>
            ))}
          </div>
        </ParallaxSection>

        {/* Bottom spacer for scroll effect */}
        <div className="h-20" />
      </div>
    </div>
  );
}
