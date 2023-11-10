const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must be writing Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To Stores Data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// To show the Stored Data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

// To display Date and Time
function displayDateTime(){
    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();

    document.getElementById("date").innerText = "Date: "+ dateString;
    document.getElementById("time").innerText = "Time: "+ timeString;
}

setInterval(displayDateTime, 1000);

// Use of Enter Key with Add Button
function handleKeyPress(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("add").click();
    }
}