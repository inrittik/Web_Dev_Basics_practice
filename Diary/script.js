const newEntry = document.querySelector('.createForm');
// console.log(newEntry);
const entryList = document.querySelector('.content');
const deleteBotton = document.querySelector('.delete');

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

newEntry.addEventListener('submit', e=>{
    e.preventDefault();
    const entryText = newEntry.new_entry.value.trim();   
    if(entryText.length){
        generateTemplate(entryText);
        newEntry.new_entry.value = "";
    }
})
// console.log(entryList);
// deleteBotton.addEventListener('click', e => {
//     // console.log(e.target.parentNode);
//     e.target.parentNode.remove();
// })
entryList.addEventListener('click', e=> {
    console.log(e);
    if(e.target.classList.contains('delete')){
        e.target.parentNode.remove()
    }
})