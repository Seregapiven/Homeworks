class TodosFormView {
    el=null;
    #config = null;
    taskNameInput = document.querySelector('#taskNameInput');
    static formTemplate=`<form id="newTaskForm">
    <div class="row">
        <div class="ten columns">
            <input
                type="text"
                id="taskNameInput"
                class="u-full-width"
            />  
        </div>
        <div class="two columns">
            <input type="submit" id="submitBtn" value="Add" />
        </div>
    </div>
</form>`;
    static getFormValues() {
        return {
            title: taskNameInput.value,
        };
    }
    static resetForm() {
        taskNameInput.value = '';
    }
    constructor(config){
        this.init();
        this.#config = config;
    }
    
    init(){
        this.el = document.createElement('div');
        this.el.innerHTML=TodosFormView.formTemplate;
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTask = TodosFormView.getFormValues();
            newTask.completed = false;
            this.#config.onSave(newTask)
            TodosFormView.resetForm();
        });
    }
}