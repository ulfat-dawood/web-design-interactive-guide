////////// MODAL //////////
const openModal= document.querySelector('[data-open-modal]');
const closeModal= document.querySelectorAll('[data-close-modal]');
const modalOverlay= document.querySelector('.modal-overlay');

openModal.addEventListener('click', ()=>{
    const modal= document.querySelector(openModal.dataset.openModal);
    modal.classList.add('active')
    modalOverlay.classList.add('active')
})

closeModal.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const modal= document.querySelector(btn.dataset.closeModal);
        modal.classList.remove('active')
        modalOverlay.classList.remove('active')
    })
})

////////// ACCORDION //////////
const accordionHeader= document.querySelectorAll('#accordion .header');

accordionHeader.forEach(header=>{
    header.addEventListener('click', ()=>{
        const list= header.closest('.list');
        list.classList.toggle('expand'); 
    })
})