<style scoped>
/* Apply styles to enhance form appearance */
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  font-size: larger;
  color: var(--secondary-color);
  margin: 20px 0px -40px 10px;
  z-index: 999;
}

input[type="text"],
input[type="tel"],
input[type="email"],
textarea {
  padding: 10px;
  font-family: "Franklin Gothic light", "Arial Narrow", Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 30px;
  /* Horizontal offset, Vertical offset, Blur radius, Spread radius, Color */
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
}

button {
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background-color: var(--secondary-color);
}
.card {
  margin: 0 auto; /* Center horizontally */
}
</style>

<template>
  <div>
    <h1>Contact {{ userId }}</h1>
    <div class="card">
      <form @submit.prevent="submitForm" aria-labelledby="contactFormLabel">
        <div class="form-group">
          <!-- <label for="firstName">First Name:</label> -->
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            v-model="formData.firstName"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <!-- <label for="lastName">Last Name:</label> -->
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            v-model="formData.lastName"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <!-- <label for="company">Company:</label> -->
          <input
            type="text"
            id="company"
            placeholder="Company"
            v-model="formData.company"
          />
        </div>
        <div class="form-group">
          <!-- <label for="phone">Phone:</label> -->
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            :value="formData.phone"
            @input="formatPhone"
            @keydown="restrictInput"
            maxlength="14"
          />
        </div>
        <div class="form-group">
          <!-- <label for="email">Email:</label> -->
          <input
            type="email"
            id="email"
            placeholder="Email"
            v-model="formData.email"
            required
            aria-required="true"
          />
        </div>
        <div class="form-group">
          <!-- <label for="message">Message:</label> -->
          <textarea
            id="message"
            placeholder="Message"
            v-model="formData.message"
            required
            aria-required="true"
            style="height: 200px"
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { userId } = defineProps(["userId"]);

const formData = ref({
  firstName: "",
  lastName: "",
  company: "",
  phone: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form Data:", formData.value);
};

const formatPhone = (event) => {
  let input = event.target.value.replace(/\D/g, "").substring(0, 10); // Remove all non-digits and limit to 10

  let formatted = "";
  if (input.length > 0) {
    formatted = "(" + input.substring(0, Math.min(3, input.length));
  }
  if (input.length > 3) {
    formatted += ") " + input.substring(3, Math.min(6, input.length));
  }
  if (input.length > 6) {
    formatted += "-" + input.substring(6, Math.min(10, input.length));
  }

  formData.value.phone = formatted;
};

const restrictInput = (event) => {
  let char = event.key;
  if (!/[\d\b]/.test(char)) {
    // Allow only numbers and the backspace key
    event.preventDefault();
  }
};
</script>
