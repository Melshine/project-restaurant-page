import burgerImg from "./images/burger.jpg";
import './styles/pageLoad.css'

export default function createHome(){
    const content = document.querySelector('#content');

    const h1 = document.createElement('h1');
    h1.textContent = "Welcome to Burger Restaurant";

    const img = document.createElement("img");
    img.src = burgerImg;
    img.alt = "burger";
    img.width = 300;

    const p = document.createElement('p')
    p.textContent = "Our restaurant suggests the most delicious burgers of the town, come here, take a seat and just enjoy our tasty burgers.";

    [h1, img, p].forEach(element => content.appendChild(element));
}

createHome()
