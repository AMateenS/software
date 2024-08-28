    function showsignpage(){
        const signup=document.querySelector('.navsignup');
        signup.style.display='flex';
    }
    function hidesignup(){
        const signup=document.querySelector('.navsignup');
        signup.style.display='none';
    }
     document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".show-menu");
    const closeIcon = document.querySelector(".close");
    const animatedElement = document.querySelector(".sidebar");

    menuIcon.classList.add("show");
    closeIcon.classList.remove("show");

    menuIcon.addEventListener("click", function() {
        animatedElement.classList.add("show");
        menuIcon.classList.remove("show");
        closeIcon.classList.add("show");
    });

    closeIcon.addEventListener("click", function() {
        animatedElement.classList.remove("show");
        closeIcon.classList.remove("show");
        menuIcon.classList.add("show");
    });
});

    $('.owl-carousel').owlCarousel({
loop:true,
nav:true,
dot:true,
autoplay:true,
autoplayTime:3000,
responsive:{
0:{
    items:1
},
600:{
    items:1
},
1000:{
    items:1
}
}
})
const faq_container=document.querySelectorAll('.faq-container');
faq_container.forEach(contain=>{
    const faq_question=contain.querySelector('.faq-question');
    const faq_answer=contain.querySelector('.faq-answer');
    faq_question.addEventListener('click',()=>{
        faq_question.classList.toggle('active');
        faq_answer.classList.toggle('active');
    })
})
