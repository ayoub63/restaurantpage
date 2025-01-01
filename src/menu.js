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
    <div class="menu-container">


    <h1> KFC - Kentucky Menu</h1>
    <p>Availability may differ at different locations</p>



    <div class="large-item">
    <img src = "${chicken}" alt="Chicken Burger">


    <div class="right-side">
    <div class="right-top">
    <h2>Classics</h2>
    <p>From our original KFC Chicken Sandwich to our KFC® 
    Nuggets and more, we have something for everyone.</p>
    <button>View All Classics</button>
    </div>
    
    <div class="right-bottom">
    <div class="right-mini-one">
    <img src="${nuggets}" alt="" class="mini-img">
    <div class = "mini-mini">
    <h3 class="mini-header">Nuggets</h3>
    <button class="">Order now</button>
    </div>
    </div>

    <div class="right-mini-one">
    <img src="${spicy}" alt="spicy" class="mini-img">
    <div class = "mini-mini"> <h3 class="mini-header">Spicy Chicken Burger</h3>
    <button class="">Order now</button></div>
   </div>
    </div>
    </div>


    </div>

    <div class="itemgrid">

    <div class="item">
    <img src="${salad}" alt="">
    <h3>Salads</h3>
    <p>Go green with these options, prepared fresh daily, 
    and perk them up with our variety of dressings.</p>
    <button>View All Classics</button>
    </div>
    
    
    <div class="item">
    <img src="${sides}" alt="">
    <h3>Salads</h3>
    <p>Go green with these options, prepared fresh daily, 
    and perk them up with our variety of dressings.</p>
    <button>View All Classics</button>
    </div>
    
    </div>



    <div class="itemgrid">

    <div class="item">
    <img src="${shake}" alt="">
    <h3>Salads</h3>
    <p>Go green with these options, prepared fresh daily, 
    and perk them up with our variety of dressings.</p>
    <button>View All Classics</button>
    </div>
    
    
    <div class="item">
    <img src="${treat}" alt="">
    <h3>Salads</h3>
    <p>Go green with these options, prepared fresh daily, 
    and perk them up with our variety of dressings.</p>
    <button>View All Classics</button>
    </div>
    
    </div>
     </div>     
`
    div.innerHTML = html
}