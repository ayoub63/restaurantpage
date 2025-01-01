import chicken from "./assets/menu/chickenburger.png"
import nuggets from "./assets/menu/nuggets.png"
import salad from "./assets/menu/salad.png"
import shake from "./assets/menu/shake.png"
import sides from "./assets/menu/sides.png"
import spicy from "./assets/menu/spicy.png"
import treat from "./assets/menu/treat.png"


export function menu () {
    const div = document.getElementById("content")

    const html = `

          <div class="menu-div">
    
          <div id = "largeitem" class="menu-card">
          <img src="${chicken}" alt="chickbowl" class="menu-img">
          <div class="lower-menu">
          <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
          <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
          
          <button class="lower-btn">Gimme!</button>     
          </div>
          </div>

          <div class="card-container">
          <div class="menu-card">
          <img src="${nuggets}" alt="chickbowl" class="menu-img">
          <div class="lower-menu">
         <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
          <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
          <button class="lower-btn">Gimme!</button>     
          </div>
          </div>
    
           <div class="menu-card">
          <img src="${salad}" alt="chickbowl" class="menu-img">
          <div class="lower-menu">
        <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
          <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
          <button class="lower-btn">Gimme!</button>     
          </div>
          </div>
          </div>
        
          
         <div class="card-container"> 
        <div class="menu-card">
        <img src="${shake}" alt="chickbowl" class="menu-img">
        <div class="lower-menu">
        <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
        <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p>
        <button class="lower-btn">Gimme!</button>     
</div>
        </div>
        </div>
    
        <div class="menu-card">
        <img src="${sides}" alt="chickbowl" class="menu-img">
        <div class="lower-menu">
        <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
        <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
        <button class="lower-btn">Gimme!</button>     
        </div>
        </div>
        </div>

         <div class="card-container"> 
        <div class="menu-card">
        <img src="${spicy}" alt="chickbowl" class="menu-img">
        <div class="lower-menu">
        <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
        <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
        <button class="lower-btn">Gimme!</button>     
        </div>
        </div>

        <div class="menu-card">
        <img src="${treat}" alt="chickbowl" class="menu-img">
        <div class="lower-menu">
        <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
        <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
        <button class="lower-btn">Gimme!</button>     
        </div>
        </div>
        </div>
        </div>

`
    div.innerHTML = html
}