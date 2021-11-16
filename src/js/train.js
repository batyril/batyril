const list = [ 
  { 
      id: 1,
      name: 'create a post', 
      status: 'to do', 
      priority: 'low', 
  }, 
  { 
      id: 2,
      name: 'make a bed', 
      status: 'Done', 
      priority: 'high', 
  },  
  { 
      id: 3,
      name: 'write a post', 
      status: 'In Progress', 
      priority: 'high',  
  } 

  ] 

function changeStatus(task,status){

   for( let i of list){
      if(i.name === task){
        i.status = status
        return
      }  
   }
   console.log('Value not found, please try again')
}

function showList(array){

  console.log("to do:")
  for(let i of list ){
      if(i.status === 'to do'){
          console.log('-' + i.name)
      }
    }

  console.log("Done:")
  for(let i of list ){
      if(i.status === 'Done'){
          console.log('-' + i.name)
      }
    }
  
  console.log("In Progress:")
  for(let i of list ){
      if(i.status === 'In Progress'){
          console.log('-' + i.name)
      }
    }  
}

function addTask(task){
  
  let isId = (list[list.length - 1]).id

  list.push({id: isId+1,
      name: task, 
      status: 'to do', 
      priority: 'low'  })
}

function deleteTask(task){
  for(let i of list){
    if(i.name === task){
      list.splice(i, 1)
      return
    }     

  }
  console.log('Value not found, please try again')  
}

function showList(array, filter){

  if(filter === 'status'  ){
    console.log("to do:")
    for(let i of list ){
        if(i.status === 'to do'){
            console.log('-' + i.name)
        }
      }

    console.log("Done:")
    for(let i of list ){
        if(i.status === 'Done'){
            console.log('-' + i.name)
        }
      }
    
    console.log("In Progress:")
    for(let i of list ){
        if(i.status === 'In Progress'){
            console.log('-' + i.name)
        }
      }
  return    
  } 
  
  else if(filter === 'priority:'  ){
    console.log("high:")
    for(let i of list ){
        if(i.priority === 'high'){
            console.log('-' + i.name)
        }
      }

    console.log("low:")
    for(let i of list ){
        if(i.priority === 'low'){
            console.log('-' + i.name)
        }
      }
    
  return    

  }
  console.log('Value not found, please try again')
}

showList(list, 'stat3us')

console.log(list)


