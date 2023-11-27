<template>
  <div v-for="todo in todoList" :key="todo.id" class="list">
    <div v-if="todo.deleted === false" class="item">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div>
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
  <h1 v-if="todoList.length > 0">deleted</h1>
  <div v-for="todo in todoList" :key="todo.id" class="list">
    <div class="item" v-if="todo.deleted === true">
      <span>{{ todo.item }}</span>
      <div>
        <span @click="confirmDeleteTodo(todo.id)">&#10004;</span>
        <span @click="undoDelete(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTodoListStore } from "@/store/useTodoListStore";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const store = useTodoListStore();

    const { todoList } = storeToRefs(store);
    const { toggleCompleted, deleteTodo, undoDelete, confirmDeleteTodo } =
      store;

    return {
      todoList,
      toggleCompleted,
      deleteTodo,
      undoDelete,
      confirmDeleteTodo,
    };
  },
});
</script>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.list {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
</style>
