import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/router.js";

const app = createApp(App);

// Use the router with your app instance
app.use(router);

app.mount("#app");
