<script setup>
import MyName from "./components/Includes/MyName.vue";

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("menu-visible");
}

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll("#menu li a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("menu-visible")) {
      menu.classList.remove("menu-visible");
    }
  });
});
// close the menu when a link is clicked
const links = document.querySelectorAll(".router-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("menu-visible")) {
      menu.classList.remove("menu-visible");
    }
  });
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

header {
  position: sticky;
  background: var(--primary-color);
  color: #fff;
  padding: 10px;
  padding-bottom: 0px;
  text-align: center;
  top: 0;
  margin-top: 0px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to bottom,
    var(--primary-color),
    rgb(2, 108, 136)
  );
}

main {
  padding: 1rem 5rem 1rem 5rem;
}

.menu-container {
  background: var(--secondary-color);
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;
  margin: 0rem 4rem 0rem 4rem;
  box-shadow: 0px -2px 15px 0px rgba(0, 0, 0, 0.2);
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

nav ul li {
  display: inline-block;
  font-size: larger;
}

nav ul li .router-link {
  color: var(--link-color);
  padding: 5px 0px;
  margin: 20px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
}

nav ul li .router-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background: var(--link-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

nav ul li .router-link:hover::before,
nav ul li .router-link.active::before {
  transform: scaleX(1);
}

.hamburger {
  display: none; /* Hide the hamburger menu by default */
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 2px;
}
footer {
  background: var(--primary-color);
  color: #fff;
  text-align: center;
  padding: 10px 0;
  background-image: linear-gradient(
    to bottom,
    var(--primary-color),
    rgb(2, 108, 136)
  );
}

@media (max-width: 875px) {
  header {
    position: relative;
  }
  .hamburger {
    display: flex; /* Show the hamburger menu on smaller screens */
  }
  main {
    padding: 1rem 1rem 1rem 1rem;
  }

  .menu-container {
    padding: 0px 0px;
    margin: 0rem 0.5rem 0rem 0.5rem;
  }
  nav {
    margin: 0px 10px;
  }
  nav ul {
    display: none; /* Hide the horizontal menu */
    margin-top: -30px;
    margin-left: auto;
    margin-right: auto;
  }

  .menu-visible {
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: var(--secondary-color);
    box-shadow: none;
  }
}
</style>

<template>
  <header>
    <MyName name="Brian VanPortfleet" />

    <div class="menu-container">
      <div class="hamburger" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav>
        <ul id="menu">
          <li>
            <router-link to="/" exact class="router-link">Home</router-link>
          </li>
          <li>
            <router-link :to="'/workhistory/Brian'" class="router-link"
              >Work History</router-link
            >
          </li>
          <li>
            <router-link :to="'/Recommendations/Brian'" class="router-link"
              >Recommendations</router-link
            >
          </li>
          <li>
            <router-link :to="'/education/Brian'" class="router-link"
              >Education</router-link
            >
          </li>
          <li>
            <router-link :to="'/contact/Brian'" class="router-link"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>

    <router-view />
  </main>

  <footer>
    <p>Copyright © 2024 Site built with Vue.Js</p>
  </footer>
</template>
