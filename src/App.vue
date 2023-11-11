<style>
body {
  font-family: Arial, sans-serif;
}

header {
  background: var(--primary-color);
  color: #fff;
  padding: 10px 0;
  padding-bottom: 0px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100vw;
  margin-top: 0px;
  /* Horizontal offset, Vertical offset, Blur radius, Spread radius, Color */
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(
    to bottom,
    var(--primary-color),
    rgb(2, 108, 136)
  );
}

main {
  padding: 10rem 10rem 1rem 10rem;
}

.menu-container {
  background: var(--secondary-color);
  padding: 10px 10px;
  border-radius: 10px 10px 0px 0px;
  width: 95%;
  margin: 0px 20px 0px;
  /* Horizontal offset, Vertical offset, Blur radius, Spread radius, Color */
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

/* Use a more specific selector to target router-link elements */
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
  /* Add the same style for the active state */
  transform: scaleX(1);
}

.hamburger {
  display: none;
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

@media (max-width: 1400px) {
  nav ul {
    display: none;
  }

  nav ul li {
    display: block;
    padding: 20px 0;
    font-size: 1.5rem;
  }
  main {
    padding: 10rem 1rem 1rem 1rem;
  }
  .menu-visible {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--primary-color);
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0);
    }
  }

  .hamburger,
  .menu-visible {
    display: flex;
  }
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
</style>

<template>
  <header>
    <MyName name="Brian VanPortfleet" />

    <div class="menu-container">
      <div class="hamburger" onclick="toggleMenu()">
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
    <!-- <h2>About Brian VanPortfleet</h2> -->
    <!-- <HelloWorld msg="Hey dude"/> -->
    <router-view />
  </main>

  <footer>
    <p>Copyright © 2023</p>
  </footer>
</template>

<script setup>
import MyName from "./components/Includes/MyName.vue";

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("menu-visible")) {
    menu.classList.remove("menu-visible");
  } else {
    menu.classList.add("menu-visible");
  }
}

const menuLinks = document.querySelectorAll("#menu li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
</script>
