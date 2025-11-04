import { createI18n } from 'vue-i18n'
import zhHans from './locales/zh-Hans.json'
import zhHant from './locales/zh-Hant.json'
import en from './locales/en.json'

// 获取保存的语言设置，默认为简体中文
const getStoredLocale = () => {
    return localStorage.getItem('locale') || 'zh-Hans'
}

const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
    locale: getStoredLocale(),
    fallbackLocale: 'zh-Hans',
    messages: {
        'zh-Hans': zhHans,
        'zh-Hant': zhHant,
        en: en,
    },
})

export default i18n
