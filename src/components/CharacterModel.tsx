import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CharacterModel({ src, color, alt }: { src: string; color: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [10, -10]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-10, 10]), { stiffness: 120, damping: 12 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center"
      style={{ perspective: 1000 }}
    >
      {/* Glow halo */}
      <motion.div
        className="absolute w-3/4 h-3/4 rounded-full blur-3xl"
        style={{ backgroundColor: color, opacity: 0.25 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Rotating ring */}
      <motion.div
        className="absolute w-full h-full rounded-full border opacity-20"
        style={{ borderColor: color }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src={src}
        alt={alt}
        width={768}
        height={1024}
        loading="eager"
        className="relative max-h-full max-w-full object-contain drop-shadow-2xl"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
