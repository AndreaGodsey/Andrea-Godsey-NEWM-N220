const todo = {
    list:[],
    showItems() {
        document.getElementById("list").innerHTML="";
        this.list.forEach(function (item) { 
            document.getElementById("list").innerHTML += item + "<br />";
        });
    },
    
    maxItems: 100,
};



todo.showItems();

function addItem() {
    const currentItems = todo.list.length;
    if(currentItems == todo.maxItems) {
        console.log("No More Items");
    }
    else{
        todo.list.push(document.getElementById("item").value);
        todo.showItems();
    }
}

let itemstag = document.getElementById("item");

function printItem(item) {
    const itemstag = document.getElementById("item");
    itemstag.innerHTML += `<br />${item}`;
}



function summarizeList(){
    if (todo.list.length > 0) {
        printItem(todo.list[0]);
    }

    if (todo.list.length > 0) {
        printItem(todo.list[3]);
    }
}
















