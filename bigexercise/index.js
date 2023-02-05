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

const contactheader = document.querySelector('.contactheader');
const popupForm = document.querySelector('.popup-form');
const startBtn = document.querySelector('.startbutton');
const startBtn2 = document.querySelector('.startbutton2');
const closeBtn = document.querySelector('.close-icon');
const popupSubmitBtn1 = document.querySelector('.popup-submitbutton');
const popupSubmitBtn2  = document.querySelector('.popup-submitbutton-2');
const popupForm2 = document.querySelector('.popup-form-2');

const header = document.querySelector('.header');
const service = document.querySelector('.service');
const about = document.querySelector('.about');
const step = document.querySelector('.step');
const price = document.querySelector('.price');
const testimonial = document.querySelector('.testimonial');
const blog = document.querySelector('.blog');

const headerPos = header.getBoundingClientRect();
const servicePos = service.getBoundingClientRect();
const aboutPos = about.getBoundingClientRect();
const stepPos = step.getBoundingClientRect();
const pricePos = price.getBoundingClientRect();
const testimonialPos = testimonial.getBoundingClientRect();
const blogPos = blog.getBoundingClientRect();

let item = document.querySelector('#service-item');
let item2 = document.querySelector('#about-item');
let item3 = document.querySelector('#step-item');
let item4 = document.querySelector('#price-item');
let item5 = document.querySelector('#testimonial-item');
let item6 = document.querySelector('#blog-item');

window.addEventListener('scroll', (event) => {
    let scroll = this.scrollY;
    console.log(scroll)
    if(scroll > 0){
        header.style.background = 'rgba(255, 255, 255)';
        header.style.boxShadow = '0px 5px 10px rgba(128, 128, 128, 0.4)';
        contactheader.style.display = 'none';
    }
    else{
        header.style.background = 'rgba(255, 255, 255, 0)';
        header.style.boxShadow = '0px 5px 10px rgba(128, 128, 128, 0)';
        contactheader.style.display = 'flex';
    }

    if(scroll >= 0 && scroll - 50 < aboutPos.top){
        item.className = 'listtoolitemactive';
        item2.className = 'listtoolitem';
        item3.className = 'listtoolitem';
        item4.className = 'listtoolitem';
        item5.className = 'listtoolitem';
        item6.className = 'listtoolitem';       
    }
    if(scroll - 50 > aboutPos.top && scroll - 50 < stepPos.top){
        item.className = 'listtoolitem';
        item2.className = 'listtoolitemactive';
        item3.className = 'listtoolitem';
        item4.className = 'listtoolitem';
        item5.className = 'listtoolitem';
        item6.className = 'listtoolitem';       
    }
    if(scroll - 50 > stepPos.top && scroll - 50 < pricePos.top){
        item.className = 'listtoolitem';
        item2.className = 'listtoolitem';
        item3.className = 'listtoolitemactive';
        item4.className = 'listtoolitem';
        item5.className = 'listtoolitem';
        item6.className = 'listtoolitem';       
    }
    if(scroll - 50 > pricePos.top && scroll - 50 < testimonialPos.top){
        item.className = 'listtoolitem';
        item2.className = 'listtoolitem';
        item3.className = 'listtoolitem';
        item4.className = 'listtoolitemactive';
        item5.className = 'listtoolitem';
        item6.className = 'listtoolitem';       
    }
    if(scroll - 50 > testimonialPos.top && scroll - 50 < blogPos.top){
        item.className = 'listtoolitem';
        item2.className = 'listtoolitem';
        item3.className = 'listtoolitem';
        item4.className = 'listtoolitem';
        item5.className = 'listtoolitemactive';
        item6.className = 'listtoolitem';       
    }
    if(scroll - 50 > blogPos.top){
        item.className = 'listtoolitem';
        item2.className = 'listtoolitem';
        item3.className = 'listtoolitem';
        item4.className = 'listtoolitem';
        item5.className = 'listtoolitem';
        item6.className = 'listtoolitemactive';       
    }
})

startBtn.addEventListener('click', (event) => {
    popupForm.style.opacity = '1';
    popupForm.style.visibility = 'visible';
})

startBtn2.addEventListener('click', (event) => {
    popupForm.style.opacity = '1';
    popupForm.style.visibility = 'visible';
})

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    popupForm2.style.opacity = '0';
    popupForm.style.opacity = '0';
    popupForm.style.visibility = 'hidden';
    popupForm2.style.visibility = 'hidden';
})

popupSubmitBtn1.addEventListener('click', (event) => {
    popupForm2.style.opacity = '1';
    popupForm.style.visibility = 'hidden';
    popupForm2.style.visibility = 'visible';
})

popupSubmitBtn2.addEventListener('click', (event) => {
    popupForm2.style.opacity = '0';
    popupForm2.style.visibility = 'hidden';
})