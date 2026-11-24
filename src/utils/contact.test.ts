import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  hasContactErrors,
  buildWhatsAppUrl,
  buildMailtoUrl,
  getNextLightboxIndex,
  getPrevLightboxIndex,
} from './contact';

test('validateContactForm rejects empty and invalid inputs', () => {
  const errors = validateContactForm({ name: 'A', email: 'invalido', message: 'Oi' });
  assert.equal(hasContactErrors(errors), true);
  assert.ok(errors.name);
  assert.ok(errors.email);
  assert.ok(errors.message);
});

test('validateContactForm accepts valid Brazilian contact data', () => {
  const errors = validateContactForm({
    name: 'Carlos Eduardo',
    email: 'carlos@exemplo.com.br',
    message: 'Preciso pintar a fachada de um sobrado no bairro Camping.',
  });
  assert.equal(hasContactErrors(errors), false);
});

test('buildWhatsAppUrl encodes phone and message accurately', () => {
  const url = buildWhatsAppUrl({
    name: 'Ana Paula',
    email: 'ana@teste.com',
    message: 'Orçamento para apartamento de 2 quartos.',
  });
  assert.ok(url.startsWith('https://wa.me/5553991123073?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /Ana Paula/);
  assert.match(decoded, /ana@teste\.com/);
  assert.match(decoded, /apartamento de 2 quartos/);
});

test('buildMailtoUrl produces valid mailto link with subject and body', () => {
  const url = buildMailtoUrl({
    name: 'Marcos Lima',
    email: 'marcos@teste.com',
    message: 'Solicito visita técnica para pintura predial.',
  });
  assert.ok(url.startsWith('mailto:'));
  assert.ok(url.includes('subject='));
  assert.ok(url.includes('body='));
});

test('lightbox circular index helpers wrap around boundaries', () => {
  assert.equal(getNextLightboxIndex(0, 4), 1);
  assert.equal(getNextLightboxIndex(3, 4), 0);
  assert.equal(getPrevLightboxIndex(0, 4), 3);
  assert.equal(getPrevLightboxIndex(2, 4), 1);
});
