const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  } catch (error) {
    alert(error?.message ?? "Неизвестная ошибка");
  }
};

const tbody = document.getElementById("tbody");
