import App from "./App.svelte";
import todoItems from "./data/todo-items";

const app = new App({
  target: document.body,
  props: {
    todoItems,
  },
});

export default app;
