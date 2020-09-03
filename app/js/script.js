/*const closeList = document.getElementsByTagName("LI");

for (let i = 0; i < closeList.length; i++) {

    const span = document.createElement("span");
    const textNode = document.createTextNode("\u00D7");

    span.classList = "close";
    span.appendChild(textNode);

    closeList[i].appendChild(span);

    removeToDo();

}*/

function removeToDo() {
    const remove = document.getElementsByClassName("close");
    for (let i = 0; i < remove.length; i++) {

        remove[i].addEventListener("click", function () {
            let div = remove[i].parentElement;
            div.style.display = "none";
        });

    }

}


//small li will not work 
//it must be capital

function taskDone() {
    let list = document.querySelector("ul");
    list.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            let done = e.target.classList.toggle("checked");
            return done;
        }
    }, false);
}



function addToDo() {
    let msg = document.getElementById("message");
    let newList = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let task = document.createTextNode(inputValue);
    newList.appendChild(task);
    if (inputValue.trim() === '') {
        msg.innerText = "Please Add a task!";
    } else {
        msg.innerText = "";
        document.getElementById("list").appendChild(newList);
        document.getElementById("task").value = "";
        document.getElementById("task").focus();
    }

    const span = document.createElement("span");
    const textNode = document.createTextNode("\u00D7");

    span.classList = "close";
    span.appendChild(textNode);
    newList.appendChild(span);

    removeToDo();
    taskDone();

}

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    addToDo();

});