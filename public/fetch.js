const fetch = (url, method, value, callback)=>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                callback(data);
            }
        } 
        else {
            console.log('error')
        }
    }
    xhr.open(method, url);
    xhr.send();
}