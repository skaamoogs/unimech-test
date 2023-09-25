// Variables
const columns = ["id", "userId", "title", "body"];
let posts = [];

// DOM elements
const table = document.querySelector("table");
const tbody = document.getElementById("tbody");
tbody.classList.add("table__tbody");
const theads = document.querySelectorAll(".table__th");

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
    fillTable(posts);
  } catch (error) {
    alert(error?.message ?? "Неизвестная ошибка");
  }
}
