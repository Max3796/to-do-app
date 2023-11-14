// input tag
var inputText = document.getElementById("input");
//add button tag
var subBtn = document.getElementById("button");
//to do list
var todoList = document.getElementById("todolist");
//array to store input values, initially empty
var todoArr = []
//when add button is clicked
subBtn.addEventListener("click",addItemToArray)

function addItemToArray(){
    //push the value to array
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }
    //reset the value to empty string ""
    inputText.value = ""
    display()
}
//When enter is pressed add text to li
inputText.addEventListener("keypress",(event)=>{
    if(event.key=="Enter"){
        addItemToArray()
    }
})
function display(){
    todoList.innerHTML = "";
    todoArr.map((curr,i)=>{
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`
      //insert it inside <ul id="todoList"
      todoList.innerHTML+=listItem;
    })
}
function deleteItem(index){
    // delete the item element[index]from todoArr
    todoArr.splice(index,1)
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display();
}
function editItem(index){
    var newValue = prompt("Please Edit")
    todoArr.splice(index,1,newValue)
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display()
}
document.getElementById("reset").addEventListener("click",()=>{
    todoArr=[]
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display()
})
//Local storage
// localStorage.setItem("todoArr",JSON.stringify(todoArr))
var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []