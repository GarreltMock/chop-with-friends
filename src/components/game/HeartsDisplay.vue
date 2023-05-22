<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'

const { hearts } = storeToRefs(useGameStore())
</script>

<template>
    <div class="hearts">
        <img src="@/assets/heart.png" alt="heart" width="40" v-for="heart in hearts" :key="'heart' + heart" />
    </div>
</template>

<style scoped>
.hearts {
    position: absolute;
    top: 4vh;
    left: 4vh;
    display: flex;
}

img {
    margin-right: 10px;
}
</style>
