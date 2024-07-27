const form = document.forms[0]
const input = document.querySelector('input')
const list = document.querySelector('.list')
const timeInput = document.querySelector('.time-input')

window.addEventListener('DOMContentLoaded', ()=>{
   let savedData = localStorage.getItem('saved')
   list.innerHTML = savedData
})

form.addEventListener('submit', (e)=>{
   e.preventDefault()
   if(input.value !=0 && input.value.length <= 10){
   let todo = document.createElement('div')
   todo.className = "new-div"
   let ele = `<h1>  ${input.value} </h1> <span> <p>On ${new Date().toLocaleDateString()} ,  at - ${new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' , hour12: true })}</p> <button class='mark-btn'> Mark </button> <button class='del-btn'> Delete </button></span>`
   todo.innerHTML = ele
   list.appendChild(todo)
   input.style.outlineColor = 'blue'
   input.value =  ""
   } else (
      input.style.outlineColor = 'red'
   )


   let savedHistory = list.innerHTML 
   localStorage.setItem('saved', savedHistory)
})

  

document.addEventListener('click',(e)=>{
   if (e.target.className == 'del-btn'){
      console.log(e.target.parentNode)
      let div = e.target.parentNode.parentNode
      div.remove()
      localStorage.clear()
      
   let savedHistory = list.innerHTML 
   localStorage.setItem('saved', savedHistory)
      
   }
   if (e.target.className == 'mark-btn'){
      let heading = e.target.parentNode.parentNode.children[0]
      heading.classList.add('mark') 
      let marked = heading.classList.contains('mark') ? true : false
      if(marked){
         e.target.innerText = 'Done'
         e.target.style.backgroundColor = 'blue'
         let para = e.target.parentNode.children[0]
         para.style.fontSize = '15px'
         para.innerText = 'Task completed'
      }
   }
})