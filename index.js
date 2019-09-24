const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addBtn.click();
    }
});
addBtn.addEventListener("click", function (){
    const userInput = input.value;
    if(userInput !== ""){
        console.log(userInput);
        const li = document.createElement("li");
        const deleteSpan = document.createElement("BUTTON");
        const completeSpan = document.createElement("BUTTON");
        deleteSpan.setAttribute("class", "delete"); 
        completeSpan.setAttribute("class", "complete"); 
        deleteSpan.appendChild(document.createTextNode("Delete"));
        completeSpan.appendChild(document.createTextNode("Complete"));
        li.appendChild(document.createTextNode(userInput));
        li.appendChild(completeSpan);
        li.appendChild(deleteSpan);
        list.appendChild(li);
        input.value = "";
    }
    else
    {
        alert("Enter Something...");
    }

})

list.addEventListener("click",function(e) {
    var tgt = e.target;
    console.log(tgt.className);
    /*if (tgt.tagName.toUpperCase() == "LI") {
      tgt.parentNode.removeChild(tgt); // or tgt.remove();
    }*/
    if(tgt.className == "delete"){
        console.log(tgt.parentNode.parentNode)
        tgt.parentNode.parentNode.removeChild(tgt.parentNode)
    }
    else if(tgt.className == "complete"){
        console.log(tgt.parentNode.parentNode)
        tgt.parentNode.classList.toggle("completed");
    }
});