const plus = document.getElementById("plus");
const calender = document.getElementById("calender");
const plus1 = document.getElementById("plus1");
const addItem = document.getElementById("addItem");
const texts = document.querySelector(".texts");
// const ul1 = document.querySelector(".ul1");
// const li1 = document.createElement("li");
const par = document.getElementById("par");

const first = document.getElementById("first");
const second = document.getElementById("second");
const btn1 = document.getElementById("btn");

second.innerText = 0;
first.innerText = 0;
let addItemValue;
let calenderValue;

plus.addEventListener("click", () => {
  if (addItem.value) {
    calender.classList.toggle("calender1");
  }
});

plus1.addEventListener("click", () => {
  if (calender.value) {
    addItemValue = addItem.value;
    calenderValue = calender.value;
    addList();
    calender.classList.remove("calender1");
    addItem.value = "";
  }
});

function addList() {
  const div1 = document.createElement("div");
  const input1 = document.createElement("input");
  const label1 = document.createElement("label");
  div1.appendChild(input1);
  div1.appendChild(label1);
  div1.setAttribute("class", "div1");
  input1.setAttribute("id", "input2");

  label1.setAttribute("for", "input2");
  label1.setAttribute("class", "label2");
  label1.innerText = `${calenderValue} ${addItemValue} `;

  par.after(div1);
  input1.after(label1);

  input1.setAttribute("type", "checkbox");
  input1.classList.add("ınputClass");

  second.innerText++;

  input1.addEventListener("click", () => {
    label1.style.textDecoration = "line-through";
    first.innerText++;
  });
  btn1.addEventListener("click", () => {
    window.location.reload();
  });
  //   li1.innerHTML = `${calenderValue} ${addItemValue}`;
}
