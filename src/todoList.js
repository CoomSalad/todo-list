const todoList = (() => {
    const list = [];

    const getList = () => list;

    const pushTask = (task) => {
        list.push(task);
    }

    const popByIndex = (index) => {
        list.splice(index, 1);
    }

    return { getList, pushTask, popByIndex };
})();

export { todoList };