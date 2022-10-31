const url = require('url');

const baseUrl = 'https://softuni.bg/about';

const parseUrl = url.parse(baseUrl);

console.log(parseUrl)