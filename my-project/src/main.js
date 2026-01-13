const btn = document.getElementById("dropdownBtn");
const label = document.getElementById("dropdownLabel");
const menu = document.getElementById("menu");
const items = menu.querySelectorAll("li");

// toggle dropdown
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("scale-y-100");
  menu.classList.toggle("scale-y-0");
});

// select item
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
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
