const functions = require('firebase-functions');

// http rquest 1
exports.randomNumber = functions.https.onRequest((request, response) => {
    const number = Math.round(Math.random() * 100);
    response.send(number.toString());
})

// http rquest 2
exports.toTheDojo = functions.https.onRequest((request, response) => {
    response.redirect('https://www.thenetninja.co.uk');
})

// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
    const name = data.name;
    return `hello, ${name}!! :) `;
})