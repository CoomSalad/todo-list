const renderHome = () => {
    const coverLink = "https://static.wikia.nocookie.net/8959015c-1a75-47b7-9336-d8e8d35ab3fe/scale-to-width/755";

    const content = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("class", "home");

    const headerPri = document.createElement("h1");
    headerPri.textContent = "Welcome to B. S. Caf !!e̷̗̮̓";
    const headerSec = document.createElement("h2");
    headerSec.textContent = "A foodplace for ture BIG SHOTS !!";
    const cover = document.createElement("img");
    cover.setAttribute("src", coverLink);
    cover.setAttribute("alt", "Pipis.");


    homeDiv.appendChild(headerPri);
    homeDiv.appendChild(headerSec);
    homeDiv.appendChild(cover);

    content.appendChild(homeDiv);
}

export { renderHome };