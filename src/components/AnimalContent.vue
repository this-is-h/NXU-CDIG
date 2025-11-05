<template>
    <div class="animal-content">
        <AnimalContentItem
            v-if="data.nickname"
            :title="t('animalFields.nickname')"
            :content="data.nickname"
        />
        <AnimalContentItem
            v-if="data.color"
            :title="t('animalFields.color')"
            :content="data.color"
        />
        <AnimalContentItem v-if="data.sex" :title="t('animalFields.sex')" :content="data.sex" />
        <AnimalContentItem
            v-if="data.status"
            :title="t('animalFields.status')"
            :content="data.status"
        />
        <AnimalContentItem
            v-if="data.neutered"
            :title="t('animalFields.neutered')"
            :content="data.neutered"
        />
        <AnimalContentItem
            v-if="data.neuteredTime"
            :title="t('animalFields.neuteredTime')"
            :content="data.neuteredTime"
        />
        <AnimalContentItem
            v-if="data.birthTime"
            :title="t('animalFields.birthTime')"
            :content="data.birthTime"
        />
        <AnimalContentItem
            v-if="data.appearTime"
            :title="t('animalFields.appearTime')"
            :content="data.appearTime"
        />
        <AnimalContentItem
            v-if="data.missingTime"
            :title="t('animalFields.missingTime')"
            :content="data.missingTime"
        />
        <AnimalContentItem
            v-if="data.adoptionTime"
            :title="t('animalFields.adoptionTime')"
            :content="data.adoptionTime"
        />
        <AnimalContentItem
            v-if="data.deathReason"
            :title="t('animalFields.deathReason')"
            :content="data.deathReason"
        />
        <AnimalContentItem
            v-if="data.deathTime"
            :title="t('animalFields.deathTime')"
            :content="data.deathTime"
        />
        <AnimalContentItem
            v-if="data.personality"
            :title="t('animalFields.personality')"
            :content="data.personality"
            :columns="2"
        />
        <AnimalContentItem
            v-if="data.appearance"
            :title="t('animalFields.appearance')"
            :content="data.appearance"
            :columns="2"
        />
        <AnimalContentItem
            v-if="data.relationship"
            :title="t('animalFields.relationship')"
            :content="data.relationship"
            :columns="2"
        />
        <AnimalContentItem
            v-if="data.other"
            :title="t('animalFields.other')"
            :content="data.other"
            :columns="2"
        />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AnimalContentItem from './AnimalContentItem.vue'

const { t } = useI18n()

defineProps({
    data: {
        type: Object,
        required: true,
    },
})
</script>

<style scoped>
.animal-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
}
</style>
