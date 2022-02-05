// Promise
function callPromise() {
  return new Promise((resolve, reject) => {
    let error = false;
    if (error) {
      reject("Error!!!");
    } else {
      resolve("Success");
    }
  });
}
let solution = callPromise();
solution.then(
  function (successMessage) {
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

// fetchAPI
function fetchAPI() {
  fetch("https://api.github.com/users")
    .then(
      (response) => {
        return response.json();
      },
      () => {
        console.log("invalid fetch URL");
      }
    )
    .then(
      (result) => {
        console.log(result);
      },
      () => {
        console.log("Json Error");
      }
    );
}

fetchAPI();
