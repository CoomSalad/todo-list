import { renderHome } from "./homepage.js";

const initPage = () => { renderHome(); }

const clearPage = () => {
    const content = document.querySelector("#content");
    content.textContent = "";
}

export { initPage, clearPage };