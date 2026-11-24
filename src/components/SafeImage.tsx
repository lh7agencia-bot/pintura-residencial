import { useState } from 'react';
import { PaintRoller } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Pinturas Régis Gross',
  loading = 'eager',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B3D91] to-[#072B68] text-white p-6 text-center ${className}`}
      >
        <PaintRoller className="w-10 h-10 text-[#1D9BF0] mb-3" aria-hidden="true" />
        <span className="font-display font-semibold text-base tracking-tight">{fallbackTitle}</span>
        <span className="text-xs text-slate-200 mt-1">Rio Grande - RS</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
