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


function removeIndividualChore(el){
    let element = el
    for(let i=0;i<arrayOfChores.length;i++){
        if(element.innerHTML===arrayOfChores[i]){
            arrayOfChores.splice(arrayOfChores.indexOf(arrayOfChores[i]),1)
        }
    }
    localStorage.setItem("chores",JSON.stringify(arrayOfChores))
    element.remove() 
}


function render(){
    let printedChores=""
    for(const chore of arrayOfChores){
            printedChores+=`<p onclick="removeIndividualChore(this)">${chore}</p>`
         }
         activeChores.innerHTML= printedChores    
}