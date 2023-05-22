<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const state = useGameStore()
</script>

<template>
    <div class="state-display">
        {{ state.gameState !== 'playing' ? state.gameState : '' }}
    </div>
</template>

<style scoped>
.state-display {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);

    font-size: 64pt;
    font-weight: bold;
    text-transform: uppercase;

    color: var(--pakistan-green);
}
</style>
