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
let todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];
let searchNote = document.querySelector(".searchNote");
let completeArray = [];
let incompleteArray = [];

document.addEventListener("DOMContentLoaded", (event) => {
  const dropdownLabel = document.querySelector("#dropdownLabel");
  const dropDownSave = localStorage.getItem("dropDown");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  searchNote.value = "";

  applyNoteForm.classList.add("disabled-button");

  dropdownItems.forEach((item) => {
    item.classList.remove("bg-[#e2e0ff]");
    if (item.textContent.toLowerCase() === dropDownSave) {
      item.classList.add("bg-[#e2e0ff]");
    }
  });

  if (dropDownSave == "all") {
    dropdownLabel.textContent = dropDownSave;
    console.log(todoArray);
    createElementHmtl(todoArray);
  } else {
    if (dropDownSave == "complete") {
      dropdownLabel.textContent = dropDownSave;
      completeArray = JSON.parse(localStorage.getItem("completeArray"));
      console.log(completeArray, "---");
      createElementHmtl(completeArray);
    } else {
      if (dropDownSave == "incomplete") {
        console.log(incompleteArray, "---");
        dropdownLabel.textContent = dropDownSave;
        incompleteArray = JSON.parse(localStorage.getItem("incompleteArray"));
        createElementHmtl(incompleteArray);
      }
    }
  }
});

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("scale-y-100");
  menu.classList.toggle("scale-y-0");
});

items.forEach((item) => {
  if (item.textContent == "all") {
    item.classList.add("bg-[#e2e0ff]");
  }
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    item.classList.remove("bg-[#e2e0ff]");
    label.textContent = item.textContent;
    localStorage.setItem("dropDown", label.textContent);

    items.forEach((i) => i.classList.remove("bg-[#e2e0ff]"));
    item.classList.add("bg-[#e2e0ff]");

    menu.classList.remove("scale-y-100");
    menu.classList.add("scale-y-0");

    if (item.textContent == "incomplete") {
      incompleteArray = todoArray.filter((item) => item.checked == false);
      localStorage.setItem("incompleteArray", JSON.stringify(incompleteArray));
      createElementHmtl(incompleteArray);

      console.log("incomplete", incompleteArray);
    }
    if (item.textContent == "complete") {
      completeArray = todoArray.filter((item) => item.checked == true);
      localStorage.setItem("completeArray", JSON.stringify(completeArray));
      createElementHmtl(completeArray);
      console.log("complete", completeArray);
    }
    if (item.textContent == "all") {
      createElementHmtl(todoArray);
      console.log("all", todoArray);
    }
  });
});

document.addEventListener("click", () => {
  menu.classList.remove("scale-y-100");
  menu.classList.add("scale-y-0");
});

cross.addEventListener("click", () => {
  popupcard.style.display = "block";
  setTimeout(() => todoInput.focus(), 10);
});
closePopupcard.addEventListener("click", () => {
  popupcard.style.display = "none";
});
layer.addEventListener("click", () => {
  popupcard.style.display = "none";
});

applyNoteForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (todoInput.value !== "") {
    const dropdownLabel = document.querySelector("#dropdownLabel");
    const dropDownSave = localStorage.getItem("dropDown");
    dropdownLabel.textContent = dropDownSave;
    todoArray.push({ text: todoInput.value, checked: false, id: Date.now() });
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    console.log(todoArray);
    clearInput();
  } else {
    console.log(todoArray);
    alert("write something");
  }
  createElementHmtl(todoArray);
  popupcard.style.display = "none";
});
todoInput.addEventListener("input", function () {
  if (todoInput.value.trim() === "") {
    // applyNoteForm.style.opacity = "0.5";
    applyNoteForm.classList.add("disabled-button");
  } else {
    applyNoteForm.classList.remove("disabled-button");
  }
});

