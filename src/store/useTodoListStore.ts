import { defineStore } from "pinia";

/**
 * Defines the ToDoItem interface to specify the structure of todo items.
 */
interface ToDoItem {
  item: string;
  id: number;
  completed: boolean;
  deleted: boolean;
}

/**
 * Exported useTodoListStore defines the store for managing todo list state and actions.
 */
export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [] as ToDoItem[],
    id: 0,
    showAlert: false,
    deleted: false,
  }),
  actions: {
    addTodo(item: string) {
      this.todoList.push({
        item,
        id: this.id++,
        completed: false,
        deleted: false,
      });
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },
    deleteTodo(itemID: number) {
      const deletedItem = this.todoList.find((todo) => todo.id === itemID);
      if (deletedItem) {
        deletedItem.deleted = !deletedItem.deleted;
        localStorage.setItem("todos", JSON.stringify(this.todoList));
      }
    },
    confirmDeleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((todo) => todo.id !== itemID);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },
    undoDelete(itemID: number) {
      const deletedItem = this.todoList.find((todo) => todo.id === itemID);
      if (deletedItem) {
        deletedItem.deleted = !deletedItem.deleted;
        localStorage.setItem("todos", JSON.stringify(this.todoList));
      }
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    inputAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000);
    },
  },
});
