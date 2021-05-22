import data from "./data.js";

console.clear();

const Question = document.getElementById("question");

const option_a = document.getElementById("a");
const option_b = document.getElementById("b");
const option_c = document.getElementById("c");
const option_d = document.getElementById("d");

const submit_button = document.getElementById("submit-button");

let count = 0;
const max_count = data.length;

// initial value
(() => {
  const { question, options } = data[count];

  Question.innerHTML = question;
  option_a.innerHTML = options[0];
  option_b.innerHTML = options[1];
  option_c.innerHTML = options[2];
  option_d.innerHTML = options[3];
})();

submit_button.addEventListener("click", () => {
  let { answer } = data[count];

  let result = document.getElementsByName("answer");

  if (result[answer].checked) {
    submit_button.innerHTML = "CORRECT";
    submit_button.className = "submit-button-correct";
  } else {
    submit_button.innerHTML = "INCORRECT";
    submit_button.className = "submit-button-incorrect";
  }

  count++;
  if (count == max_count) {
    count = 0;
  }
  setTimeout(() => {
    submit_button.innerHTML = "SUBMIT";
    submit_button.className = "submit-button-submit";

    const { question, options } = data[count];

    Question.innerHTML = question;
    option_a.innerHTML = options[0];
    option_b.innerHTML = options[1];
    option_c.innerHTML = options[2];
    option_d.innerHTML = options[3];
  }, 500);
});