function createElementHmtl(displayArray) {
  container.innerHTML = "";

  if (displayArray.length != 0) {
    const parent = document.createElement("div");
    parent.classList.add("note_parent");
    displayArray.forEach((elements, index) => {
      const node = document.createElement("label");
      node.classList.add("note_checkbox", "group", "relative");
      node.setAttribute("data_index", index);
      node.setAttribute("note_id", elements.id);
      if (elements.checked == true) {
        node.innerHTML = `
                <input type="checkbox" class="peer hidden" checked>
                <span class="checkmark"></span>
                <div
                  class="note_text text-[#252525] text-[20px] font-medium peer-checked:line-through peer-checked:opacity-60">
                  ${elements.text}
                </div>
                <div class="delete_note absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
                      stroke="#CDCDCD"></path>
                    <path d="M14.625 3.75H3.375" stroke="#CDCDCD"></path>
                    <path
                      d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
                      stroke="#CDCDCD"></path>
                    <path d="M10.5 9V12.75" stroke="#CDCDCD"></path>
                    <path d="M7.5 9V12.75" stroke="#CDCDCD"></path>
                  </svg>
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
                <div class="delete_note absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
                      stroke="#CDCDCD"></path>
                    <path d="M14.625 3.75H3.375" stroke="#CDCDCD"></path>
                    <path
                      d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
                      stroke="#CDCDCD"></path>
                    <path d="M10.5 9V12.75" stroke="#CDCDCD"></path>
                    <path d="M7.5 9V12.75" stroke="#CDCDCD"></path>
                  </svg>
                </div>
              `;
      }
      parent.appendChild(node);
    });
    container.appendChild(parent);
  } else {
    const parent = document.createElement("div");
    parent.classList.add("empty_state");
    parent.innerHTML = `<img src="/empty_state.png" alt="" class="w-full max-w-60"> <p class="empty_message">Oops... it's empty :( </p>`;
    container.appendChild(parent);
  }
}
function clearInput() {
  todoInput.value = "";
}

container.addEventListener("click", (e) => {
  const deleteButton = e.target.closest(".delete_note");

  const dropDownSave = localStorage.getItem("dropDown");

  if (deleteButton) {
    e.stopPropagation();
    e.preventDefault();

    const label = deleteButton.closest(".note_checkbox");
    const index = label.getAttribute("data_index");
    const noteId = Number(label.getAttribute("note_id"));

    if (dropDownSave == "all") {
      todoArray = todoArray.filter((todo) => todo.id !== noteId);
      localStorage.setItem("todoArray", JSON.stringify(todoArray));
      createElementHmtl(todoArray);
    } else {
      if (dropDownSave == "complete") {
        const deletedId = noteId;
        completeArray.splice(index, 1);
        todoArray = todoArray.filter((todo) => todo.id !== deletedId);
        localStorage.setItem("todoArray", JSON.stringify(todoArray));
        localStorage.setItem("completeArray", JSON.stringify(completeArray));
        createElementHmtl(completeArray);
      } else {
        if (dropDownSave == "incomplete") {
          const deletedId = noteId;
          incompleteArray.splice(index, 1);
          todoArray = todoArray.filter((todo) => todo.id !== deletedId);
          localStorage.setItem("todoArray", JSON.stringify(todoArray));
          localStorage.setItem(
            "incompleteArray",
            JSON.stringify(incompleteArray)
          );
          createElementHmtl(incompleteArray);
        }
      }
    }
    return;
  }

  const label = e.target.closest(".note_checkbox");
  if (!label) return;

  const noteId = Number(label.getAttribute("note_id"));

  const todo = todoArray.find((item) => item.id === noteId);
  if (!todo) return;

  todo.checked = !todo.checked;

  localStorage.setItem("todoArray", JSON.stringify(todoArray));

  if (dropDownSave === "complete") {
    createElementHmtl(todoArray.filter((t) => t.checked));
  } else if (dropDownSave === "incomplete") {
    createElementHmtl(todoArray.filter((t) => !t.checked));
  } else {
    createElementHmtl(todoArray);
  }
});

searchNote.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = todoArray.filter((todo) =>
    todo.text.toLowerCase().includes(query)
  );
  createElementHmtl(filtered);
});
/*
searchNote.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const tem = todoArray.find((t) => t.text.toLowerCase() == query);
  if (tem !== undefined) {
    // console.log(Array(tem));
    createElementHmtl(Array(tem));
  } else {
    createElementHmtl([]); 
  }
});
*/
body.style.opacity = "1";
body.style.visibility = "visible";
