class TodosFormView {
    el=null;
    #config = null;
    taskNameInput = null;
    static formTemplate =
                        `<form id="newTaskForm">
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
    
    constructor(config){
        this.init();
        this.#config = config;
    }
    init(){
        this.el = document.createElement('div');
        this.el.innerHTML=TodosFormView.formTemplate;
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            this.taskNameInput = document.querySelector('#taskNameInput');
            const newTask = this.getFormValues();
            newTask.completed = false;
            this.#config.onSave(newTask)
            this.resetForm();
        });
    }

    getFormValues() {
        return {
            title: this.taskNameInput.value,
        };
    }

    resetForm() {
        this.taskNameInput.value = '';
    }
}