const Question = document.getElementById("question");

const options = [
  { input_id: "option_a", label_id: "a" },
  { input_id: "option_b", label_id: "b" },
  { input_id: "option_c", label_id: "c" },
  { input_id: "option_d", label_id: "d" },
];

for (let i = 0; i < 4; i++) {
  let list_item = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("id", options[i].input_id);
  input.setAttribute("name", "answer");
  let label = document.createElement("label");
  label.setAttribute("for", options[i].input_id);
  label.setAttribute("id", options[i].label_id);

  options[i] = {
    list_item: list_item,
    input: input,
    label: label,
  };
}
