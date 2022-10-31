const url = require('url');
const querystring = require('querystring');
const baseUrl = 'https://softuni.bg/about/code/?year=2017&month=february';

const parseUrl = url.parse(baseUrl);

console.log(parseUrl)

const qs = querystring.parse(parseUrl.query);
console.log(qs)