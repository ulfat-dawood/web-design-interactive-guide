const checkbox= document.querySelector('#menu-checkbox');
const sidebar= document.querySelector('aside')

 
const toggleSideBar= ()=>{
    //Store the state in the application memory: 
    console.log(checkbox.checked)
    checkbox.checked ? 
    sidebar.classList.add('collapse')
    :
    sidebar.classList.remove('collapse');
}
window.addEventListener('load', toggleSideBar)
checkbox.addEventListener('click', toggleSideBar)   

