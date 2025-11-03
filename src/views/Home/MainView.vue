<script setup>
import { ref, watch } from 'vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCat, mdiDog } from '@mdi/js';

const accordionMode = ref(false);
const catCollapse = ref(null);
const dogCollapse = ref(null);
const catTabsAllOpen = ref(false);
const dogTabsAllOpen = ref(false);
const allCatTabs = () => {
    catTabsAllOpen.value ? catCollapse.value.toggleAll(false) : catCollapse.value.toggleAll(true)
    catTabsAllOpen.value = !catTabsAllOpen.value;
}
const allDogTabs = () => {
    dogTabsAllOpen.value ? dogCollapse.value.toggleAll(false) : dogCollapse.value.toggleAll(true)
    dogTabsAllOpen.value = !dogTabsAllOpen.value;
}

const activeTab = ref('cat');
const activeCatType = ref(0);
const CatTypeList = ref(['纯色', '其他', '其他', '其他', '其他', '其他', '其他', '其他', '其他', '其他', '其他', '其他']);
const activeDogType = ref(0);
const DogTypeList = ref(['1', '2']);
const activeCat = ref(accordionMode.value ? '' : []);
const activeDog = ref(accordionMode.value ? '' : []);

watch(() => accordionMode.value, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        activeCat.value = accordionMode.value ? '' : [];
        activeDog.value = accordionMode.value ? '' : [];
    }
})

const CatData = {
    "纯色": [
        {
            "name": "1",
            "sex": "公",
            "status": "在校"
        },
        {
            "name": "2",
            "sex": "公",
            "status": "毕业"
        },
        {
            "name": "3",
            "sex": "公",
            "status": "失踪"
        },
        {
            "name": "4",
            "sex": "公",
            "status": "喵星"
        },
        {
            "name": "1",
            "sex": "公",
            "status": "在校"
        },
        {
            "name": "2",
            "sex": "公",
            "status": "毕业"
        },
        {
            "name": "3",
            "sex": "公",
            "status": "失踪"
        },
        {
            "name": "4",
            "sex": "公",
            "status": "喵星"
        },
        {
            "name": "1",
            "sex": "公",
            "status": "在校"
        },
        {
            "name": "2",
            "sex": "公",
            "status": "毕业"
        },
        {
            "name": "3",
            "sex": "公",
            "status": "失踪"
        },
        {
            "name": "4",
            "sex": "公",
            "status": "喵星"
        }
    ],
    "其他": [
        {
            "name": "其他",
            "sex": "公",
            "status": "在校"
        }
    ]
}

// 为狗标签页创建独立的数据源
const DogData = {
    "1": [
        {
            "name": "狗1",
            "sex": "公",
            "status": "在校"
        },
        {
            "name": "狗2",
            "sex": "公",
            "status": "毕业"
        }
    ],
    "2": [
        {
            "name": "狗3",
            "sex": "公",
            "status": "在校"
        },
        {
            "name": "狗4",
            "sex": "公",
            "status": "失踪"
        }
    ]
}
</script>

