// This code is part of a Vue 3 application that uses the Pinia state management library.
// The code starts by importing the createApp and createPinia functions from the "vue" and "pinia" libraries, respectively.
// It then creates an instance of the App component and mounts it to the element with the id of "app".
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
