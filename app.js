let boxes = document.querySelectorAll(".box")
let resetbutton = document.querySelector("#resetbutton")
let msgcontainer =  document.querySelector (".msgco")
let message = document.querySelector("#message")

let turnO = true
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let disableboxes =  () =>{
    for(let box of boxes){
        box.disabled = true
    }
}

let enableboxes =  () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

let showWinner = (winner,) => {
message.innerText = `congratulations, winner is ${winner} `
msgcontainer.classList.remove("hide")
disableboxes()
}

let checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText
    if(pos1val!="" && pos2val!="" && pos3val!="" ){
        if(pos1val == pos2val && pos2val == pos3val){
            showWinner(pos1val)
        }
    }
    }
}
let resetgame = () => {
    turnO = true
    enableboxes()
    msgcontainer.classList.add("hide")

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "X"
            turnO = false
        }
        else {
            box.innerText = "O"
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
});
resetbutton.addEventListener("click",resetgame)