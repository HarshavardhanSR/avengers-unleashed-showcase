import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { characters } from "@/data/characters";

interface Node {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
  type: "friend" | "enemy" | "family";
}

export default function Relationships() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "friend" | "enemy" | "family">("all");

  const nodes: Node[] = useMemo(() => {
    const cx = 400, cy = 300, r = 200;
    return characters.map((c, i) => {
      const angle = (i / characters.length) * Math.PI * 2 - Math.PI / 2;
      return {
        id: c.id,
        name: c.name,
        color: c.color,
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      };
    });
  }, []);

  const edges: Edge[] = useMemo(() => {
    const edgeSet = new Set<string>();
    const result: Edge[] = [];
    const charIds = new Set(characters.map((c) => c.id));
    const nameToId: Record<string, string> = {};
    characters.forEach((c) => {
      nameToId[c.name.toLowerCase()] = c.id;
      nameToId[c.realName.toLowerCase()] = c.id;
    });

    const findId = (name: string) => {
      const lower = name.toLowerCase();
      for (const [key, id] of Object.entries(nameToId)) {
        if (lower.includes(key) || key.includes(lower)) return id;
      }
      return null;
    };

    characters.forEach((c) => {
      c.friends.forEach((f) => {
        const tid = findId(f);
        if (tid && charIds.has(tid) && tid !== c.id) {
          const key = [c.id, tid].sort().join("-");
          if (!edgeSet.has(key)) {
            edgeSet.add(key);
            result.push({ from: c.id, to: tid, type: "friend" });
          }
        }
      });
      c.enemies.forEach((e) => {
        const tid = findId(e);
        if (tid && charIds.has(tid) && tid !== c.id) {
          const key = [c.id, tid].sort().join("-") + "-e";
          if (!edgeSet.has(key)) {
            edgeSet.add(key);
            result.push({ from: c.id, to: tid, type: "enemy" });
          }
        }
      });
    });
    return result;
  }, []);

  const filteredEdges = filter === "all" ? edges : edges.filter((e) => e.type === filter);

  const getNode = useCallback((id: string) => nodes.find((n) => n.id === id)!, [nodes]);

  const isConnected = (nodeId: string) => {
    if (!selected) return true;
    if (nodeId === selected) return true;
    return filteredEdges.some((e) => (e.from === selected && e.to === nodeId) || (e.to === selected && e.from === nodeId));
  };

  const edgeColor = (type: string) => {
    switch (type) {
      case "friend": return "hsl(220, 80%, 55%)";
      case "enemy": return "hsl(0, 85%, 55%)";
      case "family": return "hsl(45, 90%, 55%)";
      default: return "hsl(220, 10%, 30%)";
    }
  };

  return (
    <div className="relative min-h-screen scanline">
      <ParticleField color="#4488ff" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 min-h-screen px-4 py-8 max-w-5xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button onClick={() => navigate("/characters")} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-wider">
              <span className="text-secondary glow-text-blue">NETWORK</span> MAP
            </h1>
            <p className="text-mono text-xs text-muted-foreground tracking-widest mt-1">
              AVENGERS RELATIONSHIP GRAPH
            </p>
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex gap-3 mb-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {(["all", "friend", "enemy"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 text-xs font-mono tracking-widest uppercase border rounded-sm transition-all ${
                filter === f
                  ? "border-secondary bg-secondary/20 text-secondary"
                  : "border-border text-muted-foreground hover:border-secondary/50"
              }`}
            >
              {f === "all" ? "ALL" : f === "friend" ? "ALLIES" : "ENEMIES"}
            </button>
          ))}
        </motion.div>

        {/* Graph */}
        <motion.div
          className="hud-panel p-4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <svg viewBox="0 0 800 600" className="w-full h-auto max-h-[60vh]">
            {/* Edges */}
            {filteredEdges.map((edge, i) => {
              const from = getNode(edge.from);
              const to = getNode(edge.to);
              const highlight = !selected || edge.from === selected || edge.to === selected;
              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={edgeColor(edge.type)}
                  strokeWidth={highlight ? 2 : 0.5}
                  opacity={highlight ? 0.7 : 0.15}
                  strokeDasharray={edge.type === "enemy" ? "6,4" : undefined}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const connected = isConnected(node.id);
              return (
                <g
                  key={node.id}
                  onClick={() => setSelected(selected === node.id ? null : node.id)}
                  className="cursor-pointer"
                  opacity={connected ? 1 : 0.25}
                >
                  {/* Glow */}
                  <circle cx={node.x} cy={node.y} r={selected === node.id ? 35 : 28} fill={node.color} opacity={0.15} />
                  {/* Node circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={selected === node.id ? 22 : 18}
                    fill="hsl(240, 15%, 8%)"
                    stroke={node.color}
                    strokeWidth={selected === node.id ? 3 : 2}
                  />
                  {/* Initials */}
                  <text
                    x={node.x}
                    y={node.y + 1}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={node.color}
                    fontSize="11"
                    fontFamily="var(--font-display)"
                    fontWeight="bold"
                  >
                    {node.name.split(" ").map((w) => w[0]).join("")}
                  </text>
                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y + (selected === node.id ? 38 : 32)}
                    textAnchor="middle"
                    fill="hsl(220, 20%, 70%)"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                  >
                    {node.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex gap-6 mt-4 justify-center flex-wrap">
            {[
              { label: "Allies", color: "hsl(220, 80%, 55%)", dash: false },
              { label: "Enemies", color: "hsl(0, 85%, 55%)", dash: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <svg width="24" height="2">
                  <line x1="0" y1="1" x2="24" y2="1" stroke={item.color} strokeWidth="2" strokeDasharray={item.dash ? "4,3" : undefined} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Selected character info */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 hud-panel p-4"
            >
              {(() => {
                const char = characters.find((c) => c.id === selected)!;
                const connections = filteredEdges.filter((e) => e.from === selected || e.to === selected);
                return (
                  <div>
                    <h3 className="font-display text-lg tracking-wider mb-2" style={{ color: char.color }}>
                      {char.name.toUpperCase()}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      <div>
                        <span className="text-secondary">ALLIES:</span>{" "}
                        <span className="text-foreground/70">
                          {connections.filter((e) => e.type === "friend").map((e) => {
                            const otherId = e.from === selected ? e.to : e.from;
                            return characters.find((c) => c.id === otherId)?.name;
                          }).filter(Boolean).join(", ") || "None in roster"}
                        </span>
                      </div>
                      <div>
                        <span className="text-primary">ENEMIES:</span>{" "}
                        <span className="text-foreground/70">
                          {connections.filter((e) => e.type === "enemy").map((e) => {
                            const otherId = e.from === selected ? e.to : e.from;
                            return characters.find((c) => c.id === otherId)?.name;
                          }).filter(Boolean).join(", ") || "None in roster"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/character/${selected}`)}
                      className="mt-3 text-xs font-mono tracking-widest text-accent hover:text-accent/80 transition-colors"
                    >
                      VIEW FULL PROFILE →
                    </button>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Need to import AnimatePresence
import { AnimatePresence } from "framer-motion";
