<template>
  <button @click="onClick">Increase{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref<number>(0)
const onClick = () => {
  count.value++
}
</script>