<template>
  <h1>{{ name }}</h1>
</template>

<style scoped>
h1 {
  color: white;
}
</style>

<script setup>
defineProps({
  name: String,
});
</script>
