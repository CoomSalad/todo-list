import { todoList } from "./todoList.js";
import { createTask } from "./task.js";
import { Storage } from "./storage.js";

const DisplayController = (() => {
    const storeData = () => {
        Storage.updateStorage(todoList.getList());
    }

    const populateWithData = () => {
        const taskObjArr = Storage.loadStorage();
        console.log(taskObjArr);
        for (let taskObj of taskObjArr) {
            addTask(taskObj.title);
        }
    } 

    const makeAddTaskBtn = () => {
        const addTaskBtn = document.createElement("button");
        addTaskBtn.classList.add("add-task-btn");
        addTaskBtn.textContent = "+";
        addTaskBtn.onclick = function () {
            addTask(prompt());
        };
        return addTaskBtn;
    }

    const addTask = (taskName) => {
        const newTask = createTask(taskName);

        todoList.pushTask(newTask);

        const list = document.querySelector(".todolist .tasks");

        const newTaskDiv = document.createElement("div");
        newTaskDiv.classList.add("task");

        const newHeader = document.createElement("span");
        newHeader.textContent = newTask.title;

        const rmBtn = document.createElement("button");
        rmBtn.textContent = "done";
        rmBtn.onclick = () => {
            removeTask(newTaskDiv);
        };

        newTaskDiv.appendChild(newHeader);
        newTaskDiv.appendChild(rmBtn);
        list.appendChild(newTaskDiv);

        storeData();
    }

    const removeTask = (task) => {
        const list = document.querySelector(".todolist .tasks");

        const index = Array.prototype.indexOf.call(list, task);
        todoList.popByIndex(index);

        list.removeChild(task);

        storeData();
    }

    // public
    const init = () => {
        const content = document.querySelector("main");

        const todolistDiv = document.createElement("div");
        todolistDiv.classList.add("todolist");
        const tasksDiv = document.createElement("div");
        tasksDiv.classList.add("tasks");
        const addTaskBtn = makeAddTaskBtn();

        todolistDiv.appendChild(tasksDiv);
        todolistDiv.appendChild(addTaskBtn);
        content.appendChild(todolistDiv);

        populateWithData();
    }

    return { init }
})();

export { DisplayController };