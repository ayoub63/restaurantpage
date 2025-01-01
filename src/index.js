import {homepage} from "./home.js"
import {about} from "./about.js"
import "./style.css";

const content = document.getElementById("content")
document.addEventListener("DOMContentLoaded", homepage);
const btn = document.querySelector("#about")

btn.addEventListener("click", function () {
    content.innerHTML = ""
    about()
})