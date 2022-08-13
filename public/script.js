const searchInput = document.querySelector('.search-input')
const suggestionsContainer = document.querySelector('.suggestions-container');

searchInput.addEventListener('keyup', () => {
    fetch(`/search/${searchInput.value}`, 'GET', renderSuggestedCoins)
})

const renderSuggestedCoins = (data) => {
    suggestionsContainer.textContent = '';
    data.forEach(coin => {
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'suggestions-list');
        suggestionsContainer.appendChild(ul);

        const li = document.createElement('li');
        li.setAttribute('class', 'suggestion-item');
        ul.appendChild(li);

        const img = document.createElement('img');
        img.setAttribute('class', 'img');
        img.setAttribute('src', './assets/images.png');
        li.appendChild(img);

        const symbol = document.createElement('span');
        symbol.setAttribute('class', 'span')
        symbol.textContent= coin.Symbol;
        li.appendChild(symbol);

        const name = document.createElement('span');
        name.setAttribute('class', 'span');
        name.textContent= coin.name;
        li.appendChild(name);
    })
}



// const suggestedCoins = document.querySelectorAll('.single-suggestion');
// suggestedCoins.forEach(singleSuggestion => {
//     singleSuggestion.addEventListener('click', (e) => {
//         fetch(url, 'GET', selectCoin, e.target.value)
//     })
// })

// const selectCoin = (data, value) => {
//     const selectedCoin = data.find(coin => coin.name.toLowerCase().includes(value.toLowerCase()));
//     renderSelectedCoin(selectedCoin);
// }

// const renderSelectedCoin = (data) => {
//     console.log('selected coin is ready to be rendered:', data);
// }

