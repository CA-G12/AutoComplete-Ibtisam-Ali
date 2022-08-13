const fetch = (url, method, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(data);
        }
        else {
            console.log('Fetch is not working!')
        }
    }
    xhr.open(method, url);
    xhr.send();
}
