<script setup>
import { ref } from 'vue'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGithub } from '@mdi/js'

const activeView = ref('home');

const goToGithub = () => {
    window.open('https://github.com/thisish/NXU-CDIG')
}
</script>

<template>
    <van-config-provider :theme="isDark ? 'dark' : 'light'">
        <header>
            <van-nav-bar title="宁夏大学猫狗图鉴" @click-right="goToGithub">
                <template #right>
                    <svg-icon type="mdi" :path="mdiGithub" style="color: grey"></svg-icon>
                </template>
            </van-nav-bar>
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <van-tabbar v-model="activeView">
                <van-tabbar-item replace to="/home" icon="home-o" name="home">首页</van-tabbar-item>
                <van-tabbar-item replace to="/community" icon="comment-o" name="community">社区</van-tabbar-item>
                <van-tabbar-item replace to="/about" icon="info-o" name="about">关于</van-tabbar-item>
            </van-tabbar>
        </footer>
        <!-- <RouterView /> -->
    </van-config-provider>
</template>

<style scoped>

</style>
