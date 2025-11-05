<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCat, mdiDog } from '@mdi/js'
import { showToast } from 'vant'
import { getPetsData } from '@/data/animals'
import AnimalContent from '@/components/AnimalContent.vue'

const { locale } = useI18n()

// 常量定义
const CAT_IMAGE_URL = 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'

// 响应式数据引用
const petsData = ref(getPetsData(locale.value))

// 响应式状态
const accordionMode = ref(false)
const catCollapse = ref(null)
const dogCollapse = ref(null)
const catTabsAllOpen = ref(false)
const dogTabsAllOpen = ref(false)
const activeTab = ref('cat')
const activeCatType = ref(0)
const activeDogType = ref(0)
const activeCat = ref([])
const activeDog = ref([])

// 计算属性 - 从 petsData 中获取数据
const STATUS_CONFIG = computed(() => petsData.value.STATUS_CONFIG)
const CAT_TYPE_LIST = computed(() => petsData.value.CAT_TYPE_LIST)
const DOG_TYPE_LIST = computed(() => petsData.value.DOG_TYPE_LIST)
const CAT_DATA = computed(() => petsData.value.CAT_DATA)
const DOG_DATA = computed(() => petsData.value.DOG_DATA)

const currentCatData = computed(() => CAT_DATA.value[CAT_TYPE_LIST.value[activeCatType.value]])
const currentDogData = computed(() => DOG_DATA.value[DOG_TYPE_LIST.value[activeDogType.value]])

// 方法
const toggleAllCatTabs = () => {
    catCollapse.value?.toggleAll(!catTabsAllOpen.value)
    catTabsAllOpen.value = !catTabsAllOpen.value
}

const toggleAllDogTabs = () => {
    dogCollapse.value?.toggleAll(!dogTabsAllOpen.value)
    dogTabsAllOpen.value = !dogTabsAllOpen.value
}

// 监听折叠模式变化
watch(accordionMode, () => {
    activeCat.value = accordionMode.value ? '' : []
    activeDog.value = accordionMode.value ? '' : []
    catTabsAllOpen.value = false
    dogTabsAllOpen.value = false
})

// 监听语言变化，重新加载数据
watch(locale, (newLocale) => {
    petsData.value = getPetsData(newLocale)
    // 重置状态
    activeCatType.value = 0
    activeDogType.value = 0
    activeCat.value = accordionMode.value ? '' : []
    activeDog.value = accordionMode.value ? '' : []
})

onMounted(() => {
    showToast('目前暂为示例数据')
})
</script>

<template>
    <van-tabs v-model:active="activeTab">
        <van-tab name="cat">
            <template #title>
                <div class="tab-title">
                    <svg-icon type="mdi" :path="mdiCat" class="tab-icon" />
                    {{ $t('pets.cat') }}
                </div>
            </template>
            <div class="tab-content">
                <div class="control-bar">
                    <span>{{ $t('pets.accordionModeLabel') }}：{{ $t('pets.no') }}</span>
                    <van-switch v-model="accordionMode" size="18px" class="switch-control" />
                    <span>{{ $t('pets.yes') }}</span>
                    <van-button
                        v-if="!accordionMode"
                        plain
                        size="mini"
                        type="primary"
                        @click="toggleAllCatTabs"
                        class="toggle-button"
                    >
                        {{ catTabsAllOpen ? $t('pets.closeAll') : $t('pets.openAll') }}
                    </van-button>
                </div>
                <div class="content-wrapper">
                    <van-sidebar v-model="activeCatType" class="sidebar">
                        <van-sidebar-item
                            v-for="(item, index) in CAT_TYPE_LIST"
                            :key="index"
                            :title="item"
                        />
                    </van-sidebar>
                    <div class="main-content">
                        <van-collapse
                            v-model="activeCat"
                            :accordion="accordionMode"
                            ref="catCollapse"
                        >
                            <van-collapse-item
                                v-for="(item, index) in currentCatData"
                                :key="index"
                                :name="index"
                            >
                                <template #title>
                                    <div class="item-title">
                                        <van-image
                                            round
                                            width="3em"
                                            height="3em"
                                            :src="CAT_IMAGE_URL"
                                            class="item-avatar"
                                        >
                                            <template #loading>
                                                <van-loading type="spinner" size="20" />
                                            </template>
                                        </van-image>
                                        <span class="item-name">{{ item.name }}</span>
                                        <van-tag v-bind="STATUS_CONFIG[item.status]">
                                            {{ item.status }}
                                        </van-tag>
                                    </div>
                                </template>
                                <AnimalContent :data="item" />
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab name="dog">
            <template #title>
                <div class="tab-title">
                    <svg-icon type="mdi" :path="mdiDog" class="tab-icon" />
                    {{ $t('pets.dog') }}
                </div>
            </template>
            <div class="tab-content">
                <div class="control-bar">
                    <span>{{ $t('pets.accordionModeLabel') }}：{{ $t('pets.no') }}</span>
                    <van-switch v-model="accordionMode" size="18px" class="switch-control" />
                    <span>{{ $t('pets.yes') }}</span>
                    <van-button
                        v-if="!accordionMode"
                        plain
                        size="mini"
                        type="primary"
                        @click="toggleAllDogTabs"
                        class="toggle-button"
                    >
                        {{ dogTabsAllOpen ? $t('pets.closeAll') : $t('pets.openAll') }}
                    </van-button>
                </div>
                <div class="content-wrapper">
                    <van-sidebar v-model="activeDogType" class="sidebar">
                        <van-sidebar-item
                            v-for="(item, index) in DOG_TYPE_LIST"
                            :key="index"
                            :title="item"
                        />
                    </van-sidebar>
                    <div class="main-content">
                        <van-collapse
                            v-model="activeDog"
                            :accordion="accordionMode"
                            ref="dogCollapse"
                        >
                            <van-collapse-item
                                v-for="(item, index) in currentDogData"
                                :key="index"
                                :name="index"
                            >
                                <template #title>
                                    <div class="item-title">
                                        <span class="item-name">{{ item.name }}</span>
                                        <van-tag v-bind="STATUS_CONFIG[item.status]">
                                            {{ item.status }}
                                        </van-tag>
                                    </div>
                                </template>
                                <AnimalContent :data="item" />
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                </div>
            </div>
        </van-tab>
    </van-tabs>
</template>

<style scoped>
.tab-title {
    display: flex;
    align-items: center;
}

.tab-icon {
    margin-right: 0.2em;
}

.tab-content {
    width: 100%;
    height: calc(100vh - 46px - 50px - 54px - 44px);
}

.control-bar {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: small;
    font-weight: bold;
    color: grey;
}

.switch-control {
    margin: 0 5px;
}

.toggle-button {
    margin-left: 20px;
}

.content-wrapper {
    display: flex;
    height: calc(100% - 35px);
}

.sidebar {
    height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.sidebar::-webkit-scrollbar {
    display: none;
}

.main-content {
    width: calc(100% - 80px);
    height: 100%;
    overflow-y: auto;
}

.item-title {
    display: flex;
    align-items: center;
}

.item-avatar {
    margin-right: 5px;
}

.item-name {
    font-weight: bold;
    margin-right: 5px;
}
</style>
