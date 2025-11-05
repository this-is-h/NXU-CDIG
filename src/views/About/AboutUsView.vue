<script setup>
import qqgroupImg from '@/assets/img/qqgroup.png'
</script>

<template>
    <div class="about">
        <h1>关于我们</h1>
        <van-cell-group inset>
            <van-cell title="这是一个什么项目？" center>
                <template #label>
                    <p>
                        <strong><em>NXU CDIG（NXU Cat & Dog Illustrated Guide）</em></strong
                        ><br /><br />
                        <strong><em>宁夏大学猫狗图鉴</em></strong> 由
                        <strong>H</strong>
                        开发，用于展示宁夏大学校园内流浪（不全是）猫狗的基本情况。<br /><br />
                        本项目已在 <strong>Github</strong> 以
                        <a href="https://mit-license.org/" style="color: var(--van-primary-color)"
                            >MIT</a
                        >
                        协议开源，欢迎大家提交 PR 与 Issue。<br />
                    </p>
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="校园猫咪指南" center>
                <template #label>
                    <ol style="padding-left: 1em; list-style: auto">
                        <li>
                            流浪猫客观上会对校内野生物种（主要是部分鸟类）产生负面影响。如果目击到流浪猫正在捕猎，我们鼓励同学们采取安全手段加以阻止。
                        </li>
                        <li>
                            若您在校内偶遇流浪猫，<strong>切记</strong>人类的食物<strong>不要</strong>喂给流浪猫！
                            <ul style="padding-left: 1em; list-style: circle">
                                <li>
                                    🚫
                                    <strong>巧克力、葡萄制品、大葱、洋葱</strong
                                    >等食品对猫<strong>有毒</strong>，可能会引起急性肾衰竭，切<strong>不可以</strong>喂食！
                                </li>
                                <li>
                                    🚫
                                    <strong>火腿肠</strong
                                    >和<strong>牛奶</strong>也并<strong>不适合</strong>猫咪，会引起肠胃反应，造成腹泻等状况。
                                </li>
                                <li>
                                    🚫
                                    酸性的各类水果、香辛料制的肉类、乌贼等海产也<strong>均不适合</strong>猫咪食用。
                                </li>
                            </ul>
                        </li>
                        <li>猫常见的较合适的食物有猫粮、猫罐头、以及其它一些猫咪零食。</li>
                    </ol>
                    <br />
                    <div style="text-align: right">
                        <span>科普内容参考：北大猫协</span>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="项目交流群" center>
                <template #label>
                    <div style="width: 100%; display: flex; justify-content: center">
                        <van-image :src="qqgroupImg" width="60%">
                            <template #loading>
                                <van-loading type="spinner" size="20"></van-loading>
                            </template>
                        </van-image>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="项目声明" center>
                <template #label>
                    <ol style="padding-left: 1em; list-style: auto">
                        <li>数据来源于用户上传，本项目不对数据准确性和完整性负责。</li>
                        <li>
                            涉及的 <code>Cookies</code> 及
                            <code>localStorage</code
                            >（本地储存信息）仅用于展示目的（如显示模式、语言设置等），本项目不收集任何个人隐私或数据。
                        </li>
                        <li>
                            本网站有权在用户不知情的情况下作出任何修改，包括但不限于更改域名、关闭服务等。
                        </li>
                    </ol>
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="项目搭建" center>
                <template #label>
                    <ol style="padding-left: 1em; list-style: auto">
                        <li>目前部署于 <code>Vercel</code> 平台上。</li>
                        <li>目前由 <code>Github</code> 托管项目代码。</li>
                    </ol>
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<style scoped>
.about {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 1em;
}

.about > * {
    margin-top: 1em;
}

h1 {
    margin: 0 30px;
    color: var(--van-doc-text-color-1);
    font-size: 20px;
    font-weight: bold;
}
</style>
