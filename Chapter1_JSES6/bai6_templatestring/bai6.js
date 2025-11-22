const baseUrl = "localhost:8080";
const api = "get-user";
fetch_page = 2;
const url = `${baseUrl}/${api}?page=${fetch_page}`;
console.log(url);