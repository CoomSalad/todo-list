const renderMenu = () => {
    const content = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menu");
    menuDiv.textContent = "Menu here.";

    content.appendChild(menuDiv);
}

export { renderMenu };