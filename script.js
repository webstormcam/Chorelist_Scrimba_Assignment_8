let arrayOfChores=[];
let taskInput = document.getElementById('new-task')
let currentChores = document.getElementById('current-chores')
const enter = document.getElementById('enter')





enter.addEventListener('click',function(){
    if(taskInput.value!==""){
     arrayOfChores.push(`<p>${taskInput.value}</p>`)
localStorage.setItem("chores",JSON.stringify(arrayOfChores))
      taskInput.value=""
      render()  
    }


})


function render(){
    let printedChores=""
    let storedChores = JSON.parse(localStorage.getItem("chores"))
    for(let i=0;i<storedChores.length;i++){
       printedChores+=storedChores[i]
        console.log(storedChores)
    }
    currentChores.innerHTML= printedChores
}