let input = document.querySelector(".input");
let output = document.querySelector(".output");
let btnEle = document.querySelector("button");

btnEle.onclick = execute;

function execute() {
  let code = input.value;
  output.contentWindow.document.body.innerHTML = "";
  output.contentWindow.document.write(code);
}
