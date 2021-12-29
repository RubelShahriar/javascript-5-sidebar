const btn = document.querySelector('.sidebar-toggle')
const close = document.querySelector('.close-sidebar')
const sidebar = document.querySelector('.sidebar')

btn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
})
close.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})