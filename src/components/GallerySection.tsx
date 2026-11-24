import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/business';
import { getNextLightboxIndex, getPrevLightboxIndex } from '../utils/contact';
import { SafeImage } from './SafeImage';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalPhotos = GALLERY_PHOTOS.length;
  const activePhoto = activeIndex !== null ? GALLERY_PHOTOS[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : getNextLightboxIndex(prev, totalPhotos)));
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev === null ? null : getPrevLightboxIndex(prev, totalPhotos)));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, totalPhotos]);

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0B3D91] mb-2">
              Portfólio Real
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Galeria de obras e acabamentos
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            Clique em qualquer foto para ampliar em tela cheia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar foto ${index + 1}: ${photo.title}`}
              className="group relative text-left rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
            >
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                fallbackTitle={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-150" />
              <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/90 text-[#0B3D91] flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150">
                <Expand className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="block text-xs text-slate-200 mb-0.5">{photo.category}</span>
                <span className="block text-sm font-semibold text-white leading-snug">
                  {photo.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada: ${activePhoto.title}`}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-xl border border-slate-700 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/80">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{activePhoto.title}</p>
                <p className="text-xs text-slate-300 tabular-nums">
                  {activeIndex + 1} / {totalPhotos} · {activePhoto.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Fechar galeria"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-[#1D9BF0]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative bg-slate-950 flex items-center justify-center aspect-[16/10] max-h-[75vh] w-full">
              <SafeImage
                src={activePhoto.src}
                alt={activePhoto.alt}
                fallbackTitle={activePhoto.title}
                className="w-full h-full object-contain"
              />

              <button
                type="button"
                onClick={() => setActiveIndex(getPrevLightboxIndex(activeIndex, totalPhotos))}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-slate-900/85 hover:bg-[#0B3D91] text-white border border-slate-700 flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#1D9BF0]"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex(getNextLightboxIndex(activeIndex, totalPhotos))}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg bg-slate-900/85 hover:bg-[#0B3D91] text-white border border-slate-700 flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-[#1D9BF0]"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
