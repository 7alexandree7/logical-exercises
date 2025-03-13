//Dado um objeto,
//transforme-o em uma query string para URL.

const params = { search: "mouse", category: "electronics", sort: "asc" };
const removeObject = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&")

console.log(removeObject)

// TODO: Converter para "search=mouse&category=electronics&sort=asc"