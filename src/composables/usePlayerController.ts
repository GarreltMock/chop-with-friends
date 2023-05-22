import { useGameStore } from '@/stores/game'
import { onMounted, onUnmounted } from 'vue'

export function usePlayerController() {
    const { addInput, restartGame } = useGameStore()

    onMounted(() => {
        window.addEventListener('keydown', handleInput)
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', handleInput)
    })

    const handleInput = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') addInput(e.key === 'ArrowLeft' ? 'left' : 'right')
        if (e.key === ' ') restartGame()
        if (e.key === 'r') restartGame(true)
    }
}
