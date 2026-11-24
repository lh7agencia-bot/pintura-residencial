import { FormEvent, useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  ContactFormErrors,
  ContactFormValues,
  hasContactErrors,
  validateContactForm,
} from '../utils/contact';

type DeliveryChannel = 'whatsapp' | 'email';

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [channel, setChannel] = useState<DeliveryChannel>('whatsapp');
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState<{
    values: ContactFormValues;
    channel: DeliveryChannel;
    actionUrl: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (hasContactErrors(validationErrors)) {
      return;
    }

    const actionUrl =
      channel === 'whatsapp' ? buildWhatsAppUrl(values) : buildMailtoUrl(values);

    setSubmitted({
      values: {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      },
      channel,
      actionUrl,
    });
  };

  const handleReset = () => {
    setSubmitted(null);
    setValues({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contato" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#0B3D91] mb-2">
                Contato e Localização
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-4"
                style={{ textWrap: 'balance' }}
              >
                Solicite seu orçamento sem compromisso
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Atendemos obras residenciais e prediais em Rio Grande - RS. Envie os detalhes do seu projeto para agilizar a avaliação.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#0B3D91] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Endereço</p>
                  <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#0B3D91] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Telefone e WhatsApp</p>
                  <a
                    href={BUSINESS_INFO.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-semibold text-[#0B3D91] hover:text-[#072B68] underline underline-offset-4 mt-0.5 tabular-nums"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
              {submitted ? (
                <div className="space-y-6" role="status" aria-live="polite">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0B3D91] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-950">
                        Solicitação pronta para envio
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Confira os dados preenchidos e clique no botão abaixo para concluir o atendimento via{' '}
                        {submitted.channel === 'whatsapp' ? 'WhatsApp' : 'E-mail'}.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 space-y-1.5">
                    <p>
                      <span className="font-semibold text-slate-900">Nome:</span> {submitted.values.name}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">E-mail:</span> {submitted.values.email}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Mensagem:</span> {submitted.values.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={submitted.actionUrl}
                      target={submitted.channel === 'whatsapp' ? '_blank' : undefined}
                      rel={submitted.channel === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0B3D91] hover:bg-[#072B68] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                    >
                      {submitted.channel === 'whatsapp' ? (
                        <>
                          <MessageCircle className="w-4 h-4 text-[#1D9BF0]" aria-hidden="true" />
                          Abrir no WhatsApp
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 text-[#1D9BF0]" aria-hidden="true" />
                          Enviar no E-mail
                        </>
                      )}
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <span className="block text-sm font-semibold text-slate-900 mb-2">
                      Como prefere enviar?
                    </span>
                    <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setChannel('whatsapp')}
                        aria-pressed={channel === 'whatsapp'}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                          channel === 'whatsapp'
                            ? 'bg-white text-[#0B3D91] shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setChannel('email')}
                        aria-pressed={channel === 'email'}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                          channel === 'email'
                            ? 'bg-white text-[#0B3D91] shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        E-mail
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, name: event.target.value }));
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      placeholder="Seu nome completo"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B3D91] focus:outline-2 focus:outline-[#1D9BF0]/40"
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, email: event.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      placeholder="seuemail@exemplo.com"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B3D91] focus:outline-2 focus:outline-[#1D9BF0]/40"
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(event) => {
                        setValues((prev) => ({ ...prev, message: event.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Conte se é pintura residencial ou predial, bairro e metragem aproximada..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0B3D91] focus:outline-2 focus:outline-[#1D9BF0]/40 resize-y"
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B3D91] hover:bg-[#072B68] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    {channel === 'whatsapp' ? 'Preparar envio via WhatsApp' : 'Preparar envio via E-mail'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
