class StickerController {
    #collection = null;
    #listView = null;
    #buttomView = null;

    constructor($container) {
        this.#buttomView = new ButtomView({
            onSave: (data) => this.saveSticker(data),
        });
        $container.append(this.#buttomView.$el);
        this.#listView = new StickerListView({
            onUpdate: (id, description) => this.updateSticker(id, description),
            onDelete: (id) => this.deleteSticker(id),
        });

        $container.append(this.#listView.$el);

        this.#collection = new StickerCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    updateSticker(id, stickerContent) {
        this.#collection.updateSticker(id, stickerContent).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    deleteSticker(id) {
        this.#collection.deleteSticker(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    saveSticker(data) {
        this.#collection.createSticker(data).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
}