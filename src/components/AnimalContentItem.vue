<template>
    <div class="animal-item-content" :style="{ gridColumn: `span ${columns}` }">
        <div class="title">{{ title }}</div>
        <div class="content">{{ content }}</div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '标题',
    },
    content: {
        type: String,
        default: '内容',
    },
    columns: {
        type: Number,
        default: 1,
        validator: (value) => [1, 2].includes(value),
    },
})
</script>

<style scoped>
.animal-item-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title {
    text-align: left;
    color: var(--van-doc-text-color-4);
}

.content {
    text-align: left;
    color: var(--van-doc-text-color-1);
}
</style>
