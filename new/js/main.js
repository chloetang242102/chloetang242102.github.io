function switchTestimonial(index) {
    //remove all html with without active
    const items = document.querySelectorAll('.testimonial-item');
    items.forEach(item => item.classList.remove('active'));

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));

    // add active to current selected testimonial-item
    document.getElementById(`testi-${index}`).classList.add('active');
    dots[index+1].classList.add('active');
}

// scrll back to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //smooth rolling
    });
}

//when web is on certain height then show the to top button
window.onscroll = function() {
    const toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTopBtn.style.opacity = "1";
    } else {
        toTopBtn.style.opacity = "0.5"; 
    }
};