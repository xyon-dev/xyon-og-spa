import { homepage } from "./home-page.js";

const main = document.getElementById("main");
let content = () => { main.innerHTML = homepage("Terence"); };
content();