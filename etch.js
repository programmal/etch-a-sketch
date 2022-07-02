// Creates skeleton elements.
const maincont = document.querySelector ("#etchCont");
const gridcont1 = document.createElement ('div');
const gridcont2 = document.createElement ('div');
gridcont1.className = ('gridcont1');
gridcont2.className = ('gridcont2');
maincont.append (gridcont1);

// Color selectors.

const colors = document.querySelector ("#colorselect");
const colorholder = document.createElement ('div');
const red = document.createElement ('button');
red.textContent = ("Red");
const blue = document.createElement ('button');
blue.textContent = ("Blue");
const green = document.createElement ('button');
green.textContent = ("Green");
const white = document.createElement ('button');
white.textContent = ("White");
const black = document.createElement ('button');
black.textContent = ("Black");
red.addEventListener ('click', () => {
    color = "red";
})
blue.addEventListener ('click', () => {
    color = "blue";
})
green.addEventListener ('click', () => {
    color = "green";
})
white.addEventListener ('click', () => {
    color = "white";
})
black.addEventListener ('click', () => {
    color = "black";
})
colors.append (colorholder);
colorholder.append (red);
colorholder.append (green);
colorholder.append (blue);
colorholder.append (white);
colorholder.append (black);


let color = "black";

//button info
const begin = document.createElement ('button');
begin.textContent = "Press to begin!"
begin.className = ('startbut');
maincont.append (begin);

// Remove children function
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Function to color the boxes.
const onClick = function () {
        this.style.backgroundColor = color;
}

// Grid creation using the button + grid info lol idk
begin.addEventListener ('click', () => {
    etchGrow();
})
const subCon = document.querySelector ("#subCont");
subCon.append (gridcont2);
const gridcont= document.querySelector (".gridcont2");
const gridcontroller = document.createAttribute ('div');
gridcontroller.className = ('gridcontroller');


function etchGrow() {
    removeAllChildNodes(gridcont2);
    let numsquares = prompt("How many squares would you like on each side?");
    console.log(numsquares);
    gridcont2.style.gridTemplateColumns = ("repeat("+numsquares+", 16fr)");
    gridcont2.style.gridTemplateRows = ("repeat("+numsquares+", 16fr)");
    if (numsquares >= 100){
        alert("Nice try lol, try a number below 100!")
    }else{
    for (i = 0 ; numsquares*numsquares > i; i++) {
        const totalsquares = document.createElement ('div');
        totalsquares.className = ('drawspace' + i);
        totalsquares.addEventListener("click", onClick);
        gridcont2.append (totalsquares);
        
    } }
}
