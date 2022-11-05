class TodosListView {
    el = null;
    #config = null;

    static CLASSES = {
        TASK_ITEM_CLASS: 'task-item',
        DELETE_BTN_CLASS: 'delete-btn',
        TASK_DONE_CLASS: 'done',
    };

    static todoITemTemplate = `
             <div class="task-item {{doneClass}}" data-todo-id="{{id}}">
                {{title}}
                <span class="delete-btn">x</span>
            </div>
    `;

    static generateTodoItemHtml({ id, title, isDone }) {
        return TodosListView.todoITemTemplate
            .replaceAll('{{title}}', title)
            .replaceAll(
                '{{doneClass}}',
                isDone ? TodosListView.CLASSES.TASK_DONE_CLASS : ''
            )
            .replaceAll('{{id}}', id);
    }

    static getTodoId(el) {
        const parent = el.closest('.' + TodosListView.CLASSES.TASK_ITEM_CLASS);
        return parent ? parent.dataset.todoId : null;
    }

    constructor(config) {
        this.#initView();
        this.#config = config;
    }

    #initView() {
        this.el = document.createElement('div');
        this.el.className = 'task-list u-full-width';
        this.el.addEventListener('click', (e) => {
            const todoId = TodosListView.getTodoId(e.target);

            switch (true) {
                case e.target.classList.contains(
                    TodosListView.CLASSES.DELETE_BTN_CLASS
                ):
                    return this.deleteTodo(todoId);
                case e.target.classList.contains(
                    TodosListView.CLASSES.TASK_ITEM_CLASS
                ):
                    return this.toggleTodo(todoId);
            }
        });
    }

    renderList(list) {
        this.el.innerHTML = list
            .map(TodosListView.generateTodoItemHtml)
            .join('');
    }

    deleteTodo(id) {
        this.#config.onDelete(id);
    }

    toggleTodo(id) {
        this.#config.onToggle(id);
    }
}