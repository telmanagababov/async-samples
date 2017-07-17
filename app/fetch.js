const fetch = require('node-fetch');
const JSON_URI = 'https://jsonplaceholder.typicode.com/posts/10';

fetch(JSON_URI)
    .then(response => response.json())
    .then(post => post.title)
    .then(title => {
        console.log('post title: ', title);
    });