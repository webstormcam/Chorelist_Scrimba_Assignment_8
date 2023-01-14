let arrayOfChores=[]
const taskInput = document.getElementById('new-task')
const activeChores = document.getElementById('current-chores')
const enterChores = document.getElementById('enter')
const removeChores = document.getElementById('delete')
let storedChores = JSON.parse(localStorage.getItem("chores"))

if(storedChores){
    arrayOfChores = storedChores
    render()
    
}

enterChores.addEventListener('click',function(){
    for(const chore of arrayOfChores){
        if(chore===taskInput.value){
            return
        }
    }
    
    if(taskInput.value!==""){
     arrayOfChores.push(`${taskInput.value}`)
     localStorage.setItem("chores",JSON.stringify(arrayOfChores))
      taskInput.value=""
      render()  
    }
})

removeChores.addEventListener('click',function(){
  localStorage.clear()
  arrayOfChores=[]
  activeChores.innerHTML=''
})





function render(){
    let printedChores=""
    for(const chore of arrayOfChores){
            printedChores+=`<p>${chore}</p>`
         }
         activeChores.innerHTML= printedChores    
}