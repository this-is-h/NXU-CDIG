<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const searchValue = ref('');

const router = useRouter();
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
    height: calc(100vh - 46px - 50px - 54px);
    overflow: hidden;
}
</style>
