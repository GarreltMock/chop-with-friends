<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import TreePart from '@/components/game/TreePart.vue'
import { storeToRefs } from 'pinia'

const { tree } = storeToRefs(useGameStore())
</script>

<template>
    <div class="tree">
        <TreePart v-for="(part, index) in tree" :index="index" :state="part" :key="'tree-part-' + index" />
    </div>
</template>

<style scoped>
.tree {
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
}
</style>
