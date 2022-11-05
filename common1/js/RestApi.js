class RestApi {
    #baseUrl = null;
    constructor(url) {
        this.#baseUrl = url;
    }

    getList() {
        return fetch(this.#baseUrl).then((res) => res.json());
    }

    getOne(id) {
        return fetch(this.#baseUrl + id).then((res) => res.json());
    }

    create(obj) {
        return fetch(this.#baseUrl, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }

    update(obj) {
        return fetch(this.#baseUrl + obj.id, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());
    }

    delete(id) {
        return fetch(this.#baseUrl + id, {
            method: 'DELETE',
        }).then((res) => res.json());
    }
}