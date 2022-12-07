<script setup lang="ts">
import { MutationType, storeToRefs } from "pinia"
import { DebuggerEvent, watch } from "vue"
import { useCounterStore } from "../stores/counter"
defineProps<{ msg: string }>()

const counter = useCounterStore()

// watchのようなもの
counter.$subscribe(
    (mutation, state) => {
        const type: MutationType = mutation.type
        const storeId: string = mutation.storeId
        // @ts-ignore
        const payload = mutation.payload
        const events: DebuggerEvent[] = [mutation.events].flat()
        localStorage.setItem("cart", JSON.stringify(state))
        console.log("👀subscribe", { type, storeId, payload, events })
    },
    {
        immediate: true
    }
)

// watch (前後の値を見ることができる)
watch(counter.$state, (next, prev) => {
    console.log("👀$state", next, prev)
})

const { count } = storeToRefs(counter)
watch(count, (next, prev) => {
    console.log("👀count", next, prev)
})

// actions の監視 (戻り値はリスナの解除関数)
const unsubscribe = counter.$onAction(({ name, store, args, after, onError }) => {
    console.log(`🌟$onAction name(action名):${name} args(Eventが渡る？):${args} store:`, store)

    // action成功(nothrow/resolve)時のコールバック
    after((result) => console.log("🌟$onAciton:after", result))

    // action失敗(throw/reject)時のコールバック
    onError((error) => console.log("🌟$onAction:onError", error))
}, /* detached */ false)
// unsubscribe();
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <p>{{ counter.label }} ： {{ counter.count }}</p>
        <button type="button" @click="counter.increment">increment</button>
        <button type="button" @click="counter.decrement">decrement</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
        official Vue + Vite starter
    </p>
    <p>
        Install
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
