const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const JSON_URI = 'https://jsonplaceholder.typicode.com/posts/10';

fetchJSON(JSON_URI, data => {
    console.log('data: ', data);
});

function fetchJSON(uri, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            callback(data);
        }
    };
    xhr.open("GET", uri);
    xhr.send();
}