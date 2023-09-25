// Variables
const columns = ["id", "userId", "title", "body"];
let posts = [];
let filteredPosts = [];
let descendingOrder = columns.reduce(
  (obj, col) => ({ ...obj, [col]: false }),
  {}
);

// DOM elements
const table = document.querySelector("table");
const tbody = document.getElementById("tbody");
tbody.classList.add("table__tbody");
const theads = document.querySelectorAll(".table__th");
const searchInput = document.querySelector(".search-field__input");

// Event listeners
theads.forEach((th) => {
  th.addEventListener("click", () => {
    const name = th.textContent;
    sortByColumnName(name, descendingOrder[name]);
    Object.keys(descendingOrder).forEach((key) => {
      if (key === name) {
        descendingOrder[key] = !descendingOrder[key];
      } else {
        descendingOrder[key] = false;
      }
    });
  });
});
searchInput.addEventListener("input", (e) => filterPosts(e.target.value));

getPosts();

function fillTable(posts) {
  tbody.innerHTML = "";
  posts.forEach((post) => {
    const tr = document.createElement("tr");
    tr.classList.add("table__tr");
    columns.forEach((c) => {
      const td = document.createElement("td");
      td.classList.add("table__td");
      td.textContent = post[c];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  return table;
}

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await response.json();
    filteredPosts = posts.slice();
    fillTable(posts);
  } catch (error) {
    alert(error?.message ?? "Неизвестная ошибка");
  }
}

function sortByColumnName(name, desc = false) {
  filteredPosts.sort((a, b) => {
    if (a[name] < b[name]) {
      return desc ? 1 : -1;
    }
    return desc ? -1 : 1;
  });
  fillTable(filteredPosts);
}

function filterPosts(filterString) {
  if (filterString.length < 3) {
    fillTable(posts);
    return;
  }
  filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(filterString) ||
      post.body.toLowerCase().includes(filterString)
  );
  fillTable(filteredPosts);
}
