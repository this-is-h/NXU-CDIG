<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiThemeLightDark, mdiTranslate } from '@mdi/js'
import hImg from '@/assets/img/h.png'

const { t } = useI18n()
const activeNames = ref('')

// 使用计算属性以支持语言切换时动态更新
const themeColumns = computed(() => [
    { text: t('theme.light'), value: 'light' },
    { text: t('theme.dark'), value: 'dark' },
    { text: t('theme.system'), value: 'system' },
])

// 从 localStorage 读取当前主题设置
const getInitialThemeValue = () => {
    const savedMode = localStorage.getItem('themeMode') || 'system'
    const themeTextMap = {
        light: 'theme.light',
        dark: 'theme.dark',
        system: 'theme.system',
    }
    return themeTextMap[savedMode] || 'theme.system'
}

const themeValueKey = ref(getInitialThemeValue())
const themeValue = computed(() => t(themeValueKey.value))
const themePicker = ref(false)

// 使用计算属性根据 themeValue 获取对应的 value
const themePickerValue = computed(() => {
    const savedMode = localStorage.getItem('themeMode') || 'system'
    return [savedMode]
})

const themeOnConfirm = ({ selectedOptions }) => {
    themePicker.value = false
    const themeMode = selectedOptions[0].value
    const themeTextMap = {
        light: 'theme.light',
        dark: 'theme.dark',
        system: 'theme.system',
    }
    themeValueKey.value = themeTextMap[themeMode]

    // 通过自定义事件更新 App.vue 的主题
    localStorage.setItem('themeMode', themeMode)

    // 通过自定义事件分发主题变更
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { mode: themeMode } }))
}
const languageColumns = [
    { text: '简体中文', value: 'zh-Hans' },
    { text: '繁體中文', value: 'zh-Hant' },
    { text: 'English', value: 'en' },
]

// 从 localStorage 读取当前语言设置
const getInitialLanguageValue = () => {
    const savedLocale = localStorage.getItem('locale') || 'zh-Hans'
    const item = languageColumns.find((col) => col.value === savedLocale)
    return item ? item.text : '简体中文'
}

const languageValue = ref(getInitialLanguageValue())
const languagePicker = ref(false)

// 使用计算属性根据 languageValue 获取对应的 value
const languagePickerValue = computed(() => {
    const item = languageColumns.find((col) => col.text === languageValue.value)
    return item ? [item.value] : ['zh-Hans']
})

const languageOnConfirm = ({ selectedOptions }) => {
    languagePicker.value = false
    languageValue.value = selectedOptions[0].text

    // 保存语言设置并通知 App.vue
    const localeCode = selectedOptions[0].value
    localStorage.setItem('locale', localeCode)

    // 通过自定义事件分发语言变更
    window.dispatchEvent(new CustomEvent('localeChange', { detail: { locale: localeCode } }))
}
</script>

<template>
    <div class="about">
        <div
            style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 1em;
            "
        >
            <van-image round width="30%" :src="hImg" />
            NXU - CDIG
        </div>
        <van-cell-group inset>
            <van-collapse v-model="activeNames" accordion>
                <van-collapse-item class="collapse-settings" :title="$t('settings.title')" name="1">
                    <van-cell-group inset>
                        <van-field
                            v-model="themeValue"
                            is-link
                            readonly
                            @click="themePicker = true"
                        >
                            <template #label>
                                <div style="display: flex; align-items: center; font-weight: bold">
                                    <svg-icon
                                        type="mdi"
                                        :path="mdiThemeLightDark"
                                        style="margin-right: 0.3em"
                                    ></svg-icon>
                                    {{ $t('settings.theme') }}
                                </div>
                            </template>
                        </van-field>
                        <van-field
                            v-model="languageValue"
                            is-link
                            readonly
                            @click="languagePicker = true"
                        >
                            <template #label>
                                <div style="display: flex; align-items: center; font-weight: bold">
                                    <svg-icon
                                        type="mdi"
                                        :path="mdiTranslate"
                                        style="margin-right: 0.3em"
                                    ></svg-icon>
                                    {{ $t('settings.language') }}
                                </div>
                            </template>
                        </van-field>
                    </van-cell-group>
                    <van-popup v-model:show="themePicker" destroy-on-close round position="bottom">
                        <van-picker
                            :model-value="themePickerValue"
                            :columns="themeColumns"
                            @cancel="themePicker = false"
                            @confirm="themeOnConfirm"
                        />
                    </van-popup>
                    <van-popup
                        v-model:show="languagePicker"
                        destroy-on-close
                        round
                        position="bottom"
                    >
                        <van-picker
                            :model-value="languagePickerValue"
                            :columns="languageColumns"
                            @cancel="languagePicker = false"
                            @confirm="languageOnConfirm"
                        />
                    </van-popup>
                </van-collapse-item>
                <!-- <van-collapse-item title="标题2" name="2">

                </van-collapse-item>
                <van-collapse-item title="标题3" name="3">

                </van-collapse-item> -->
            </van-collapse>
        </van-cell-group>
        <van-cell-group inset style="margin-top: 0.5em">
            <van-cell :title="$t('about.aboutUs')" is-link to="/aboutUs" />
            <van-cell :title="$t('about.faq')" is-link to="/qa" />
            <van-cell :title="$t('about.thanks')" is-link to="/thanks" />
        </van-cell-group>
    </div>
</template>

<style scoped>
.about {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

:deep(.collapse-settings .van-collapse-item__content) {
    padding: 0;
}

:deep(.collapse-settings .van-cell__title.van-field__label) {
    width: 100px;
}
</style>
