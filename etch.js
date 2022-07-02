// Creates skeleton elements.
const maincont = document.querySelector ("#etchCont");
const gridcont1 = document.createElement ('div');
const gridcont2 = document.createElement ('div');
gridcont1.className = ('gridcont1');
gridcont2.className = ('gridcont2');
maincont.append (gridcont1);


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

// function of button + grid creation

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
    if (numsquares >= 256){
        alert("Try a number below 256!")
    }else{
    for (i = 0 ; numsquares*numsquares > i; i++) {
        const totalsquares = document.createElement ('div');
        totalsquares.className = ('drawspace' + i);
        gridcont2.append (totalsquares);
        
    } }
}