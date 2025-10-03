const menu = [
    {
        name: 'classic',
        items: [
            {
                name: 'cheeseburger original',
                description: 'crispy bun with beef and bacon smoked sauce and melted cheese',
                price: 9
            },
            {
                name: 'double beef deluxe',
                description: 'two juicy beef patties, cheddar, lettuce, tomato, and house sauce',
                price: 11
            },
            {
                name: 'bbq bacon burger',
                description: 'grilled beef with crispy bacon, smoky BBQ sauce, and onion rings',
                price: 10
            },
            {
                name: 'veggie classic',
                description: 'grilled veggie patty with lettuce, tomato, pickles, and vegan mayo',
                price: 8
            },
            {
                name: 'spicy beef crunch',
                description: 'beef patty with jalapeños, spicy chipotle sauce, and pepper jack cheese',
                price: 9.5
            }
        ]
    },
    {
        name: 'chicken',
        items: [
            {
                name: 'chicken legend',
                description: 'crispy bun with chicken fillet, lettuce, and creamy garlic sauce',
                price: 9
            },
            {
                name: 'spicy chicken melt',
                description: 'spicy breaded chicken, cheddar cheese, and hot mayo',
                price: 9.5
            },
            {
                name: 'grilled chicken club',
                description: 'grilled chicken breast, bacon, lettuce, tomato, and ranch dressing',
                price: 10
            },
            {
                name: 'chicken tenders box',
                description: '5 crispy chicken tenders served with dipping sauces',
                price: 7.5
            },
            {
                name: 'buffalo chicken burger',
                description: 'fried chicken tossed in buffalo sauce with blue cheese dressing',
                price: 9.5
            }
        ]
    },
    {
        name: 'drinks',
        items: [
            {
                name: 'cola',
                description: 'classic fizzy cola served chilled',
                price: 2.5
            },
            {
                name: 'lemon iced tea',
                description: 'refreshing lemon-flavored iced tea',
                price: 2.8
            },
            {
                name: 'sparkling water',
                description: 'carbonated mineral water',
                price: 2
            },
            {
                name: 'vanilla milkshake',
                description: 'creamy vanilla shake topped with whipped cream',
                price: 4
            },
            {
                name: 'mango smoothie',
                description: 'blended mango and yogurt smoothie',
                price: 4.5
            }
        ]
    },
    {
        name: 'desserts',
        items: [
            {
                name: 'chocolate brownie',
                description: 'rich chocolate brownie with a gooey center',
                price: 3.5
            },
            {
                name: 'apple pie',
                description: 'warm apple pie with cinnamon and flaky crust',
                price: 3
            },
            {
                name: 'ice cream sundae',
                description: 'vanilla ice cream with chocolate syrup and nuts',
                price: 4
            },
            {
                name: 'cheesecake slice',
                description: 'classic New York-style cheesecake',
                price: 4.5
            },
            {
                name: 'cookie duo',
                description: 'two freshly baked chocolate chip cookies',
                price: 2.5
            }
        ]
    }
]


export function createMenu(){
    const content = document.querySelector('#content')

    const h1 = document.createElement('h1')
    h1.textContent = 'Discover our menu'

    const menuDiv = document.createElement('div')

    menu.forEach(category => {
        const h2 = document.createElement('h2');
        h2.textContent = category.name;

        const ul = document.createElement('ul')
        category.items.forEach(item =>{
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const price = document.createElement('span');

            h3.textContent = item.name;
            p.textContent = item.description;
            price.textContent = item.price + '$';

            [h3, p, price].forEach(element => 
                li.appendChild(element)
            )

            ul.appendChild(li);

        })

        menuDiv.appendChild(h2)
        menuDiv.appendChild(ul);

    })

    content.appendChild(h1);
    content.appendChild(menuDiv);
}