async function fetchAPI() {
  console.log("inside function: 1");
  let response = await fetch("https://api.github.com/users");
  console.log("inside function: 2");
  let result = await response.json();
  console.log("inside function: 3");
  console.log(result);
}
fetchAPI();
console.log("1");
