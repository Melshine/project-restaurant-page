const about = {
  title: "About Us",
  address: "42 Rue du Goût, 75005 Paris, France",
  phone: "+33 1 23 45 67 89"
}

export default function createAbout(){
    const content = document.querySelector('#content')

    const h1 = document.createElement('h1')
    h1.textContent = 'About us'

    const address = document.createElement('p')
    address.textContent = "Address: " + about.address

    const phone = document.createElement('p')
    phone.textContent = "Phone: " + about.phone;

    [h1, address, phone].forEach(element=>{
        content.appendChild(element)
    })
}