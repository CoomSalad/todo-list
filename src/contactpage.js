const renderContact = () => {
    const content = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact");
    contactDiv.textContent = "Contact here.";

    content.appendChild(contactDiv);
}

export { renderContact };