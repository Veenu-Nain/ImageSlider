let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.style.scrollBehaviour = "auto";
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
})