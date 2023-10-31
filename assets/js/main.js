var list = [];
var inputvalue = document.getElementById("input-value");
var todolist = document.getElementById("todolist");

document.getElementById("add-btn").addEventListener("click",function(){
    if(inputvalue.value === ""){
        alert("Enter a Text!!");
    }
    else{
        list.push(inputvalue.value);
        showlist();
        inputvalue.value = "";
    }
    
    
})

function showlist(){
    todolist.innerHTML=""
    list.forEach(function(n,i){
        todolist.innerHTML += "<li>"+n+"<a onclick= 'editItem("+i+")'>Edit</a>"+"<a onclick='deleteItem("+i+")'>Delete</a></li>"
    })

}

function deleteItem(i){
    list.splice(i,1);
    showlist();
}
function editItem(i){
    var newtext = prompt("Enter your New Text!");
    list.splice(i,1,newtext);
    showlist();
}

