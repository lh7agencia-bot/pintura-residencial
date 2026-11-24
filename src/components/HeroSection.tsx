import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_PHOTOS } from '../data/business';
import { SafeImage } from './SafeImage';

export function HeroSection() {
  const heroPhoto = GALLERY_PHOTOS[0];

  return (
    <section id="inicio" className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#0B3D91] tracking-tight mb-3">
              {BUSINESS_INFO.name}
            </p>

            <h1
              className="font-display font-extrabold text-slate-950 tracking-tight leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)', textWrap: 'balance' }}
            >
              {BUSINESS_INFO.slogan}.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Pintura predial e residencial com preparação técnica, acabamento limpo e materiais resistentes ao clima de Rio Grande - RS. Do preparo da parede à entrega sem respingos.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0B3D91] hover:bg-[#072B68] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                Orçamento pelo WhatsApp
                <ArrowRight className="w-4 h-4 text-[#1D9BF0]" aria-hidden="true" />
              </a>

              <a
                href="#galeria"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm sm:text-base font-semibold text-[#0B3D91] bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                Ver fotos de obras
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0B3D91] shrink-0" aria-hidden="true" />
                <span>Bairro Camping, {BUSINESS_INFO.cityState}</span>
              </div>
              <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0B3D91] shrink-0" aria-hidden="true" />
                <a
                  href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-800 hover:text-[#0B3D91] tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[280px] sm:min-h-[360px] lg:min-h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <SafeImage
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                fallbackTitle={BUSINESS_INFO.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent p-5 sm:p-6">
                <p className="text-xs font-medium text-sky-300 mb-1">
                  Execução Profissional
                </p>
                <p className="text-sm sm:text-base font-medium text-white">
                  {heroPhoto.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
