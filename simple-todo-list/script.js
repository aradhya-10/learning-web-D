let a = prompt("What do you want to do?")
let todo = [];
while(a!="quit")
{
    if(a=="new")
    {
        a = prompt("What would you like to add?");
        todo.push(a);
        console.log(`Added '${a}' to list.`);
    }

    else if(a=="delete")
    {
        let a = prompt("Enter the index you would want to delete.");
        todo.splice(a,1);
        if(a>=0 && a<todo.length)
            console.log(`Deleted the ${a}th task from list`);
        else
            console.log('Invalid index');
    }

    else if(a=="list")
    {
        console.log("****************************");
        for(let i=0; i<todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("****************************");
    }

    else
    {
        console.log("Ummm.. Invalid choice ig");
    }
    a = prompt("What do you want to do?");
}

console.log("YOU CHOSE TO QUIT!")