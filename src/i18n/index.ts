import en from './en.json';
import fr from './fr.json';
import pt from './pt.json';
import it from './it.json';
import es from './es.json';
import ar from './ar.json';

export type Lang = 'en' | 'fr' | 'pt' | 'it' | 'es' | 'ar';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, fr, pt, it, es, ar };

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

export const supportedLangs: Lang[] = ['en', 'fr', 'pt', 'it', 'es', 'ar'];

export const langLabels: Record<Lang, string> = {
  en: 'EN',
  fr: 'FR',
  pt: 'PT',
  it: 'IT',
  es: 'ES',
  ar: 'AR',
};

export const langFlags: Record<Lang, string> = {
  en: '\u{1F1EC}\u{1F1E7}',
  fr: '\u{1F1EB}\u{1F1F7}',
  pt: '\u{1F1F5}\u{1F1F9}',
  it: '\u{1F1EE}\u{1F1F9}',
  es: '\u{1F1EA}\u{1F1F8}',
  ar: '\u{1F1F8}\u{1F1E6}',
};
