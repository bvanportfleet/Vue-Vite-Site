<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(10)
const count2 = ref(5)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">this count is {{ count }}</button>
    <button class="Dec" type="button" @click="count2--">this count is {{ count2 }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #60b2f9;
}
button {
  background-color: rgb(16, 168, 112);
  color: white;
}
button.Dec{
  background-color: rgb(241, 39, 4);
  color: rgb(28, 28, 28);
}
</style>
