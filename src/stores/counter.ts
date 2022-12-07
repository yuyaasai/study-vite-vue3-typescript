import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCounterStore = defineStore("counter", {
    // data
    state: () => ({
        label: "クリック数",
        count: 0
    }),
    // computed properties
    getters: {
        doubleCount: (state) => state.count * 2
    },
    // methods
    actions: {
        increment() {
            this.label = "増やした"
            this.count++
            return "戻り値はonActionのafterに渡される"
        },
        decrement() {
            this.label = "減らした"
            this.count--
        }
    }
})

// userCounterStoreと同等の Setup Stores (上の書き方は Option Stores と呼ぶ)
const useCounterStore2 = defineStore("counter2", () => {
    // data
    const label = "クリック数"
    const count = ref(0)
    // computed properties
    const doubleCount = computed(() => count.value * 2)
    // methods
    const increment = () => count.value++
    const decrement = () => count.value--
    return { label, count, doubleCount, increment, decrement }
})
