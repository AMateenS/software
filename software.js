    function showsidebar(){
        const sidebar=document.querySelector('.sidebar');
        sidebar.style.display='flex';
    }
    function hidesidebar(){
        const sidebar=document.querySelector('.sidebar');
        sidebar.style.display='none';
    }
    function showsignpage(){
        const signup=document.querySelector('.navsignup');
        signup.style.display='flex';
    }
    function hidesignup(){
        const signup=document.querySelector('.navsignup');
        signup.style.display='none';
    }
    $('.work').owlCarousel({
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
function showmore(){
    const project_more=document.querySelector('.project-more');
    project_more.style.display='flex';
    const less=document.querySelector('.less');
    less.style.display='flex';
    const more=document.querySelector('.more');
    more.style.display='none';
}
function showless(){
    const project_more=document.querySelector('.project-more');
    project_more.style.display='none';
    const less=document.querySelector('.less');
    less.style.display='none';
    const more=document.querySelector('.more');
    more.style.display='flex';
}
const faq_container=document.querySelectorAll('.faq-container');
faq_container.forEach(contain=>{
    const faq_question=contain.querySelector('.faq-question');
    const faq_answer=contain.querySelector('.faq-answer');
    faq_question.addEventListener('click',()=>{
        faq_question.classList.toggle('active');
        faq_answer.classList.toggle('active');
    })
})
