<script setup lang="ts">
import type { TreePart } from '@/stores/game'

defineProps<{
    state: TreePart
    index: number
}>()
</script>

<template>
    <div class="tree-part" :class="{ odd: index % 2 === 0 }">
        <div class="branch" :class="state"></div>
    </div>
</template>

<style scoped>
div {
    background-color: var(--tigers-eye);
}

.odd,
.odd div {
    background-color: var(--earth-yellow);
}

.tree-part {
    --branch-width: 160px;
    --branch-height: 40px;

    width: 200px;
    height: 200px;
    position: relative;
}

.branch {
    width: var(--branch-width);
    height: var(--branch-height);
    position: absolute;
    top: calc(50% - (var(--branch-height) / 2));
}

.base {
    display: none;
}
.left {
    left: calc(-1 * var(--branch-width));
}
.right {
    right: calc(-1 * var(--branch-width));
}
</style>
