import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export function WhatsAppFloat() {
  const url = `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsappText)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar pelo WhatsApp ${BUSINESS_INFO.phoneDisplay}`}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 h-12 px-4 sm:px-5 rounded-full bg-[#0B3D91] hover:bg-[#072B68] text-white border-2 border-[#1D9BF0] shadow-lg transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
    >
      <MessageCircle className="w-5 h-5 text-[#1D9BF0] shrink-0" aria-hidden="true" />
      <span className="text-sm font-semibold whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
