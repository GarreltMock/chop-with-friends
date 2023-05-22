<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const store = useGameStore()
</script>

<template>
    <div class="tree-count-display">
        <img src="@/assets/wood.png" alt="tree" width="40" />
        <div>{{ store.tree.length }}</div>
    </div>
</template>

<style scoped>
.tree-count-display {
    position: absolute;
    top: calc(4vh + 60px);
    left: 4vh;
    display: flex;
    font-size: 24pt;
}

img {
    margin-right: 10px;
}
</style>
