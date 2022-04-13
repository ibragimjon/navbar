const button = document.querySelector('.toggle-nav')
const hiddennav = document.querySelector('.hidden-nav')


button.addEventListener('click', ()=>{
    hiddennav.classList.toggle('shownav')
})
