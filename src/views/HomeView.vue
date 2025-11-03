<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const searchValue = ref('');

watch(searchValue, (newValue) => {
    if (newValue) {
        router.push(`/home/search`);
    } else {
        router.push('/home/main');
    }
});

// 监听路由变化，当从search页面返回时清空搜索值
let wasInSearchPage = false;
watch(() => route.path, (newPath, oldPath) => {
    // 记录之前是否在search页面
    if (oldPath === '/home/search') {
        wasInSearchPage = true;
    }
    // 当离开search页面返回其他页面时，清空搜索值
    if (wasInSearchPage && newPath !== '/home/search') {
        searchValue.value = '';
        wasInSearchPage = false;
    }
});

router.push('/home/main');
</script>

<template>
    <van-search v-model="searchValue" placeholder="请输入🐱或🐶的名称" />
    <div id="home-main">
        <router-view />
    </div>
</template>

<style scoped>
#home-main {
    width: 100%;
    height: calc(100% - 54px);
    overflow: hidden;
}
</style>
