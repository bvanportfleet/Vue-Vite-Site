<script>
export default {
  name: "TodoFooter",

  props: ["remaining", "visibility", "todos"],
  emits: ["removeCompleted"],

  data: () => ({}),

  watch: {},

  mounted() {},

  computed: {},

  methods: {
    removeCompleted() {
      this.$emit("removeCompleted");
    },
  },
};
</script>

<template>
  <footer class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      <span>{{ remaining === 1 ? " item" : " items" }} left</span>
    </span>
    <ul class="filters">
      <li>
        <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: visibility === 'active' }"
          >Active</a
        >
      </li>
      <li>
        <a href="#/completed" :class="{ selected: visibility === 'completed' }"
          >Completed</a
        >
      </li>
    </ul>
    <button
      style="color: black"
      class="clear-completed"
      @click="removeCompleted"
      v-show="todos.length > remaining"
    >
      X
    </button>
  </footer>
</template>

<style scoped>
button {
  color: #000 important;
}
.filters {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.filters li {
  margin-right: 10px; /* Add space between items */
}

.filters a {
  padding: 10px 20px; /* Add padding to make it look like a box */
  border: 1px solid #ccc; /* Add border */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  color: black; /* Text color */
}

.filters a.selected {
  background-color: #ddd; /* Background color for selected item */
}
</style>
