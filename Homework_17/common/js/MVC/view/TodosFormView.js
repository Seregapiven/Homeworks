class TodosFormView {
    el=null;
    #config = null;
    static formTemplate =
                        `<form>
                        <div class="row">
                            <div class="ten columns">
                                <input
                                    type="text"
                                    name = "title"
                                    class="u-full-width"
                                />  
                            </div>
                            <div class="two columns">
                                <input type="submit" value="Add" />
                            </div>
                        </div>
                        </form>`;
    
    constructor(config) {
        this.#config = config;
        this.init();
    }
    init(){
        this.el = htmlEl(TodosFormView.formTemplate);
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            const newTask = this.#getFormValues();
            newTask.completed = false;
            this.#config.onSave(newTask)
            this.resetForm();
        });
    }

    #getFormValues() {
        return {
            title: this.el.elements.title.value,
        };
    }

    resetForm() {
        this.el.elements.title.value = '';
    }
}
function htmlEl(html) {
    const container = document.createElement('div');
    container.innerHTML = html;
    return container.children[0];
}