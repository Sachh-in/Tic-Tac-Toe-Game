let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgCont = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");



let turnX = true;  //Player-X, Player-0

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resGame = () => {
    turnX = true;
    enableBox();
    msgCont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX){
            //playerX
           box.innerText = "X" ;
           turnX = false;
        } else {
            //player0
            box.innerText = "0";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinnwe = (winner) => {
    msg.innerText = `Winner is ${winner}, Congrats!!`;
    msgCont.classList.remove("hide");
    disableBox();
}

const checkWinner = () => {
    for(let pat of winPattern){
        let pos1val = boxes[pat[0]].innerText;
        let pos2val = boxes[pat[1]].innerText;
        let pos3val = boxes[pat[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinnwe(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click",resGame);
reset.addEventListener("click",resGame);
