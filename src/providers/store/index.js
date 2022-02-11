export class Store {
    set = (name, value) => {
        localStorage.setItem(name, value);
    }

    get = (name) => {
        return localStorage.getItem(name);
    }

    del = (name) => {
        localStorage.removeItem(name);
    }

    clear = () => {
        localStorage.clear();
    }
}