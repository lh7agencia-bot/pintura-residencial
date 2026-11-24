import { BUSINESS_INFO } from '../data/business';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B3D91] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/15">
          <div className="md:col-span-6 space-y-2">
            <p className="font-display text-lg font-bold tracking-tight">
              {BUSINESS_INFO.name}
            </p>
            <p className="text-sm text-sky-200 font-medium">
              {BUSINESS_INFO.slogan}
            </p>
            <p className="text-sm text-slate-200 max-w-md pt-2">
              {BUSINESS_INFO.address}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <p className="text-sm font-semibold text-white">Navegação</p>
            <ul className="space-y-1.5 text-sm text-slate-200">
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galeria de Fotos</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <p className="text-sm font-semibold text-white">Atendimento</p>
            <p className="text-sm text-slate-200 tabular-nums">
              WhatsApp: {BUSINESS_INFO.phoneDisplay}
            </p>
            <a
              href={`${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-sky-200 hover:text-white underline underline-offset-4"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-300">
          <p>© {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.</p>
          <p>{BUSINESS_INFO.cityState}</p>
        </div>
      </div>
    </footer>
  );
}
