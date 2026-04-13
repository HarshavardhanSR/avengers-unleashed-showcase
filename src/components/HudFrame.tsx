import { ReactNode } from "react";

export default function HudFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-glow-blue" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-glow-blue" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-glow-blue" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-glow-blue" />
      {children}
    </div>
  );
}
