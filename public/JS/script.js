searchInput.addEventListener('keyup', () => {
    fetch(`/search/${searchInput.value}`, 'GET', renderSuggestedCoins)
})

window.addEventListener('load', () => {
    window.setTimeout(() => {
      spinner.style.opacity = '0';
      spinner.style.display = 'none';
    }, 2000);
});