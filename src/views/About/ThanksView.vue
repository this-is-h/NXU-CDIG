<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiGithub } from '@mdi/js'

import bdmxImg from '@/assets/img/bdmx.jpg'
import hImg from '@/assets/img/h.png'
import gzhLargeImg from '@/assets/img/gzh-large.png'
import hxmmImg from '@/assets/img/hxmm.png'
import hxmdImg from '@/assets/img/hxmd.jpg'

const dialogH = ref(false)
</script>

<template>
    <div class="thanks">
        <h1>致谢名单</h1>
        <h2>特别鸣谢</h2>
        <van-cell-group inset>
            <van-cell
                title="北大猫协"
                label="燕园猫速查（北大猫咪图鉴）"
                url="https://gitee.com/circlelq/yan-yuan-mao-su-cha-shou-ce"
                center
                is-link
            >
                <template #icon>
                    <van-image
                        round
                        width="24"
                        style="margin-right: 10px; width: 24px"
                        :src="bdmxImg"
                    />
                </template>
            </van-cell>
            <!-- <van-cell title="H" label="This is H" url="https://thisish.cn/" center is-link> -->
            <van-cell title="H" label="This is H" center is-link @click="dialogH = true">
                <template #icon>
                    <van-image
                        round
                        width="24"
                        style="margin-right: 10px; width: 24px"
                        :src="hImg"
                    />
                </template>
            </van-cell>
            <van-cell title="H的小迷妹（？" label="看到有这么温暖的小程序出现 我决定给这世界很多好脸色" center>
                <template #icon>
                    <van-image
                        round
                        width="24"
                        style="margin-right: 10px; width: 24px"
                        :src="hxmmImg"
                    />
                </template>
            </van-cell>
            <van-cell title="H的小迷弟（？" label="我真的爱你 没人能比拟" center>
                <template #icon>
                    <van-image
                        round
                        width="24"
                        style="margin-right: 10px; width: 24px"
                        :src="hxmdImg"
                    />
                </template>
            </van-cell>
            <van-dialog v-model:show="dialogH" title="关注我们">
                <van-image style="padding: 1em 0.5em" :src="gzhLargeImg" />
            </van-dialog>
        </van-cell-group>
        <h2>项目支持</h2>
        <van-cell-group inset>
            <van-cell
                title="Vue"
                label="一款用于构建用户界面的 JavaScript 框架"
                url="https://cn.vuejs.org/"
                center
                is-link
            >
                <template #icon>
                    <svg
                        style="margin-right: 10px"
                        class="logo"
                        viewBox="0 0 128 128"
                        width="24"
                        height="24"
                        data-v-35dc6318=""
                    >
                        <path
                            fill="#42b883"
                            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                            data-v-35dc6318=""
                        ></path>
                        <path
                            fill="#35495e"
                            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                            data-v-35dc6318=""
                        ></path>
                    </svg>
                </template>
            </van-cell>
            <van-cell
                title="Vant"
                label="一个轻量、可定制的移动端组件库"
                url="https://vant-ui.github.io/vant/#/zh-CN"
                center
                is-link
            >
                <template #icon>
                    <img
                        style="margin-right: 10px; width: 24px"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"
                    />
                </template>
            </van-cell>
            <van-cell
                title="Nucleo"
                label="Explore the Nucleo icons, 30000 icons for UIs, presentations, and print projects. Download instantly or use them via our web and native apps."
                url="https://nucleoapp.com/"
                center
                is-link
            >
                <template #icon>
                    <svg
                        style="margin-right: 10px"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.752 4.24975C26.0941 4.44714 26.3781 4.73117 26.5754 5.07324C26.7728 5.4153 26.8766 5.80333 26.8763 6.19825V20.9777C26.8762 21.3728 26.7723 21.7609 26.5748 22.103C26.3773 22.4452 26.0933 22.7293 25.7513 22.927L22.7475 24.661L15.999 20.7647L20.124 18.3827V1L25.752 4.24975Z"
                            fill="var(--van-doc-text-color-1)"
                        ></path>
                        <path
                            d="M11.8763 31V13.618L16.0013 11.236L9.25277 7.33972L6.24902 9.07372C5.90678 9.27114 5.62259 9.55526 5.42509 9.89746C5.22759 10.2397 5.12375 10.6279 5.12402 11.023V25.8025C5.12396 26.1973 5.22781 26.5853 5.42516 26.9273C5.6225 27.2693 5.90638 27.5534 6.24827 27.751L11.8763 31Z"
                            fill="var(--van-doc-text-color-1)"
                        ></path>
                        <circle
                            cx="16"
                            cy="16"
                            r="2.34375"
                            fill="var(--van-doc-text-color-4)"
                        ></circle>
                    </svg>
                </template>
            </van-cell>
            <van-cell
                title="Github"
                label="GitHub is where people build software. More than 150 million people use GitHub to discover, fork, and contribute to over 420 million projects."
                url="https://github.com/"
                center
                is-link
            >
                <template #icon>
                    <svg-icon style="margin-right: 10px" type="mdi" :path="mdiGithub" />
                </template>
            </van-cell>
            <van-cell
                title="Vercel"
                label="Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web."
                url="https://vercel.com/"
                center
                is-link
            >
                <template #icon>
                    <svg
                        style="margin-right: 10px"
                        aria-label="Vercel Logo"
                        fill="var(--van-doc-text-color-1)"
                        class="logo"
                        viewBox="0 0 96 96"
                        width="24"
                        height="24"
                    >
                        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                    </svg>
                </template>
            </van-cell>
            <van-cell
                title="Watt Toolkit"
                label="「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。"
                url="https://steampp.net/"
                center
                is-link
            >
                <template #icon>
                    <img
                        style="margin-right: 10px; width: 24px"
                        src="https://steampp.net/svg/logo.png"
                    />
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<style scoped>
.thanks {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 1em 0;
}

h1,
h2 {
    margin: 0 30px;
}

h1 {
    color: var(--van-doc-text-color-1);
    font-size: 20px;
    font-weight: bold;
}

h2 {
    color: var(--van-doc-text-color-4);
    font-size: 14px;
    font-weight: 400;
    padding: 0.7em 0;
}
</style>
