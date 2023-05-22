<script setup lang="ts">
import Tree from '@/components/game/Tree.vue'
import Player from '@/components/game/Player.vue'
import HeartsDisplay from '@/components/game/HeartsDisplay.vue'
import StateDisplay from '@/components/game/StateDisplay.vue'
import HurtDisplay from '@/components/game/HurtDisplay.vue'
import TreeCountDisplay from '@/components/game/TreeCountDisplay.vue'
</script>

<template>
    <div class="core-view">
        <HeartsDisplay />
        <TreeCountDisplay />
        <Tree />
        <Player />
        <StateDisplay />
        <HurtDisplay />
    </div>
</template>

<style scoped>
.core-view {
    width: 100%;
    height: 100%;

    background-color: var(--cornsilk);
}
</style>
