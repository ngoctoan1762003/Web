let isOpen = false;
const sideCanvas = document.querySelector('.sidecanvas');
console.log(sideCanvas)
function switchCanvas(){
    if(isOpen == false) sideCanvas.style.display = flex;
    else sideCanvas.style.display = none;
    isOpen = !isOpen;
    console.log('oke');
}
sideCanvas.addEventListener('click', switchCanvas)
