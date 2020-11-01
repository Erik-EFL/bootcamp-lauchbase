const modalOveraly = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id")
        modalOveraly.classList.add('active')
        modalOveraly.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    });
}

document.querySelector('.modal-fullscreen').addEventListener("click", function(){
    modal.classList.add('fullscreen')
})

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOveraly.classList.remove('active')
    modal.classList.remove('fullscreen')
    modalOveraly.querySelector("iframe").src = ""
})