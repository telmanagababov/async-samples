const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const JSON_URI = 'https://jsonplaceholder.typicode.com/posts/10';

fetchJSON(JSON_URI)
    .then(data => data.title)
    .then(title => {
        console.log('title:', title);
    });

function fetchJSON(uri) {
    return new Promise(resolve => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
        };
        xhr.open("GET", uri);
        xhr.send();
    });
}