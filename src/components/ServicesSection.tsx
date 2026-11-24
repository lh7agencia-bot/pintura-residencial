import { Check } from 'lucide-react';
import { SERVICES } from '../data/business';

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-[#0B3D91] mb-2">
            Especialidades
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4"
            style={{ textWrap: 'balance' }}
          >
            Pintura técnica do preparo à última demão
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Cada superfície recebe o tratamento adequado para resistir ao tempo e valorizar seu imóvel residencial ou comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-150 hover:border-[#1D9BF0]"
            >
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-lg font-bold text-[#0E7AC4] tabular-nums">
                    {service.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-950 tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2.5 pt-5 border-t border-slate-100">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#0B3D91] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
