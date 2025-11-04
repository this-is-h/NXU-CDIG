<script setup>
import { ref, computed, watch } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCat, mdiDog } from '@mdi/js'

// 常量定义
const CAT_IMAGE_URL = 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'

const STATUS_CONFIG = {
    在校: { type: 'success' },
    毕业: { type: 'primary' },
    失踪: { type: 'warning' },
    喵星: { color: 'grey' },
}

const CAT_TYPE_LIST = [
    '纯色',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
    '其他',
]

const DOG_TYPE_LIST = ['1', '2']

const CAT_DATA = {
    纯色: [
        { name: '1', sex: '公', status: '在校' },
        { name: '2', sex: '公', status: '毕业' },
        { name: '3', sex: '公', status: '失踪' },
        { name: '4', sex: '公', status: '喵星' },
        { name: '1', sex: '公', status: '在校' },
        { name: '2', sex: '公', status: '毕业' },
        { name: '3', sex: '公', status: '失踪' },
        { name: '4', sex: '公', status: '喵星' },
        { name: '1', sex: '公', status: '在校' },
        { name: '2', sex: '公', status: '毕业' },
        { name: '3', sex: '公', status: '失踪' },
        { name: '4', sex: '公', status: '喵星' },
    ],
    其他: [{ name: '其他', sex: '公', status: '在校' }],
}

const DOG_DATA = {
    1: [
        { name: '狗1', sex: '公', status: '在校' },
        { name: '狗2', sex: '公', status: '毕业' },
    ],
    2: [
        { name: '狗3', sex: '公', status: '在校' },
        { name: '狗4', sex: '公', status: '失踪' },
    ],
}

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

// 计算属性
const currentCatData = computed(() => CAT_DATA[CAT_TYPE_LIST[activeCatType.value]])
const currentDogData = computed(() => DOG_DATA[DOG_TYPE_LIST[activeDogType.value]])

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
</script>

<template>
    <van-tabs v-model:active="activeTab">
        <van-tab name="cat">
            <template #title>
                <div class="tab-title">
                    <svg-icon type="mdi" :path="mdiCat" class="tab-icon" />
                    猫
                </div>
            </template>
            <div class="tab-content">
                <div class="control-bar">
                    <span>仅展开单项：否</span>
                    <van-switch v-model="accordionMode" size="18px" class="switch-control" />
                    <span>是</span>
                    <van-button
                        v-if="!accordionMode"
                        plain
                        size="mini"
                        type="primary"
                        @click="toggleAllCatTabs"
                        class="toggle-button"
                    >
                        {{ catTabsAllOpen ? '全部收起' : '全部展开' }}
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
                                            width="2.5em"
                                            height="2.5em"
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
                                代码是写出来给人看的，附带能在机器上运行。
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
                    狗
                </div>
            </template>
            <div class="tab-content">
                <div class="control-bar">
                    <span>仅展开单项：否</span>
                    <van-switch v-model="accordionMode" size="18px" class="switch-control" />
                    <span>是</span>
                    <van-button
                        v-if="!accordionMode"
                        plain
                        size="mini"
                        type="primary"
                        @click="toggleAllDogTabs"
                        class="toggle-button"
                    >
                        {{ dogTabsAllOpen ? '全部收起' : '全部展开' }}
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
                                代码是写出来给人看的，附带能在机器上运行。
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
    margin-right: 5px;
}
</style>
