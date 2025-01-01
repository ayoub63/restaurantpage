import {homepage} from "./home.js"
import {about} from "./about.js"
import {menu} from "./menu.js"
import "./style.css";

const content = document.getElementById("content")
document.addEventListener("DOMContentLoaded", homepage);
const btn = document.getElementById("about")

btn.addEventListener("click", function () {
    content.innerHTML = ""
    about()
})

const menu_btn = document.getElementById("menu")

menu_btn.addEventListener("click", function () {
    content.innerHTML = ""
    menu()
})