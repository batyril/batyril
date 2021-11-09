/*#23 Практика 

Сегодня напишем самый простой TODO лист без графического интерфейса.

Хранилищем будет объект, а имена задач - ключами. 

const list = {
 "create a task": "In Progress",
 "make a bed": "Done",
 "write a post": "To Do",
}

Функция changeStatus - будет менять статус задачи 

changeStatus("write a post", "Done")

Функция addTask - добавляет новую задачу

addTask('have a walk')

Функция deleteTask - удаляет задачу

deleteTask('have a walk')

Функция showList будет выводить весь список дел в виде 

Todo: 
 "create a task",
 "make a bed",
In Progress: 
 "write a post"
Done:
 -

Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль */


const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

function changeStatus(task, status){
    for(task in list){
        list[task] = status
    }

}   //будет менять статус задачи 

function addTask(task){
    list[task] = "To Do"
} //добавляет новую задачу

function deleteTask(task){
    if(task in list){
        delete list[task]
        console.log('Задача удалена')
    }
    else{
        console.log('Задача не найдена')
    }
}



function showList(object){
    console.log("In Progress:")
    for(let key in object ){
        if(object[key] === 'In Progress'){
            console.log(key)
        }
    }
    console.log("Done:")    
    for(let key in object ){
        if(object[key] === 'Done'){
            console.log(key)
        }
     }
     console.log("ToDo:")    
     for(let key in object ){
         if(object[key] === 'To Do'){
             console.log(key)
         }
      }     
}  

//changeStatus("make a bed","To Do");
//addTask('have a walk')
//deleteTask('writeе a post')
showList(list)
//console.log(list)