let cards = document.getElementById('cards')

let url = 'https://dummyjson.com/users'

fetch(url)
.then((res) => res.json())
.then((param) => getuser(param) ); 

function getuser(data) {
    //  getuser()
    console.log(data);
    for (const iterator of param ) {
        let card = document.createElement('div')
        let name = document.createElement('h1')
        let email = document.createElement('h3')
        let body = document.createElement('p')

        name.innerHTML = iterator?.firstName
        email.innerHTML = iterator?.lastName    
        body.innerHTML = iterator?.age

        card.classList.add('cards')
        cards.classList.add('cardss')

        card.appendChild(name)
        card.appendChild(email)
        card.appendChild(body)
        cards.appendChild(card) 
        
        filterdata()

    }
}
function filterdata() {
    fetch(url)
.then((res) => res.json())
.then((res) =>{
    let filter_users = res.users.filter((item) => item.age < 40)
} )
}
document.getElementById('btn').addEventListener('click',()=>{
    filterdata()
})