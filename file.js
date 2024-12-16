const addForm = document.querySelector('.add')
const list  = document.querySelector('.todos')
const search = document.querySelector('.search input')

addForm.addEventListener('submit', e =>{
    e.preventDefault();
    // we are trying to get the value of the form from the form input  

    const todoValue = addForm.add.value.trim()
    console.log(todoValue);

    // checking if the todo has length not just blank spaces
    if(todoValue.length){
        generateTemplate(todoValue)
        addForm.reset()
    }else {
        console.log('you need to add a valid todo !!!!')
    }

    
})

// we are now working on the html template used for adding new (li) todo the ul 

const generateTemplate = todoValue =>{

    const empty = `
      <li class="list-group-item d-flex justify-content-between align-items-center text-light  "><span> ${todoValue} </span>  <i class="far fa-trash-alt delete"></i> </li>
    
    `

    list.innerHTML += empty
};


//delete todos
// working with event delegation.
list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


// working with array methods

const filterTodos = (term) =>{
    // the list of li tags/ array of todos
Array.from(list.children)
.filter((todo)=>{return !todo.textContent.toLowerCase().includes(term)})
.forEach((todo) =>{todo.classList.add('filtered')})

// here we are removing the class when we get  a match from the term 
Array.from(list.children)
.filter((todo)=>{return todo.textContent.includes(term)})
.forEach((todo) =>{todo.classList.remove('filtered')})
}




search.addEventListener('keyup', ()=>{

    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})