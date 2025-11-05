// 根据语言代码动态导入对应的数据
import zhHans from './zh-Hans.json'
import zhHant from './zh-Hant.json'
import en from './en.json'

const dataMap = {
    'zh-Hans': zhHans,
    'zh-Hant': zhHant,
    en: en,
}

export const getPetsData = (locale) => {
    // return dataMap[locale] || dataMap['zh-Hans']
    return dataMap['zh-Hans']
}
