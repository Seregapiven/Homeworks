class TodosController {
    #collection = null;
    #listView = null;
    form=null;

    constructor(container) {

        this.#listView = new TodosListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.deleteTodo(id),
        });
        container.append(this.#listView.el);

        this.#collection = new TodosCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list);
        });
        this.form=new TodosFormView({
            onSave:(newTask)=>this.saveNewTodo(newTask)
        });
        container.append(this.form.el) 
    } 
    toggleTodo(id) {
        this.#collection.toggleTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    deleteTodo(id) {
        this.#collection.deleteTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    saveNewTodo(newTask) { this.#collection.saveNewTodo(newTask).then(() => {
        this.#listView.renderList(this.#collection.list);
    })
}
}