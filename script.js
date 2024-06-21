let cards = document.getElementById('cards')

let url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
.then((res) => res.json())
.then((data) => getuser((data)) ); 

function getuser(param) {

    console.log(param);
    for (const iterator of param ) {
        let card = document.createElement('div')
        let name = document.createElement('h4')
        let email = document.createElement('p')
        let body = document.createElement('p')

        name.innerHTML = iterator?.name
        email.innerHTML = iterator?.email
        body.innerHTML = iterator?.body

        card.classList.add('cards')
        cards.classList.add('cardss')

        card.appendChild(name)
        card.appendChild(email)
        card.appendChild(body)
        cards.appendChild(card)
        


    }
}