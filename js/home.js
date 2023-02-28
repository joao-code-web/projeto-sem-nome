const menu_cell = document.querySelector('.menu_cell');
let btn_open = document.querySelector('.btn_open');
let img_menu = document.querySelector('#img_menu');
btn_open.addEventListener('click',botao); 
function botao(){
    if(menu_cell.classList.contains("open")){
        menu_cell.classList.remove('open');
        img_menu.src = './img/homeImg/menu2.png';
    }
    else{
        menu_cell.classList.add('open');
        img_menu.src = './img/homeImg/close2.png';
    }

}