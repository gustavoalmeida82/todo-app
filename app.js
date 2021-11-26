const todoContainer = document.querySelector('.todos-container')
const inputAddTodo = document.querySelector('.form-add-todo input')
const inputSearchTodo = document.querySelector('.form-search input')

const removeTodo = event => {
    const clickedElement = event.target
    const isDeleteButtonClicked = Array.from(clickedElement.classList).includes('delete')

    if(isDeleteButtonClicked) {
        clickedElement.parentElement.remove()
    }
}

const addTodo = event => {
    event.preventDefault()

    const inputValue = event.target.value

    todoContainer.innerHTML += `      
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    event.target.reset()
}

const searchTodo = event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(todoContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.add('hidden')
            todo.classList.remove('d-flex')
        })

    Array.from(todoContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.add('d-flex')
            todo.classList.remove('hidden')
        })
}

todoContainer.addEventListener('click', removeTodo)

inputAddTodo.addEventListener('submit', addTodo)

inputSearchTodo.addEventListener('input', searchTodo)