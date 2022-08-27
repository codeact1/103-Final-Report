function addTask(){
    let addTask = (prompt("Enter new task"));
    console.log(`New task is ${addTask}`);
    document.getElementById("todo-list").innerHTML=`
    <p>New task is: ${addTask}</p>`

};

function addTask(){
    let addTask = (prompt("Enter new task"));
    console.log(`Next task is: ${addTask}`);  
    document.getElementById("todo-list").innerHTML+=`
    <p>Next task is: ${addTask}</p>`

};

function removeTask(){
    let removeTask = (prompt("Which task would you like to remove?"));
    console.log(`Done Task: ${addTask}`);
    document.getElementById("todo-list").innerHTML=`
    <p>Finished task is: ${addTask}</p>`

};