const urlBase = 'https://www.fashiondays.bg/search/?q=Nike';

const url = require('url');
const queryString = require('querystring');

//console.log(url.parse(urlBase));
//console.log(queryString.parse(url.parse(urlBase).search));

//console.log(queryString.parse(url.parse(urlBase).query));

//console.log(url.format(urlBase))

const urlObj = new URL(urlBase);
console.log(urlObj.searchParams.values())
   

//console.log(urlObj.searchParams);


