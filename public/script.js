const showHides = document.getElementsByClassName("btn")
const showHides1 = document.getElementsByClassName("btn1")
const showHides2 = document.getElementsByClassName("btn2")







for (let showHide of showHides ) {

    showHide.addEventListener("click", function(){
        if (showHide.textContent == "ESCONDER") {
            showHide.textContent = "MOSTRAR"
            document.getElementById('ops').classList.add("hide")
        } else {
            showHide.textContent = "ESCONDER"
            document.getElementById('ops').classList.remove("hide")
        }
    })


}

for (let showHide1 of showHides1 ) {

    showHide1.addEventListener("click", function(){
        if (showHide1.textContent == "ESCONDER") {
            showHide1.textContent = "MOSTRAR"
            document.getElementById('ops1').classList.add("hide")
        } else {
            showHide1.textContent = "ESCONDER"
            document.getElementById('ops1').classList.remove("hide")
        }
    })


}

for (let showHide2 of showHides2 ) {

    showHide2.addEventListener("click", function(){
        if (showHide2.textContent == "ESCONDER") {
            showHide2.textContent = "MOSTRAR"
            document.getElementById('ops2').classList.add("hide")
        } else {
            showHide2.textContent = "ESCONDER"
            document.getElementById('ops2').classList.remove("hide")
        }
    })


}