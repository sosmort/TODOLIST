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

// const checkbox = document.querySelector(
//   '.note_checkbox input[type="checkbox"]'
// );

// checkbox.addEventListener("change", function () {
//   if (checkbox.checked) {
//     console.log("Checked ✅");
//   } else {
//     console.log("Not checked ❌");
//   }
// });

cross.addEventListener("click", () => {
  popupcard.style.display = "block";
});
closePopupcard.addEventListener("click", () => {
  popupcard.style.display = "none";
});
layer.addEventListener("click", () => {
  popupcard.style.display = "none";
});

applyNoteForm.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
});

body.style.opacity = "1";
body.style.visibility = "visible";
