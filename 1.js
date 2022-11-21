let btnModalShow = document.querySelector(".btn-modal")
let modalWrapper = document.querySelector(".modal-wrapper")
let btnModalClose = document.querySelector(".modal__closed")

btnModalShow.onclick = function(){
    
    modalWrapper.style.display = "block"
}

let modalClose = () => {
    modalWrapper.style.display = "none"
}

btnModalClose.onclick = function () {
    modalClose();
}

modalWrapper.addEventListener("click", (event) => {
    if(event.target == event.currentTarget){
        modalClose();
    }

})

//отработка нажатия на esc, прячем модальное окно
document.addEventListener("keydown", function(e){
    if(e.key === 'Escape'){
        modalClose();
    }
})