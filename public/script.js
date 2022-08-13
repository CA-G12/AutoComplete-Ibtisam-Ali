const searchInput = document.querySelector('.search-input')
searchInput.addEventListener('keyup', () => {
    console.log(`/search/${searchInput.value}`);
    fetch(`/search/${searchInput.value}`, 'GET', renderSuggestedCoins)
})

const suggestionContainer = document.querySelector('.suggestions-container')
const renderSuggestedCoins = (data) => {
   
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

