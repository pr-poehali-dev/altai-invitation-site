interface OrnamentProps {
  className?: string;
}

export const AltaiKnot = ({ className }: OrnamentProps) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M32 8 L40 16 L32 24 L24 16 Z" />
    <path d="M32 40 L40 48 L32 56 L24 48 Z" />
    <path d="M8 32 L16 40 L24 32 L16 24 Z" />
    <path d="M40 32 L48 40 L56 32 L48 24 Z" />
    <path d="M32 24 L32 40 M24 32 L40 32" />
    <path d="M22 22 L26 26 M42 22 L38 26 M22 42 L26 38 M42 42 L38 38" />
  </svg>
);

export const Divider = ({ className }: OrnamentProps) => (
  <div className={`flex items-center justify-center gap-3 ${className || ''}`}>
    <span className="h-px w-12 ornament-line opacity-70" />
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4 L16 12 L12 20 L8 12 Z" />
    </svg>
    <span className="h-px w-12 ornament-line opacity-70" />
  </div>
);

export const CornerVine = ({ className }: OrnamentProps) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 8 L8 32 M8 8 L32 8" />
    <path d="M8 18 Q18 18 18 28 Q18 18 8 18" />
    <path d="M18 8 Q18 18 28 18 Q18 18 18 8" />
    <circle cx="22" cy="22" r="1.5" fill="currentColor" />
  </svg>
);

export default AltaiKnot;
