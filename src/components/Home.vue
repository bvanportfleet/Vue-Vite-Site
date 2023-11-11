<template>
  <div class="homeContainer">
    <div class="grid-item">
      <img src="../assets/IMG-6254sm.jpg" width="350" />
    </div>
    <div class="grid-item" style="items-align: left">
      <h2>Brian VanPortfleet</h2>
      <p>This is about me and stuff</p>
    </div>
  </div>
</template>

<style>
img {
  border-radius: 20px;
  border: 1px var(--primary-color) solid;
  /* Horizontal offset, Vertical offset, Blur radius, Spread radius, Color */
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.homeContainer {
  margin-top: 50px;
  display: grid;
  grid-template-columns: auto 1fr; /* Two columns */
  grid-gap: 40px; /* Spacing between grid items */
}
</style>
