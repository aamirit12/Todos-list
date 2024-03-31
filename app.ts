import inquirer from "inquirer";
let todos = [];
let condition = true;

while(condition){let addTask = await inquirer.prompt( 
    [
       { message:"Add the items in the list",
         type:'input',
         name: 'TodoItems'
        },

        { name:"addMore",
          message:"Do you want to add more in the list",
          type:'confirm',
          default:"false",
        }
    ]
)
todos.push(addTask.TodoItems)
condition = addTask.addMore
console.log(todos)}