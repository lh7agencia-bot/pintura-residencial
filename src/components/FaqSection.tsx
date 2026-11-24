import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/business';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="text-sm font-semibold text-[#0B3D91] mb-2">
            Dúvidas Frequentes
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-3"
            style={{ textWrap: 'balance' }}
          >
            Perguntas sobre prazos, tintas e orçamento
          </h2>
          <p className="text-base text-slate-600">
            Respostas diretas sobre como organizamos cada etapa da pintura.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `panel-${item.id}`;
            const buttonId = `button-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left font-display text-base sm:text-lg font-semibold text-slate-950 hover:text-[#0B3D91] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0B3D91] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
