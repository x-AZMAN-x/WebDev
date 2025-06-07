let currentSlide = `0`;
const slide = document.querySelectorAll(".carousel-slide");
function showSlide(n){
    slides.array.forEach(slide => {
        slide.style.display = "none";    });
        if (n>=slides.length){
            currentSlide = `0`;
        }else if (n<0){
            currentSlide = slides.length-1;
        }else{
            currentSlide = n;
        }
}
slides[currentSlide].style.display = `block`;
function moveSlide(n){
    showSlide(currentSlide+n);
}