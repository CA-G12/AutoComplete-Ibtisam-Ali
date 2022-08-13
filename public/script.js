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
        ul.addEventListener('click', () =>{
            // console.log(coinName.textContent);
            const url = `https://api.coincap.io/v2/assets/${coinName.textContent.toLowerCase()}`;
            fetch(url, 'GET', renderSelectedCoin)
        })

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

        const coinName = document.createElement('span');
        coinName.setAttribute('class', 'span');
        coinName.textContent= coin.name;
        li.appendChild(coinName);
    })
}

// function test(){
//     const suggestedCoins = Array.from(document.querySelectorAll('.suggestions-list'));
//     if(suggestedCoins){
//         suggestedCoins.forEach( singleSuggestion => {
//             singleSuggestion.addEventListener('click', (e) => {
//                 console.log(singleSuggestion);
//                 // fetch(url, 'GET', selectCoin, e.target.value)
//             })
//         })
// }
// }
// test();

// const selectCoin = (data) => {
//     console.log(data,111);
//     // const selectedCoin = data.find(coin => coin.name.toLowerCase().includes(value.toLowerCase()));
//     // renderSelectedCoin(selectedCoin);
// }

// const renderSelectedCoin = (data) => {
//     console.log('selected coin is ready to be rendered:', data);
// `<div class="box">
//             <div class="head-box">
//                 <div class="img-title">
//                     <img src="./assets/images.png">
//                     <p class="name">Bitcoin<span>BTC</span></p>
//                 </div>
//                 <p class="percent-change-coin">5.9400 %</p>
//             </div>
//             <div class="content-box">
//                 <div class="coin-details">
//                     <p>468.2B$</p><span>Market Cap</span>
//                 </div>
//                 <div class="coin-details">
//                     <p>24491.7$</p><span>Price</span>
//                 </div>
//                 <div class="coin-details">
//                     <p>17.5B$</p><span>Volume</span>
//                 </div>
//             </div>
//         </div>`
// }

