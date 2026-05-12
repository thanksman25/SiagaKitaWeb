import { ref, computed } from 'vue'
import en from '../i18n/en.js'
import id from '../i18n/id.js'

const translations = { en, id }

// Singleton reactive state
const lang = ref(localStorage.getItem('siagakita_lang') || 'en')

const toggleLang = () => {
  lang.value = lang.value === 'en' ? 'id' : 'en'
  localStorage.setItem('siagakita_lang', lang.value)
}

const t = (key) => {
  const keys = key.split('.')
  let result = translations[lang.value]
  for (const k of keys) {
    result = result?.[k]
  }
  return result ?? key
}

export function useLang() {
  return { lang, toggleLang, t }
}
