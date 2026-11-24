import { BUSINESS_INFO } from '../data/business';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Informe seu nome completo (mínimo 2 caracteres).';
  }

  if (!trimmedEmail) {
    errors.email = 'Informe um endereço de e-mail.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Informe um e-mail válido (ex.: nome@dominio.com).';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Descreva brevemente o serviço desejado (mínimo 10 caracteres).';
  }

  return errors;
}

export function hasContactErrors(errors: ContactFormErrors): boolean {
  return Boolean(errors.name || errors.email || errors.message);
}

export function buildWhatsAppUrl(values: ContactFormValues): string {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  const composed = [
    `Olá! Meu nome é ${name}.`,
    `E-mail para retorno: ${email}`,
    '',
    'Solicitação de orçamento:',
    message,
  ].join('\n');

  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(composed)}`;
}

export function buildMailtoUrl(values: ContactFormValues): string {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  const subject = `Orçamento de Pintura - ${name}`;
  const body = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    '',
    'Mensagem:',
    message,
    '',
    `Enviado pelo site de ${BUSINESS_INFO.name}`,
  ].join('\n');

  return `mailto:${BUSINESS_INFO.emailRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getNextLightboxIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex + 1) % total;
}

export function getPrevLightboxIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex - 1 + total) % total;
}
