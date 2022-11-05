class TodosFormView {
    el=null;
    #config = null;
    taskNameInput = document.querySelector('#taskNameInput');
    constructor(config){
        this.init();
        this.#config = config;
    }
    static getFormValues() {
        return {
            title: taskNameInput.value,
        };
    }
    static resetForm() {
        taskNameInput.value = '';
    }
    
    init(){
        this.el = document.createElement('div');
        this.el.innerHTML=`<form id="newTaskForm">
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
        this.el.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = TodosFormView.getFormValues();
        newTask.completed = false;
        this.#config.onSave(newTask)
        TodosFormView.resetForm();
        });
    }
}