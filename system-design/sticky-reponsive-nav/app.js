const checkbox= document.querySelector('#menu-checkbox');
const sidebar= document.querySelector('aside')

checkbox.addEventListener('click', ()=>{
    checkbox.checked ? 
    sidebar.classList.add('collapse')
    :
    sidebar.classList.remove('collapse');
})