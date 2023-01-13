let arrayOfChores=[]
const taskInput = document.getElementById('new-task')
const currentChores = document.getElementById('current-chores')
const enterChores = document.getElementById('enter')
const removeChores = document.getElementById('delete')
let storedChores = JSON.parse(localStorage.getItem("chores"))

if(storedChores){
    arrayOfChores = storedChores
    render()
    
}

enterChores.addEventListener('click',function(){
    if(taskInput.value!==""){
     arrayOfChores.push(`<p>${taskInput.value}</p>`)
     localStorage.setItem("chores",JSON.stringify(arrayOfChores))
      taskInput.value=""
      render()  
    }
})

removeChores.addEventListener('click',function(){
  localStorage.clear()
  arrayOfChores=[]
  currentChores.innerHTML=''
})





function render(){
    let printedChores=""
    for(const chore of arrayOfChores){
            printedChores+=chore
         }
         currentChores.innerHTML= printedChores    
}