const closeList = document.getElementsByTagName("LI");
/*
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
let list = document.querySelector("ul");
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);


function addToDo() {
    let newList = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let task = document.createTextNode(inputValue);

    newList.appendChild(task);

    if (inputValue === " ") {
        alert("You must write something!");
    } else {
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

}

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (document.getElementById("task").value === " ") {
        alert("add a task");
    } else {
        addToDo();
    }

});