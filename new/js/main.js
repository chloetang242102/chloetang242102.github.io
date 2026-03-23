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

function reorderTestimonials(startIndex) {
    
    const item1 = document.getElementById('testi-1');
    const item2 = document.getElementById('testi-2');
    const item3 = document.getElementById('testi-3');
    const item4 = document.getElementById('testi-4');
    const items = [item1, item2, item3, item4];

    
    if (startIndex === 1) { // 1, 2, 3, 4
        item1.style.order = "1"; item2.style.order = "2"; item3.style.order = "3"; item4.style.order = "4";
    } else if (startIndex === 2) { // 2, 3, 4, 1
        item1.style.order = "4"; item2.style.order = "1"; item3.style.order = "2"; item4.style.order = "3";
    } else if (startIndex === 3) { // 3, 4, 1, 2
        item1.style.order = "3"; item2.style.order = "4"; item3.style.order = "1"; item4.style.order = "2";
    } else if (startIndex === 4) { // 4, 1, 2, 3
        item1.style.order = "2"; item2.style.order = "3"; item3.style.order = "4"; item4.style.order = "1";
    }

    const dots = document.querySelectorAll('.dot-navigation .dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[startIndex - 1].classList.add('active');
}