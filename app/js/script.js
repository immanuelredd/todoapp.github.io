//small li will not work 
//it must be capital
let list = document.querySelector("ul");
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        let done = e.target.classList.toggle("checked");
        return done;
    }
}, false);


function addToDo() {
    let msg = document.getElementById("message");
    let inputValue = document.getElementById("task").value;

    if (inputValue.trim() === '') {
        msg.innerText = "Please Add a task!";
        return;
    }

    msg.innerText = "";
    document.getElementById("task").value = "";
    document.getElementById("task").focus();

    let newList = document.createElement("li");
    let task = document.createTextNode(inputValue);
    newList.appendChild(task);
    document.getElementById("list").appendChild(newList);
    const span = document.createElement("span");
    const textNode = document.createTextNode("\u00D7");

    span.classList = "close";
    span.appendChild(textNode);
    newList.appendChild(span);

    const rem = document.getElementsByClassName("close");
    for (let i = 0; i < rem.length; i++) {

        rem[i].addEventListener("click", function () {
            this.parentElement.remove();
        });

    }
}

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    addToDo();
});