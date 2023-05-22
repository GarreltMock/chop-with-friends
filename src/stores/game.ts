import type { Ref } from 'vue'
import { computed, readonly, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export type TreePart = 'left' | 'right' | 'base'
export type PlayerInput = 'left' | 'right'

export const useGameStore = defineStore('game', () => {
    const tree: Ref<TreePart[]> = ref(generateTree(Math.random() * 50 + 30))
    const inputHistory: Ref<PlayerInput[]> = ref([])
    const hearts = ref(3)
    const isHurt = ref(false)

    const playerState: Ref<PlayerInput> = computed(() => inputHistory.value.last ?? 'left')
    const gameState: Ref<'playing' | 'won' | 'lost'> = computed(() =>
        !hearts.value ? 'lost' : tree.value.length === 0 ? 'won' : 'playing'
    )

    watch(isHurt, () => {
        if (isHurt.value) {
            setTimeout(() => {
                isHurt.value = false
            }, 400)
        }
    })

    function restartGame(force?: boolean) {
        if (gameState.value === 'playing' && !force) return
        tree.value = generateTree(Math.random() * 50 + 30)
        inputHistory.value = []
        hearts.value = 3
        isHurt.value = false
    }

    function addInput(input: PlayerInput) {
        if (gameState.value !== 'playing' || isHurt.value) return

        inputHistory.value.push(input)
        tree.value.pop()
        if (tree.value.last === input) {
            hearts.value--
            isHurt.value = true
        }
    }

    function generateTree(size: number): TreePart[] {
        return [
            ...Array.from({ length: size }, () => {
                const random = Math.random()
                if (random < 0.3) {
                    return 'left'
                } else if (random < 0.6) {
                    return 'right'
                } else {
                    return 'base'
                }
            }),
            'base'
        ]
    }

    return { tree, playerState, isHurt, gameState, hearts: readonly(hearts), addInput, restartGame }
})
