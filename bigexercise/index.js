let isOpen = false;
const sideCanvas = document.querySelector('.sidecanvas');
const moreIcon = document.querySelector('.moreicon');
function switchCanvas(){
    sideCanvas.style.transition = 'transform 1s ease';    
    if(isOpen == false) {
        sideCanvas.style.transform = 'translateX(-100vw)'
    }
    else {
        sideCanvas.style.transform = 'translateX(100vw)'
    }
    isOpen = !isOpen;
    setTimeout(function(){
        sideCanvas.style.transition = 'transform 0s';    
    }, 1000)
}
moreIcon.addEventListener('click', switchCanvas);

const x_icon = document.querySelector(".x-icon");
x_icon.addEventListener('click', switchCanvas);