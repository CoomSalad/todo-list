import "./style.css";
import { initPage, clearPage } from "./initpage.js";
import { renderHome } from "./homepage.js";
import { renderMenu } from "./menupage.js";
import { renderContact } from "./contactpage.js";

const renderPage = (renderer) => {
    clearPage();
    renderer();
}

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", function() { renderPage(renderHome); });
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function() { renderPage(renderMenu); });
const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", function() { renderPage(renderContact); });

initPage();