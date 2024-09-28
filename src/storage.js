const Storage = (() => {
    const storageAvailable = (type) => {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    // public

    const updateStorage = (taskObjArr) => {
        if (storageAvailable("localStorage")) {
            localStorage.setItem("tasksData", JSON.stringify(taskObjArr));
        } else {
            // Too bad, no localStorage for us
        }
    }

    const loadStorage = () => {
        if (storageAvailable("localStorage") && JSON.parse(localStorage.getItem("tasksData"))) 
            return JSON.parse(localStorage.getItem("tasksData"));
        return [];
    }

    return { updateStorage, loadStorage }
})();

export { Storage };