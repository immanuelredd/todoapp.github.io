//small li will not work 
//it must be capital
const list = document.querySelector("ul");
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);


function addToDo() {
    const msg = document.getElementById("message");
    const inputValue = document.getElementById("task").value;

    if (inputValue.trim() === '') {
        msg.innerText = "Please Add a task!";
        return;
    }

    msg.innerText = "";
    document.getElementById("task").value = "";
    document.getElementById("task").focus();

    const newList = document.createElement("li");
    const task = document.createTextNode(inputValue);
    newList.appendChild(task);
    document.getElementById("list").appendChild(newList);
    const span = document.createElement("span");
    const textNode = document.createTextNode("\u00D7");

    span.classList = "close";
    span.appendChild(textNode);
    newList.appendChild(span);

    span.addEventListener("click", function () {
        this.parentElement.remove();
    });


}

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    addToDo();
});