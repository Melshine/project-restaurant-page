import createHome from "./page-load.js"
import {createMenu} from "./menu.js"
import createAbout from './about.js'
console.log("Restaurant page")

const content = document.querySelector('#content')

const homeButton = document.querySelector('button#home')
const menuButton = document.querySelector('button#menu')
const aboutButton = document.querySelector('button#about')

Array.from(document.querySelectorAll('button')).forEach(button=>{
    button.addEventListener('click', event =>{
    content.innerHTML = '' // empty the element
    })
})

menuButton.addEventListener('click', event=>{
    createMenu()
})

homeButton.addEventListener('click', event=>{
    createHome()
})

aboutButton.addEventListener('click', event=>{
    createAbout()
})