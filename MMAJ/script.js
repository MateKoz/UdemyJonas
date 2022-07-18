let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let tools;

let popup;
let popupInfo;
let popupInput;
let popupAddBtn
let popupCloseBtn;
let todoToEdit;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents()
}

const prepareDOMElements = () => {
//pobieramyt wszystkie elemtny;
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')

}

const prepareDOMEvents = () => {
//nadajemy nasłuchiwanie
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closeTodo)
    popupAddBtn.addEventListener('click', changeTodoText)
}

//dodawanie nowego taska
const addNewTask = () => {
    if (todoInput.value !== '') {
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        newTodo.setAttribute('data-id', 'test');
        ulList.append(newTodo);
        createToolsArea();

        todoInput.value = ''
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

//Tworzenie Tools area przy taskach (btn do edycji, oznaczenia i usuwania);
const createToolsArea = () => {
    tools = document.createElement('div')
    tools.classList.add('tools')
    newTodo.append(tools)
    tools.innerHTML = `
                    <button class="complete"><i class="fas fa-check"></i></button>
                    <button class="edit">EDIT</button>
                    <button class="delete"><i class="fas fa-times"></i></button>
            `
}

const checkClick = e => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo(e);
    } else if (e.target.matches('.delete')) {
        deleteTask(e);
    }
}

const editTodo = (e) => {
    todoToEdit = e.target.closest('li').firstChild;
    popupInput.value = todoToEdit.textContent;

    console.log(todoToEdit)
    popup.style.display = 'flex'
}

const closeTodo = () => {
    popup.style.display = 'none';
    popupInfo.textContent = ''

}

const changeTodoText = () => {
   if(popupInput.value !== '') {
       todoToEdit.textContent = popupInput.value;
       popup.style.display = 'none';
       popupInfo.textContent = ''

   } else {
       popupInfo.textContent = 'Musisz podać jakąś treść'
   }
}

const deleteTask = (e) => {
    e.target.closest('li').remove()
}


document.addEventListener('DOMContentLoaded', main)