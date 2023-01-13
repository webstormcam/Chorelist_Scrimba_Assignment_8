let arrayOfChores=[];
let taskInput = document.getElementById('new-task')
let currentChores = document.getElementById('current-chores')
const enterChores = document.getElementById('enter')
const removeChores = document.getElementById('delete')
let storedChores = JSON.parse(localStorage.getItem("chores"))

if(storedChores){
    arrayOfChores = storedChores
    console.log(arrayOfChores)
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
  currentChores.innerHTML=''
})





function render(){
    let printedChores=""
    for(let i=0;i<arrayOfChores.length;i++){
            printedChores+=arrayOfChores[i] 
         }
         currentChores.innerHTML= printedChores    
}