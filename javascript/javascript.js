let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCard.classList.remove('active');
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
    
}

let shoppingCard = document.querySelector('.shopping-card');

document.querySelector('#card-btn').onclick = () =>{
    shoppingCard.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
    
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active');
    shoppingCard.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active');
    shoppingCard.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCard.classList.remove('active');
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
}