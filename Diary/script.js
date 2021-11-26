const newEntry = document.querySelector('.createForm');
const entryList = document.querySelector('.content');
const deleteBotton = document.querySelector('.delete');
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');
const search = document.querySelector('.search-entry input');
let key=0;
const generateTemplate = (body) => {
    const template = `
    <div class="entry">
    <div class="entry-content">
        ${body}
    </div>
    <span class="material-icons delete" style="font-size: 36px; position: relative; top: 15px; left: 5px">
        delete
    </span>
    </div>
    `;
    entryList.innerHTML += template;
}
// console.log(entryList.children);
// const entries = Array.from(entryList.children);
const todos = JSON.parse(localStorage.getItem('todos'));

// entries.forEach(entry => {
//     todos.push(entry.childNodes[1].innerText);
// })
// localStorage.setItem('todos', JSON.stringify(todos));


// const storageValues = JSON.parse(localStorage.getItem('todos'));
// console.log(storageValues);
// storageValues.forEach(value=> {
//     generateTemplate(value);
// })
JSON.parse(localStorage.getItem('todos')).forEach(value=> {
    generateTemplate(value);
})
newEntry.addEventListener('submit', e=>{
    e.preventDefault();
    const entryText = newEntry.new_entry.value.trim();   
    if(entryText.length){
        todos.push(entryText);
        localStorage.setItem('todos', JSON.stringify(todos));
        newEntry.new_entry.value = "";
        console.log(todos);
    }
    JSON.parse(localStorage.getItem('todos')).forEach(value=> {
        if(entryText===value) generateTemplate(value);
    })
})

entryList.addEventListener('click', e=> {
    // console.log(e);
    let node = e.target.parentNode;
    if(e.target.classList.contains('delete')){
        popup.style.display = 'block';
        button.onclick = ()=>{
            popup.style.display = 'none';
            // node.remove()
            console.log(node.childNodes[1].textContent.trim());
            let i=0;
            todos.forEach(todo => {
                if(todo===node.childNodes[1].textContent.trim()){
                    todos.splice(i, 1);
                }
                i++;
            })
            localStorage.setItem('todos', JSON.stringify(todos));
            location.reload();
        }
    }
})


popupClose.addEventListener('click', ()=> {
    popup.style.display = 'none';
})

popup.addEventListener('click', e=> {
    if(e.target === popup){
        popup.style.display = 'none';
    }
})

const searchTodo = (key) => {
    Array.from(entryList.children)
        .filter(todo => {
            return !todo.textContent.toLowerCase().includes(key);
        })
        .forEach(todo => {
            todo.classList.add('filtered');
        })

    Array.from(entryList.children)
        .filter(todo => {
            return todo.textContent.toLowerCase().includes(key);
        })
        .forEach(todo => {
            todo.classList.remove('filtered');
        })
}

search.addEventListener('keyup', () => {
    const key = search.value.toLowerCase();
    searchTodo(key);
})
