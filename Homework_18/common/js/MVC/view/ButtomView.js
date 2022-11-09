class ButtomView {
    static buttomTemplate = `
            <div class="btn-item">
            <button>Add Sticker</button>
            </div>
    `;

    #config = null;

    constructor(config) {
        this.#config = config;
        this.#initView();
    }

    #initView() {
        this.$el = $(ButtomView.buttomTemplate);

        this.$el.on('click', (e) => {
            e.preventDefault();
            this.#config.onSave();
        });
    }
}
