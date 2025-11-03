<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGithub } from '@mdi/js'

const router = useRouter()
const route = useRoute()
const activeView = ref('home');
const isDark = ref(false);
const showBackButton = ref(false);

const comeBack = () => router.back();
const goToGithub = () => {
    window.open('https://github.com/this-is-h/NXU-CDIG')
}

// 检查当前路由是否需要显示返回按钮
const checkShowBackButton = () => {
    const currentPath = route.path;
    // 不显示返回按钮的页面：首页、首页主内容、社区、关于
    showBackButton.value = !(currentPath === '/' || currentPath === '/home' ||
        currentPath === '/home/main' || currentPath === '/community' ||
        currentPath === '/about');
}

// 初始检查
onMounted(() => {
    checkShowBackButton();
});

// 监听路由变化
watch(() => route.path, () => {
    checkShowBackButton();
});
</script>

<template>
    <van-config-provider :theme="isDark ? 'dark' : 'light'">
        <header>
            <van-nav-bar :left-text="showBackButton ? '返回' : ''" :left-arrow="showBackButton" @click-left="comeBack"
                title="宁夏大学猫狗图鉴" @click-right="goToGithub">
                <template #right>
                    <svg-icon type="mdi" :path="mdiGithub" style="color: grey"></svg-icon>
                </template>
            </van-nav-bar>
        </header>

        <main>
            <router-view :activeView="activeView" />
        </main>

        <footer>
            <van-tabbar v-model="activeView">
                <van-tabbar-item replace to="/home" name="home">
                    <template #icon="props">
                        <svg v-if="props.active" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px"
                            height="18px" viewBox="0 0 18 18">
                            <path
                                d="M9.44642 1.14733C9.18122 0.950889 8.81878 0.950889 8.55358 1.14733L2.20858 5.84733C1.76278 6.17775 1.5 6.69936 1.5 7.254V13.75C1.5 15.2692 2.73079 16.5 4.25 16.5H13.75C15.2692 16.5 16.5 15.2692 16.5 13.75V7.254C16.5 6.69936 16.2374 6.17787 15.7916 5.84746L9.44642 1.14733Z"
                                fill="rgba(25, 137, 250, 1)" fill-opacity="0.4" data-color="color-2"></path>
                            <path
                                d="M14.5 4.89072L13 3.77961V2.75C13 2.33579 13.3358 2 13.75 2C14.1642 2 14.5 2.33579 14.5 2.75V4.89072Z"
                                fill="rgba(25, 137, 250, 1)"></path>
                            <path d="M9 16.5V12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12V16.5H9Z"
                                fill="rgba(25, 137, 250, 1)"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 9.75C10 9.33579 10.3358 9 10.75 9H12.25C12.6642 9 13 9.33579 13 9.75C13 10.1642 12.6642 10.5 12.25 10.5H10.75C10.3358 10.5 10 10.1642 10 9.75Z"
                                fill="rgba(25, 137, 250, 1)"></path>
                        </svg>
                        <svg v-if="!props.active" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px"
                            height="18px" viewBox="0 0 18 18">
                            <path
                                d="M9.44642 1.14733C9.18122 0.950889 8.81878 0.950889 8.55358 1.14733L2.20858 5.84733C1.76278 6.17775 1.5 6.69936 1.5 7.254V13.75C1.5 15.2692 2.73079 16.5 4.25 16.5H13.75C15.2692 16.5 16.5 15.2692 16.5 13.75V7.254C16.5 6.69936 16.2374 6.17787 15.7916 5.84746L9.44642 1.14733Z"
                                fill="var(--color-contrast-high)" fill-opacity="0.4" data-color="color-2"></path>
                            <path
                                d="M14.5 4.89072L13 3.77961V2.75C13 2.33579 13.3358 2 13.75 2C14.1642 2 14.5 2.33579 14.5 2.75V4.89072Z"
                                fill="var(--color-contrast-high)"></path>
                            <path d="M9 16.5V12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12V16.5H9Z"
                                fill="var(--color-contrast-high)"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 9.75C10 9.33579 10.3358 9 10.75 9H12.25C12.6642 9 13 9.33579 13 9.75C13 10.1642 12.6642 10.5 12.25 10.5H10.75C10.3358 10.5 10 10.1642 10 9.75Z"
                                fill="var(--color-contrast-high)"></path>
                        </svg>
                    </template>
                    首页
                </van-tabbar-item>
                <van-tabbar-item replace to="/community" icon="comment-o" name="community">
                    <template #icon="props">
                        <svg v-if="props.active" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px"
                            height="18px" viewBox="0 0 18 18">
                            <path
                                d="M7.10864 10.8914L10.168 16.1366C10.738 17.1166 12.1609 16.9199 12.5045 15.8905L16.6611 2.95948C16.8168 2.47494 16.6644 1.98204 16.3454 1.65457L7.10864 10.8914Z"
                                fill="rgba(25, 137, 250, 1)"></path>
                            <path
                                d="M16.3454 1.65457C16.0266 1.32724 15.5414 1.16522 15.0309 1.34208L2.1175 5.493C1.05388 5.83444 0.904026 7.27119 1.86313 7.83186L7.10863 10.8914L16.3454 1.65457Z"
                                fill="rgba(25, 137, 250, 1)" fill-opacity="0.4" data-color="color-2"></path>
                        </svg>
                        <svg v-if="!props.active" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px"
                            height="18px" viewBox="0 0 18 18">
                            <path
                                d="M7.10864 10.8914L10.168 16.1366C10.738 17.1166 12.1609 16.9199 12.5045 15.8905L16.6611 2.95948C16.8168 2.47494 16.6644 1.98204 16.3454 1.65457L7.10864 10.8914Z"
                                fill="rgba(0, 0, 0, 1)"></path>
                            <path
                                d="M16.3454 1.65457C16.0266 1.32724 15.5414 1.16522 15.0309 1.34208L2.1175 5.493C1.05388 5.83444 0.904026 7.27119 1.86313 7.83186L7.10863 10.8914L16.3454 1.65457Z"
                                fill="rgba(0, 0, 0, 1)" fill-opacity="0.4" data-color="color-2"></path>
                        </svg>
                    </template>
                    社区
                </van-tabbar-item>
                <van-tabbar-item replace to="/about" icon="info-o" name="about">
                    <template #icon="props">
                        <svg v-if="props.active" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px"
                            height="18px" viewBox="0 0 18 18">
                            <path opacity="0.4"
                                d="M9 1C4.5889 1 1 4.5889 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9C17 4.5889 13.4111 1 9 1Z"
                                fill="rgba(25, 137, 250, 1)" data-color="color-2"></path>
                            <path
                                d="M9.75 12.75C9.75 13.1641 9.4141 13.5 9 13.5C8.5859 13.5 8.25 13.1641 8.25 12.75V9.5H7.75C7.3359 9.5 7 9.1641 7 8.75C7 8.3359 7.3359 8 7.75 8H8.5C9.1895 8 9.75 8.5605 9.75 9.25V12.75ZM9 6.75C8.448 6.75 8 6.301 8 5.75C8 5.199 8.448 4.75 9 4.75C9.552 4.75 10 5.199 10 5.75C10 6.301 9.552 6.75 9 6.75Z"
                                fill="rgba(25, 137, 250, 1)"></path>
                        </svg>
                        <svg v-if="!props.active" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px"
                            height="18px" viewBox="0 0 18 18">
                            <path opacity="0.4"
                                d="M9 1C4.5889 1 1 4.5889 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9C17 4.5889 13.4111 1 9 1Z"
                                fill="rgba(0, 0, 0, 1)" data-color="color-2"></path>
                            <path
                                d="M9.75 12.75C9.75 13.1641 9.4141 13.5 9 13.5C8.5859 13.5 8.25 13.1641 8.25 12.75V9.5H7.75C7.3359 9.5 7 9.1641 7 8.75C7 8.3359 7.3359 8 7.75 8H8.5C9.1895 8 9.75 8.5605 9.75 9.25V12.75ZM9 6.75C8.448 6.75 8 6.301 8 5.75C8 5.199 8.448 4.75 9 4.75C9.552 4.75 10 5.199 10 5.75C10 6.301 9.552 6.75 9 6.75Z"
                                fill="rgba(0, 0, 0, 1)"></path>
                        </svg>
                    </template>
                    关于
                </van-tabbar-item>
            </van-tabbar>
        </footer>
        <!-- <RouterView /> -->
    </van-config-provider>
</template>

<style scoped>
main {
    width: 100%;
    height: calc(100vh - 46px - 50px);
    overflow: hidden;
}
</style>
