let boxes = document.querySelectorAll(".box");
let RESERT = document.querySelector(".reset");
let turn0 = true; 
let newGameButton = document.querySelector(".newgame");
let msgg = document.querySelector(".msg");
let msgcontainerr = document.querySelector(".msgcontainer")

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const restgame =()=>{
  turn0=true;
  enablebox();
  msgcontainerr.classList.add("hide")

}
const disabledbox =()=>{
  for( let box of boxes){
    box.disabled = true;
  }
}
const enablebox =()=>{
  for( let box of boxes){
    box.disabled = false;
      box.innerText ="";
      }
      msgcontainerr.classList.add("hide");
}
boxes.forEach((box) => {
   
    box.addEventListener("click", () => {
      console.log("cliked")
        if (turn0){
         box.innerText ="O";
          turn0 = false;
        }
        else{
          box.innerText ="X";
          turn0 = true;
        }   
        win();
        box.disabled = true;
    });
});
const showwinner=(winner)=>{
  msgg.innerText = `Player ${winner} wins!`
  // msgcontainerr.classList.add("show");
  msgcontainerr.classList.remove("hide");
  disabledbox();

}
const win =()=>{
  for(i of winPatterns){
    let pos1 = boxes[i[0]].innerText;
    let pos2 = boxes[i[1]].innerText;
    let pos3 = boxes[i[2]].innerText;
    if(pos1!=""&&pos2!=""&&pos3!=""){
      if(pos1===pos2&&pos2===pos3){
        console.log("winner",pos1);
        showwinner(pos1);
      }
    }
    // console.log(i[0],i[1],i[2]);
    // console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]]);
  }

}
newGameButton.addEventListener("click",restgame);
RESERT.addEventListener("click",restgame);
