let container =[];
function addItem(){
    if (userInput.value.trim() == ''){
        alert('Enter your list item')
    }else{
        container.push(userInput.value);
        // console.log(container);
    }
    userInput.value = '';
    displayList();
}

function displayList(){
    document.getElementById('display').innerHTML = '';
    for (let index = 0; index < container.length; index++) {
        const element = container[index];
        document.getElementById('display').innerHTML += `<div class="btnss">${index + 1}.${element}
       <span>
       <button onclick="edit(${index})" class="secondary">Edit</button>
       <button onclick="del(${index})" class="danger">Delete</button>
       </span>
        <div/>`
        
    }
}

function deleteLast(){
    container.pop()
    displayList();
}

function deleteAllItem(){
    if(container == 0){
        alert('There is nothing to delete')
    }else{
        let crossCheck = confirm("Are you sure you want to delete all item?")
        if (crossCheck ==true){
            container.splice(0, container.length)
            displayList()
        }else{
            displayList()
        }
    }
    
}

function edit(editList){
    let newList = prompt('Edit item on the list', container[editList])
    if (newList === null) {
        // d nothing
    }else if (newList.trim() === ''){
        alert("Item edited shouldn't be empty");
    }else{
        container[editList] = newList.trim();
        displayList();
    }
}
function del(deleteLi){
    let confirmation = confirm('Are you sure you want to delete this?')
    if(confirmation ===true){
        container.splice(deleteLi, 1)
        displayList()
    }else{
        displayList();
    }
}