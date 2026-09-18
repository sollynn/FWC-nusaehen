const list = document.getElementById("ft_list");
const newBtn = document.getElementById("newBtn");

newBtn.addEventListener("click", function () {
    const text = prompt("Enter new TO DO:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text.trim());
    saveCookie();
});

function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const answer = confirm("Do you want to remove this TO DO?");

        if (answer) {
            todo.remove();
            saveCookie();
        }
    });

    list.prepend(todo);
}

function saveCookie() {
    const todos = [];

    document.querySelectorAll("#ft_list .todo").forEach(function (todo) {
        todos.push(todo.textContent);
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/; max-age=31536000";
}

function loadCookie() {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            const todos = JSON.parse(
                decodeURIComponent(parts.slice(1).join("="))
            );

            for (let i = todos.length - 1; i >= 0; i--) {
                createTodo(todos[i]);
            }
        }
    }
}

loadCookie();