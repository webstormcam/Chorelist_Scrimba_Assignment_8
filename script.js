let arrayOfChores=[]
const taskInput = document.getElementById('new-task')
const activeChores = document.getElementById('current-chores')
const enterChores = document.getElementById('enter')
const removeChores = document.getElementById('delete')
let storedChores = JSON.parse(localStorage.getItem("chores"))


//Checks if any chores are located in the localstorage.
if(storedChores){
    arrayOfChores = storedChores
    render()
    
}



//Takes user input and saves the chore in an array and in local storage for later reference and renders the active chores, also does not allow users to submit the same task twice.  
enterChores.addEventListener('click',function(){
    for(const chore of arrayOfChores){
        if(chore.toLowerCase()===taskInput.value.toLowerCase()){
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


/// This removes all the chores in one click by this function and clears the page.
removeChores.addEventListener('click',function(){
 // I did not want the celebration gif to play if the chorelist is just  blank and never had any items so I created this if statement 
if(arrayOfChores.length===0){
    return
}
  localStorage.clear()
  arrayOfChores=[]
  activeChores.innerHTML= `<div style="width:100%;height:0;padding-bottom:83%;position:relative;"><iframe src="https://giphy.com/embed/IwAZ6dvvvaTtdI8SD5" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
})

/*
If you click on an individual chore it will be removed
by this attached function below.
*/
function removeIndividualChore(el){
    let element = el
    for(let i=0;i<arrayOfChores.length;i++){
        if(element.innerHTML===arrayOfChores[i]){
            arrayOfChores.splice(arrayOfChores.indexOf(arrayOfChores[i]),1)
        }
    }
    if(arrayOfChores.length===0){
        activeChores.innerHTML= `<div style="width:100%;height:0;padding-bottom:83%;position:relative;"><iframe src="https://giphy.com/embed/IwAZ6dvvvaTtdI8SD5" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
    }
    localStorage.setItem("chores",JSON.stringify(arrayOfChores))
    element.remove() 
}

//This function renders all the tasks on the page.
function render(){
    let printedChores=""
    for(const chore of arrayOfChores){
            printedChores+=`<p onclick="removeIndividualChore(this)">${chore}</p>`
         }
         activeChores.innerHTML= printedChores    
}