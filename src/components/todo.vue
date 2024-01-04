<template>
    <form class="form-one" autocomplete="off" @submit.prevent="addToDo">
      <h1>{{ title }} {{ todotext }}</h1>
  
      <label for="todotext" class="form-label">Add your ToDo Here</label>
      <input :value="todotext" @input="updateValue" type="text" class="form-control">
  
      <input type="submit" class="btn btn-primary" style="margin: 1rem auto;" value="Add My ToDo">
    </form>
  
    <ul class="list-group">
      <li v-bind:class="{ doneClass: todo.done }" class="list-group-item" v-for="todo in todos" :key="todo.id">
        <div class="todo">
          <p>{{ todo.todotext }}</p>
          <input :value="todo.done" @input="updateDone" class="form-check-input todo-buttons" type="checkbox" name="done" id="done">
          <button @click="deleteToDo(todo)" class="btn btn-danger todo-buttons">Delete</button>
        </div>
      </li>
    </ul>
</template>
  
<script>
export default {
  data() {
        return{
            title: "To Do App using Vue",
            id: 1,
            todotext: '',
            done: false,
            todos: [],
        }
    },
    methods: {
        reset(){
            this.id++;
            this.todotext = '';
            this.done = false;
        },

        addToDo(){
            if(this.todotext){
                let todo = {
                    id: this.id,
                    todotext: this.todotext,
                    done: this.done,
                }
                console.log(todo)
                this.todos.unshift(todo);
                this.reset()
            }
        },
        deleteToDo(todo) {
            const idx = this.todos.indexOf(todo);
            this.todos.splice(idx, 1)
        },
        updateValue(event) {
            this.todotext = event.target.value;
        },
        updateDone(event) {
          this.todo.done = event.target.value;
        }

    },
}
</script>
