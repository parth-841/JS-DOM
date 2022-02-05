let addressElement = document.querySelector(".address");
let writingElement = document.querySelector(".writing");
let outputElement = document.querySelector(".output");

addressElement.addEventListener("input", () => {
  writingElement.textContent = "Changing...";
});

let hideButton = document.querySelector(".hide-btn");
let hideElement = document.querySelector(".hide-elem");
hideElement.hidden = true;

addressElement.addEventListener("blur", () => {
  writingElement.textContent = "";
  outputElement.innerHTML = addressElement.value;
  hideElement.hidden = false;
});

hideButton.addEventListener("click", () => {
  hideElement.hidden = !hideElement.hidden;
});

let submitBtn = document.querySelector(".submit-btn");
let formOutput = document.querySelector(".form-output");

formOutput.hidden = true;

submitBtn.addEventListener("click", (event) => {
  formOutput.hidden = false;
  formOutput.innerHTML += `<pre>
Name: ${myForm.name.value},
Email: ${myForm.email.value},
Gender: ${myForm.gender.value}
    </pre>`;
  event.preventDefault();
});

let btnClear = document.querySelector(".btn-clear");
btnClear.addEventListener("click", () => {
  formOutput.innerHTML = "";
  formOutput.hidden = true;
});
