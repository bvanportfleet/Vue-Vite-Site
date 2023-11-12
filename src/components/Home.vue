<template>
  <div class="homeContainer">
    <div class="grid-item">
      <img src="../assets/IMG-6254sm.jpg" width="350" />
    </div>
    <div class="grid-item" style="items-align: left">
      <h1 style="text-align: left">Brian VanPortfleet</h1>
      <p>
        Certified full-stack developer with a specialization in
        <strong>React</strong> and <strong>Vue</strong> with over two decades of
        expertise in website management, <strong>IIS server administration</strong>, and <strong>Corporate domain
        name acquisitions</strong>, management, and domain transitions. Proficient in
        <strong>SEO</strong>, <strong>secure certificate handling</strong>, and <strong>ADA compliance</strong>, with a strong
        capability in transitioning old web applications to more modern <strong>Node.js
        frameworks/libraries</strong> like
        <strong>.NET, Angular, React, NextJS and Vue.</strong> Also an expert in
        <strong>HTML, CSS, SQL</strong>, and various design tools such as <strong>Photoshop</strong>, <strong>Illustrator</strong>,
        and <strong>InDesign</strong>. Possessing a strong marketing and advertising background,
        aiming for a senior role to leverage my extensive experience in driving
        efficient web system management, complemented by compelling visual
        design and robust database solutions.
      </p>
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
