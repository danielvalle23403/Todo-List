const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = documen.querySelector('.search input')
const generateTemplate = (todo) => {
const html = 
`
<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <span>make a veggie pie</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
};

list.innerHTML += html;

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim() ;
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
    
});


// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})



search.addEventListener('keyup', e => {
const term = search.value.trim();
})
