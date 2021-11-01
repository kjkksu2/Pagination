const list_items = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
  "item 13",
  "item 14",
  "item 15",
  "item 16",
  "item 17",
  "item 18",
  "item 19",
  "item 20",
  "item 21",
  "item 22",
];

const content = document.querySelector(".content");
const pagination = document.querySelector(".pagination");

let current_page = 1;
let rows = 5;

function setPage(items, rows, current_page) {
  content.innerHTML = "";

  const start = (current_page - 1) * rows;
  const end = current_page * rows;
  const paginated_page = items.slice(start, end);

  paginated_page.forEach((page) => {
    const div = document.createElement("div");
    div.innerText = page;
    content.appendChild(div);
  });
}

function setPagination(items, rows) {
  const page_count = Math.ceil(items.length / rows);

  for (let i = 1; i <= page_count; i++) {
    let btn = makeButton(items, i);
    pagination.appendChild(btn);
  }
}

function makeButton(items, page) {
  const button = document.createElement("button");

  button.innerText = page;

  if (current_page === page) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    setPage(items, rows, page);

    const current_btn = pagination.querySelector("button.active");
    current_btn.classList.remove("active");
    button.classList.add("active");
  });

  return button;
}

setPage(list_items, rows, current_page);
setPagination(list_items, rows);
