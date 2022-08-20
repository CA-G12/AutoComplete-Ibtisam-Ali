const fetch = (url, method, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                callback(data);
            }
            else {
                callback(null);
            }
        }  
    }
    xhr.open(method, url); 
    xhr.send();
}
