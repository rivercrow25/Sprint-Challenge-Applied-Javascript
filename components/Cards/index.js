// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CreateCard(object) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgcon = document.createElement('div')
    const img = document.createElement('img')
    const authorname = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgcon.classList.add('img-container')

    card.append(headline)
    card.append(author)
    author.append(imgcon)
    imgcon.append(img)
    author.append(authorname)

    headline.textContent = object.headline
    img.src = object.authorPhoto
    authorname.textContent = `By ${object.authorName}`

    return card
}

const cards = document.querySelector('.cards-container')

const javascript = []
const bootstrap = []
const technology = []
const jquery = []
const node = []

axios.get(' https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        response.data.articles.node.forEach(item => {
            node.push(item)
        })

        response.data.articles.jquery.forEach(item => {
            jquery.push(item)
        })

        response.data.articles.technology.forEach(item => {
            technology.push(item)
        })

        console.log(response.data.articles)
        response.data.articles.bootstrap.forEach(item => {
            bootstrap.push(item)
        })

        response.data.articles.javascript.forEach(item => {
            javascript.push(item)
        })
        console.log(javascript)
        console.log(bootstrap)
        console.log(technology)
        console.log(jquery)
        console.log(node)

        javascript.map(item => {
            cards.append(CreateCard(item))
        })

        bootstrap.map(item => {
            cards.append(CreateCard(item))
        })

        technology.map(item => {
            cards.append(CreateCard(item))
        })

        jquery.map(item => {
            cards.append(CreateCard(item))
        })

        node.map(item => {
            cards.append(CreateCard(item))
        })
    })
