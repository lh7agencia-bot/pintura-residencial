import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/business';

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#0B3D91] mb-2">
            Avaliações de Clientes
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Confiança construída em cada obra
          </h2>
          <p className="text-base text-slate-600">
            Relatos de moradores e síndicos atendidos em Rio Grande - RS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label={`${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  “{item.text}”
                </blockquote>
              </div>

              <footer className="pt-4 border-t border-slate-100">
                <p className="font-display text-sm font-bold text-slate-950">{item.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.context}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
