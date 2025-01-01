import chick_burger from "./assets/home/chickenburger.png" 
import chick_bowl from "./assets/home/chickenbowl.png"
import chick_foundation from "./assets/home/kfc_foundation.png"
import chick_table from "./assets/home/chicken.png"
import truck from "./assets/home/truck.png"
import bag from "./assets/home/bag.png"

export function homepage () {
    const content = document.getElementById('content');

    const html = `
      <div class="mid-section">
      <div class="btns">
        <button class="mid-btns"><img src="${bag}" alt="Logo" />Order Pickup</button>
        <button class="mid-btns"><img src="${truck}" alt="bag" />Order Delivery</button>
        </div>
      <img src="${chick_burger}" alt="chickenburger" class="img-mid"> 
      </div>

      <div class="lower">

      <div class="card">
      <img src="${chick_bowl}" alt="chickbowl" class="lower-img">
      <div class="lower-card">
      <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
      <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
      
      <button class="lower-btn">Gimme!</button>     
      </div>
      </div>

      <div class="card">
      <img src="${chick_table}" alt="chickbowl" class="lower-img">
      <div class="lower-card">
     <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
      <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
      <button class="lower-btn">Gimme!</button>     
      </div>
      </div>

       <div class="card">
      <img src="${chick_foundation}" alt="chickbowl" class="lower-img">
      <div class="lower-card">
    <div class="text"><h3>Get Everything Y’all Love Starting At $20</h3>
      <p>Because nothing beats quality time and quality food. Order your Festive Family Box today!</p></div>
      <button class="lower-btn">Gimme!</button>     
      </div>
      </div>
      
      </div>
    `;
  
    content.innerHTML = html;

   
}