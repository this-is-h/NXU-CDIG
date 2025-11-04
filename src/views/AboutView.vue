<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiThemeLightDark, mdiTranslate } from '@mdi/js'

const activeNames = ref([])

const themeColumns = [
    { text: '浅色', value: 'light' },
    { text: '深色', value: 'dark' },
    { text: '跟随系统', value: 'system' }
]
const themeValue = ref('浅色')
const themePicker = ref(false)
const themePickerValue = ref([])
const themeOnConfirm = ({ selectedValues, selectedOptions }) => {
    themePicker.value = false
    themePickerValue.value = selectedValues
    themeValue.value = selectedOptions[0].text
}
const languageColumns = [
    { text: '简体中文', value: 'zh-Hans' },
    { text: '繁體中文', value: 'zh-Hant' },
    { text: 'English', value: 'en' }
]
const languageValue = ref('浅色')
const languagePicker = ref(false)
const languagePickerValue = ref([])
const languageOnConfirm = ({ selectedValues, selectedOptions }) => {
    languagePicker.value = false
    languagePickerValue.value = selectedValues
    languageValue.value = selectedOptions[0].text
}
</script>

<template>
    <div class="about">
        <van-collapse v-model="activeNames">
            <van-collapse-item class="collapse-settings" title="设置" name="1">
                <van-cell-group inset>
                    <van-field
                        v-model="themeValue"
                        is-link
                        readonly
                        @click="themePicker = true"
                    >
                        <template #label>
                            <div style="display: flex; align-items: center; font-weight: bold;">
                                <svg-icon
                                    type="mdi"
                                    :path="mdiThemeLightDark"
                                    style="margin-right: 0.3em"
                                ></svg-icon>
                                主题
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
                            <div style="display: flex; align-items: center; font-weight: bold;">
                                <svg-icon
                                    type="mdi"
                                    :path="mdiTranslate"
                                    style="margin-right: 0.3em"
                                ></svg-icon>
                                语言
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
                <van-popup v-model:show="languagePicker" destroy-on-close round position="bottom">
                    <van-picker
                        :model-value="languagePickerValue"
                        :columns="languageColumns"
                        @cancel="languagePicker = false"
                        @confirm="languageOnConfirm"
                    />
                </van-popup>
            </van-collapse-item>
            <van-collapse-item title="标题2" name="2">
                技术无非就是那些开发它的人的共同灵魂。
            </van-collapse-item>
            <van-collapse-item title="标题3" name="3">
                在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<style scoped>
.about {
    width: 100%;
    height: 100%;
}

:deep(.collapse-settings .van-collapse-item__content) {
    padding: 0;
}
</style>
