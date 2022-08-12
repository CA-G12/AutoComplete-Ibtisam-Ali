const searchInput = document.querySelector('.search-input')
searchInput.addEventListener('keyup', () => {
    console.log(`/search/${searchInput.value}`);
    fetch(`/search/${searchInput.value}`, 'GET')
})

// const renderSuggestions = (data) => {
//     console.log(data);
// }

// const renderSelectedResult = () => {

// }

