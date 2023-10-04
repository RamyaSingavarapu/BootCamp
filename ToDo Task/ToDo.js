let input = prompt('What would you like to do')
const list = [];
while (input !== 'quit') {
    if (input === 'list') {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`);
        }

        input = prompt('What would you like to do')


    }
    else if (input === 'new') {
        const newToDo = prompt('What would you like to add');
        list.push(newToDo);
        console.log(`${newToDo} added to the list`)

        input = prompt("What would you like to do")
    }
    else if (input === 'delete') {
        const Index = parseInt(prompt('Which index would you like to delete'));
        if (!Number.isNaN(Index)) {
            const deleteToDo = list.splice(Index, 1);
            console.log(`${deleteToDo} deleted`)
        }
        else {
            console.log('unknown Index')
        }


        input = prompt("What would you like to do")
    }

}
console.log('Ok! You quit the app');
