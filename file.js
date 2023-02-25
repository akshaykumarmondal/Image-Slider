const nextEl=document.querySelector('.next');
const imageContainerEl=document.querySelector('.image-container');
const imgsEl=document.querySelectorAll('img');
const prevEl=document.querySelector('.prev');

let currentImg=1;
let timeOut;

nextEl.addEventListener('click',()=>{

    currentImg++;
    clearTimeout(timeOut);  //to stop the timer while clicking
    updateImg();
})

prevEl.addEventListener('click',()=>{

    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})

updateImg();

function updateImg(){

    if(currentImg > imgsEl.length){
        currentImg=1;
    }
    else if(currentImg<1){
        currentImg=imgsEl.length;
    }

    // added css property to go to the next image.
    imageContainerEl.style.transform=`translateX(-${(currentImg -1) * 500}px)`

    //to see the third image, just double the width-->imageContainerEl.style.transform='translateX(-1000px)'

    timeOut= setTimeout(()=>{

        currentImg++;
        updateImg();
    },2500)
}