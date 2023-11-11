<script setup>
import { ref } from "vue";
const car = ref("red");
const { userId } = defineProps(["userId"]);
</script>

<template>
  <h1>{{ userId }}'s Work History</h1>

  <div class="card">
    <h2>Web Content Manager (Front-End Web Developer)</h2>
    <strong>
      Farmers Insurance, Caledonia, MI — August 15, 2001 - September 28th,
      2023</strong
    ><br />
    <ul>
      <li>
        Acted as an experienced UI/UX designer, creating intuitive and
        compelling user interfaces, enhancing overall user experience with
        various NodeJS libraries and frameworks like React and Vue.
      </li>
      <li>
        Directed and updated website content, ensuring alignment with brand
        guidelines and maximizing SEO potential.
      </li>
      <li>
        Managed SQL and MySQL database integrations for dynamic content
        retrieval and user data storage.
      </li>
      <li>
        Collaborated with marketing and IT departments on domain name
        acquisitions, management, domain transitions, and the acquisition and
        installation of secure certificates.
      </li>
      <li>
        Specialized in transitioning web applications from .NET to Node.js,
        ReactJS and Vite/VueJS.
      </li>
      <li>
        Utilized Google Analytics to track website performance, and created
        funnel reports to understand user behaviors and conversion pathways.
      </li>
      <li>
        Ensured all web content and interfaces are ADA compliant, optimizing
        accessibility for all users.
      </li>
      <li>
        Engaged with the design team to optimize visual content, enhancing user
        engagement and conversions.
      </li>

      <li>
        Oversaw website and domain management, including database
        configurations.
      </li>
    </ul>
  </div>
  <div class="card">
    <h2>Graphic Designer</h2>
    <strong
      >Meijer Corporation, Walker, MI — November 15, 1996 - August 14,
      2001</strong
    >
    <ul>
      <li>
        Crafted visual content for various marketing campaigns using Photoshop,
        Illustrator, InDesign, and PowerPoint.
      </li>
      <li>
        Assisted the web development team in integrating graphics into
        database-driven interfaces.
      </li>
      <li>
        Collaborated with marketing to ensure graphic designs aligned with
        promotional strategies.
      </li>
      <li>
        Worked under tight holiday deadlines, ensuring timely delivery and
        quality of marketing materials.
      </li>
    </ul>
  </div>
</template>
