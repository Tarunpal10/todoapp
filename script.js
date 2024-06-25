let listcontainer=document.getElementById('list-container')
let head = document.querySelector('head')
let inputbox= document.getElementById('input-box')
function addTask(){
    if(inputbox.value ==''){
        alert("add your task")
    }else{
        let task = document.createElement('li')
          task.textContent=inputbox.value
          listcontainer.appendChild(task)

          let span = document.createElement('span')
          span.textContent='\u00d7'
          task.appendChild(span)
          span.style.right='0px'
    }
    inputbox.value=''
    savedata()
}
listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        savedata()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        savedata()
    }
})
function savedata(){
    localStorage.setItem("tasks",listcontainer.innerHTML)
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem('tasks',)
}
showdata()