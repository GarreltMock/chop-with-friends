<script setup lang="ts">
import { usePlayerController } from '@/composables/usePlayerController'
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

usePlayerController()

const { playerState, isHurt } = storeToRefs(useGameStore())

const isHitting = ref(false)
</script>

<template>
    <div class="player" :class="[playerState, { hurt: isHurt }]">
        <div class="axt" :class="{ hit: isHitting }"></div>
    </div>
</template>

<style scoped>
.player {
    width: 160px;
    height: 220px;

    background-color: var(--dark-moss-green);

    position: absolute;
    bottom: 5vh;
    left: 50%;
}

.left {
    left: calc(50% - 360px);
}
.right {
    left: calc(50% + 200px);
}
.dead {
}

.hurt {
    animation: shake 200ms infinite linear;
}
@keyframes shake {
    25% {
        rotate: -10deg;
    }
    75% {
        rotate: 10deg;
    }
}
</style>
