const checkbox= document.querySelector('#menu-checkbox');
const sidebar= document.querySelector('aside')

checkbox.addEventListener('click', ()=>{
    //Store the state in the application memory: 
    checkbox.checked ? 
    sidebar.classList.add('collapse')
    :
    sidebar.classList.remove('collapse');
})