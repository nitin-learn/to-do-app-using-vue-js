import './assets/main.css'

const app = Vue.createApp({
    el: "#app",
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
        }
    },
})

app.mount('#app')

