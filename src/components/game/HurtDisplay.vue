<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { ref, watch } from 'vue'

const store = useGameStore()
const show = ref(false)

watch(
    () => store.isHurt,
    () => {
        if (!store.isHurt) return
        show.value = true
        setTimeout(() => (show.value = false), 100)
    }
)
</script>

<template>
    <div v-if="show" class="hurt-display"></div>
</template>

<style scoped>
.hurt-display {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-color: #d7443e;
    opacity: 0.4;
}
</style>
