<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const searchValue = ref('')

// 监听搜索值变化
watch(searchValue, (newValue) => {
    if (newValue) {
        // 有搜索内容时跳转到搜索页面
        router.push('/home/search')
    } else {
        // 清空搜索时使用 replace 返回主页,不产生历史记录
        router.back()
    }
})

// 监听路由变化，当离开search页面时清空搜索值
watch(
    () => route.path,
    (newPath, oldPath) => {
        if (oldPath === '/home/search' && newPath !== '/home/search') {
            searchValue.value = ''
        }
    },
)
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
