<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
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

// 处理系统返回事件（移动端）
const handleClearSearch = () => {
    // 当收到清除搜索的事件时，清空搜索值
    searchValue.value = '';
};

onMounted(() => {
    // 添加事件监听
    window.addEventListener('clear-search', handleClearSearch);
    router.push('/home/main');
});

onUnmounted(() => {
    // 移除事件监听
    window.removeEventListener('clear-search', handleClearSearch);
});
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
