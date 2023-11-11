<script setup>
const { userId } = defineProps(["userId"]);
</script>

<template>
  <h1>{{ userId }}'s Education</h1>
  <div class="card">
    <h2>Full Sail University</h2>
    <p>Degree in Audio Engineering (Course Director Awards)</p>
    <h3>Certificates</h3>
    <ul>
      <li>Front-End Development - Meta Technologies</li>
      <li>Html and Css in depth - Meta Technologies</li>
      <li>Programming with JavaScript - Meta Technologies</li>
      <li>Advance React Js - Meta Technologies</li>
    </ul>
    <h3>Personal Traits</h3>
    <ul>
      <li>Exceptional problem-solving skills with a deeply analytical mind</li>
      <li>Strong leadership capabilities</li>
      <li>Detail-oriented with a passion for technology, design, and data</li>
      <li>Passion for doing it right the first time</li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  margin-bottom: 0px;
  padding-bottom: 0px;
}
</style>
