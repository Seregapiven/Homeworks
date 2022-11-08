class StickerListView {
    $el = null;
    #config = null;

    static CLASSES = {
        STICKER_ITEM_CLASS: 'sticker-item',
        DELETE_BTN_CLASS: 'add-btn',
    };

    static listTemplate = `
        <div></div>
    `;

    static stickerTemplate = `
             <div class="sticker-item" data-todo-id="{{id}}">
                <span class="add-btn">[x]</span>
                <textarea class="area-item"  cols="12"> {{description}} </textarea>
            </div>
    `;

    static generateStickerItemHtml({ id, description}) {
        return StickerListView.stickerTemplate
            .replaceAll('{{description}}', description)
            .replaceAll('{{id}}', id);
    }

    static getStickerId(el) {
        const parent = el.closest('.' + StickerListView.CLASSES.STICKER_ITEM_CLASS);

        return parent ? parent.dataset.todoId : null;
    }

    constructor(config) {
        this.#initView();

        this.#config = config;
    }

    #initView() {
        this.$el = $(StickerListView.listTemplate);
        this.$el.on('click', (e) => {
            const todoId = StickerListView.getStickerId(e.target);
          
                if( e.target.classList.contains(
                    StickerListView.CLASSES.DELETE_BTN_CLASS
                )){
                    return this.deleteSticker(todoId);
                }
            });
        
        this.$el.on('change',(e)=>{
            const stickerContent=e.target.value;
            const todoId = StickerListView.getStickerId(e.target);
            return this.changeSticker(todoId, stickerContent);
        });
    
     }
    
    renderList(list) {
        this.$el.html(list.map(StickerListView.generateStickerItemHtml).join(''));
    }
    changeSticker(id, stickerContent){
         this.#config.onUpdate(id, stickerContent);
    }

    deleteSticker(id) {
        this.#config.onDelete(id); 
    }
}