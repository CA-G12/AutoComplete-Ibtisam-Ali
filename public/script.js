const searchInput = document.querySelector('.search-input')
const suggestionsContainer = document.querySelector('.suggestions-container');
const coinsContainer = document.querySelector('.coins-container');


searchInput.addEventListener('keyup', () => {
    fetch(`/search/${searchInput.value}`, 'GET', renderSuggestedCoins)
})

const renderSuggestedCoins = (data) => {
    suggestionsContainer.textContent = '';
    data.forEach(coin => {
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'suggestions-list');
        suggestionsContainer.appendChild(ul);
        ul.addEventListener('click', () => {
            // console.log(coinName.textContent);
            const url = `https://api.coincap.io/v2/assets/${privateCoinID.textContent.toLowerCase()}`;
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
        symbol.textContent = coin.Symbol;
        li.appendChild(symbol);

        const coinName = document.createElement('span');
        coinName.setAttribute('class', 'span');
        coinName.textContent = coin.name;
        li.appendChild(coinName);

        // only for using id in search query, rather than writing long, complicated lines of code.
        const privateCoinID = document.createElement('span');
        privateCoinID.style.display = 'none';
        privateCoinID.textContent = coin.id;
        li.appendChild(privateCoinID);
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



const renderSelectedCoin = (data) => {
    console.log(1, data);
    coinsContainer.innerHTML =
        `
        <div class="box">
            <div class="head-box">
                <div class="img-title">
                    <img src="./assets/images.png">
                    <p class="name">${data.data.name}<span>${data.data.symbol}</span></p>
                </div>
                <p class="percent-change-coin">${data.data.changePercent24Hr.toString().split('.')[0]}%</p>
            </div>
            <div class="content-box">
                <div class="coin-details">
                    <p>${data.data.marketCapUsd.toString().split('.')[0]}$</p><span>Market Cap</span>
                </div>
                <div class="coin-details">
                    <p>${data.data.priceUsd.toString().split('.')[0]}.${data.data.priceUsd.toString().split('.')[1].slice(0, 2)}$</p><span>Price</span>
                </div>
                <div class="coin-details">
                    <p>${data.data.volumeUsd24Hr.toString().split('.')[0]}$</p><span>Volume</span>
                </div>
            </div>
        </div>
        `
}

