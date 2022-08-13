const fetch = (url, method, callback, value) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('yeah its fetching!');
            const data = JSON.parse(xhr.responseText);
            callback(data, value);
        }
        else {
            console.log('Fetch Error')
        }
    }
    xhr.open(method, url);
    xhr.send();
}
