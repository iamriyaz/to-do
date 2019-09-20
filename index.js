const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const list = document.getElementById("list");

addBtn.addEventListener("click", function (){
    const userInput = input.value;
    console.log(userInput);
    const li = document.createElement("li");
    const deleteSpan = document.createElement("span");
    const completeSpan = document.createElement("span");
    deleteSpan.setAttribute("class", "delete"); 
    completeSpan.setAttribute("class", "complete"); 
    deleteSpan.appendChild(document.createTextNode("x"));
    completeSpan.appendChild(document.createTextNode("y"));
    li.appendChild(document.createTextNode(userInput));
    li.appendChild(completeSpan);
    li.appendChild(deleteSpan);
    list.appendChild(li);
    input.value = "";

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