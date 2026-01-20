const body = document.querySelector("body");
const btn = document.getElementById("dropdownBtn");
const label = document.getElementById("dropdownLabel");
const menu = document.getElementById("menu");
const items = menu.querySelectorAll("li");
const cross = document.querySelector(".cross");
const popupcard = document.querySelector(".note_toast");
const closePopupcard = document.querySelector(".popup_cancel_button");
const applyNoteForm = document.querySelector(".popup_apply_button");
const layer = document.querySelector(".layer");
let container = document.querySelector(".list_container");
const todoInput = document.querySelector(".todo_input");
const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

if (todoArray != []) {
  createElementHmtl();
}
// const todoArray = [];
// toggle dropdown
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("scale-y-100");
  menu.classList.toggle("scale-y-0");
});

// select item
items.forEach((item) => {
  if (item.textContent == "all") {
    item.classList.add("bg-[#e2e0ff]");
  }
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    item.classList.remove("bg-[#e2e0ff]");
    console.log(e.target.textContent);
    // update button text
    label.textContent = item.textContent;

    // active style
    items.forEach((i) => i.classList.remove("bg-[#e2e0ff]"));
    item.classList.add("bg-[#e2e0ff]");

    // close dropdown
    menu.classList.remove("scale-y-100");
    menu.classList.add("scale-y-0");
  });
});

// click outside → close
document.addEventListener("click", () => {
  menu.classList.remove("scale-y-100");
  menu.classList.add("scale-y-0");
});

cross.addEventListener("click", () => {
  popupcard.style.display = "block";
});
closePopupcard.addEventListener("click", () => {
  popupcard.style.display = "none";
});
layer.addEventListener("click", () => {
  popupcard.style.display = "none";
});

// applyNoteForm.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("click");
// });
applyNoteForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (todoInput.value !== "") {
    todoArray.push({ text: todoInput.value, checked: false });
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    console.log(todoArray);
    clearInput();
  }
  createElementHmtl();
  popupcard.style.display = "none";
});
function createElementHmtl() {
  container.innerHTML = "";
  const parent = document.createElement("div");
  parent.classList.add("note_parent");

  todoArray.forEach((elements, index) => {
    const node = document.createElement("label");
    node.classList.add("note_checkbox");
    node.setAttribute("data_index", index);
    if (elements.checked == true) {
      node.innerHTML = `
              <input type="checkbox" class="peer hidden" checked>
              <span class="checkmark"></span>
              <div
                class="note_text text-[#252525] text-[20px] font-medium peer-checked:line-through peer-checked:opacity-60">
                ${elements.text}
              </div>
            `;
    } else {
      node.innerHTML = `
              <input type="checkbox" class="peer hidden">
              <span class="checkmark"></span>
              <div
                class="note_text text-[#252525] text-[20px] font-medium peer-checked:line-through peer-checked:opacity-60">
                ${elements.text}
              </div>
            `;
    }
    parent.appendChild(node);
  });
  container.appendChild(parent);
}
function clearInput() {
  todoInput.value = "";
}
// document.querySelectorAll('input[type="checkbox"]').forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });
container.addEventListener("click", (e) => {
  const label = e.target.closest(".note_checkbox");
  var index = label.getAttribute("data_index");
  if (!label) return;
  todoArray[index].checked = !todoArray[index].checked;
  localStorage.setItem("todoArray", JSON.stringify(todoArray));
  createElementHmtl();
});

body.style.opacity = "1";
body.style.visibility = "visible";
