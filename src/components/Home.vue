<template>
  <div class="homeContainer">
    <div class="grid-item">
      <img src="../assets/IMG-6254sm.jpg" width="350" />
    </div>
    <div class="grid-item" style="items-align: left">
      <h1 style="text-align: left">Brian VanPortfleet</h1>
      <p>
        Certified full-stack developer with a specialization in
        <strong>React</strong> and Vue with over two decades of expertise in
        website management, IIS server administration, and domain name
        acquisitions, management, and domain transitions. Proficient in SEO,
        secure certificate handling, and ADA compliance, with a strong
        capability in transitioning old web applications to more modern Node.js
        frameworks/libraries like .NET, Angular, React, NextJS and Vue. Also an
        expert in HTML, CSS, SQL, and various design tools such as Photoshop,
        Illustrator, and InDesign. Possessing a strong marketing and advertising
        background, aiming for a senior role to leverage my extensive experience
        in driving efficient web system management, complemented by compelling
        visual design and robust database solutions.
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
