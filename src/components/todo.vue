<template>
    <form class="form-one" autocomplete="off" @submit.prevent="addToDo">
        <h1>{{ title }} {{ todotext}}</h1>



        <label for="todotext" class="form-label">Add your ToDo Here</label>
        <input type="text" class="form-control" v-model="todotext">
        <input type="submit" class="btn btn-primary" style="margin: 1rem auto;"  value="Add My ToDo">

    
    </form>

    <ul class="list-group">
    <li v-bind:class="{doneClass: todo.done}" class="list-group-item " v-for="todo in todos" :key="todo.id">
        <div class="todo"> 
        <p >{{todo.todotext}}</p>
        <input v-model="todo.done" class="form-check-input todo-buttons" type="checkbox" name="done" id="done">
        <button @click="deleteToDo(todo)" class="btn btn-danger todo-buttons">Delete</button>
        </div>
        </li>
    </ul>
</template>


<script setup>
const title = 'To Do App using Vue';
let id = 1;
let todotext = '';
let done = false;
let todos = [];

const props = defineProps({
	todotext: {
		type: String,
		default: ''
	}
});

const reset = () => {
	id++;
	todotext = '';
	done = false;
};

const addToDo = () => {
	console.log(todotext,done, todos)
	if (todotext) {
		todos.unshift({
			id,
			todotext,
			done,
		});
		reset();
	}
};

const deleteToDo = (todo) => {
	const idx = todos.indexOf(todo);
	todos.splice(idx, 1);
};
</script>