<template>
    <van-tabs v-model:active="activeTab">
        <van-tab name="cat">
            <template #title>
                <div style="display: flex; align-items: center;">
                    <svg-icon type="mdi" :path="mdiCat" style="margin-right: 0.2em;"></svg-icon>
                    猫
                </div>
            </template>
            <div class="tab-content">
                <div
                    style="width: 100%;height: 35px;display: flex;align-items: center;justify-content: center;font-size: small;font-weight: bold;color: grey;">
                    <span>仅展开单项：否</span>
                    <van-switch v-model="accordionMode" size="18px" style="margin: 0 5px;" />
                    <span>是</span>
                    <van-button v-if="!accordionMode" plain size="mini" type="primary" @click="allCatTabs"
                        style="margin-left: 20px;">
                        {{ catTabsAllOpen ? '全部收起' : '全部展开' }}
                    </van-button>
                </div>
                <div style="display: flex;height: calc(100% - 35px);">
                    <van-sidebar v-model="activeCatType" style="height: 100%;">
                        <van-sidebar-item v-for="(item, index) in CatTypeList" :key="index" :title="item" />
                    </van-sidebar>
                    <div style="width: calc(100% - 80px);">
                        <van-collapse v-model="activeCat" :accordion="accordionMode" ref="catCollapse">
                            <van-collapse-item v-for="(item, index) in CatData[CatTypeList[activeCatType]]" :key="index"
                                :name="index">
                                <template #title>
                                    <div style="display: flex; align-items: center;">
                                        <van-image round width="2.5em" height="2.5em"
                                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                                            style="margin-right: 5px;">
                                            <template v-slot:loading>
                                                <van-loading type="spinner" size="20" />
                                            </template>
                                        </van-image>
                                        <span style="margin-right: 5px;">{{ item.name }}</span>
                                        <van-tag v-if="item.status === '在校'" type="success">在校</van-tag>
                                        <van-tag v-if="item.status === '毕业'" type="primary">毕业</van-tag>
                                        <van-tag v-if="item.status === '失踪'" type="warning">失踪</van-tag>
                                        <van-tag v-if="item.status === '喵星'" color="grey">喵星</van-tag>
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
                <div style="display: flex; align-items: center;">
                    <svg-icon type="mdi" :path="mdiDog" style="margin-right: 0.2em;"></svg-icon>
                    狗
                </div>
            </template>
            <div class="tab-content">
                <div
                    style="width: 100%;height: 35px;display: flex;align-items: center;justify-content: center;font-size: small;font-weight: bold;color: grey;">
                    <span>仅展开单项：否</span>
                    <van-switch v-model="accordionMode" size="18px" style="margin: 0 5px;" />
                    <span>是</span>
                    <van-button v-if="!accordionMode" plain size="mini" type="primary" @click="allDogTabs"
                        style="margin-left: 20px;">
                        {{ dogTabsAllOpen ? '全部收起' : '全部展开' }}
                    </van-button>
                </div>
                <div style="display: flex;height: calc(100% - 35px);">
                    <van-sidebar v-model="activeDogType" style="height: 100%;">
                        <van-sidebar-item v-for="(item, index) in DogTypeList" :key="index" :title="item" />
                    </van-sidebar>
                    <div style="width: calc(100% - 80px);">
                        <van-collapse v-model="activeDog" :accordion="accordionMode" ref="dogCollapse">
                            <van-collapse-item v-for="(item, index) in DogData[DogTypeList[activeDogType]]" :key="index"
                                :name="index">
                                <template #title>
                                    <div>
                                        {{ item.name }}
                                        <van-tag v-if="item.status === '在校'" type="success">在校</van-tag>
                                        <van-tag v-if="item.status === '毕业'" type="primary">毕业</van-tag>
                                        <van-tag v-if="item.status === '失踪'" type="warning">失踪</van-tag>
                                        <van-tag v-if="item.status === '喵星'" color="grey">喵星</van-tag>
                                    </div>
                                </template>
                                代码是写出来给人看的，附带能在机器上运行。
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                </div>
            </div>
        </van-tab>
        <!-- <van-tab title="标签 3" name="c">
            <template #title >
                <div style="display: flex; align-items: center;">
                    其他
                </div>
            </template>
            <div class="tab-content">
                内容 3
            </div>
        </van-tab> -->
    </van-tabs>
</template>

<style scoped>
.tab-content {
    width: 100%;
    height: calc(100vh - 46px - 50px - 54px - 44px);
}

/* 为van-sidebar添加自动滚动并隐藏滚动条 */
.van-sidebar {
    overflow-y: auto;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

.van-sidebar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari and Opera */
}

/* 为van-sidebar后的内容区域添加自动滚动和美化滚动条 */
.tab-content>div:last-child {
    height: 100%;
    overflow: hidden;
}

.tab-content>div:last-child>div:last-child {
    height: 100%;
    overflow-y: auto;
}

/* 美化滚动条 */
.tab-content>div:last-child>div:last-child::-webkit-scrollbar {
    width: 4px;
}

.tab-content>div:last-child>div:last-child::-webkit-scrollbar-corner {
    background-color: transparent;
}

.tab-content>div:last-child>div:last-child::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 100px;
}

.tab-content>div:last-child>div:last-child::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 100px;
}

/* Firefox滚动条样式 */
.tab-content>div:last-child>div:last-child {
    scrollbar-width: thin;
    scrollbar-color: #c1c1c1 #f1f1f1;
}

/* 适配Vant暗黑模式 */
.van-theme-dark .tab-content>div:last-child>div:last-child::-webkit-scrollbar-track {
    background: #1f1f1f;
}

.van-theme-dark .tab-content>div:last-child>div:last-child::-webkit-scrollbar-thumb {
    background: #555;
}

.van-theme-dark .tab-content>div:last-child>div:last-child {
    scrollbar-color: #555 #1f1f1f;
}
</style>
