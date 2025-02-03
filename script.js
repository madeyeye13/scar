// Toggle mobile navigation
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.add('active');
});

document.querySelector('.close-nav').addEventListener('click', () => {
    document.querySelector('.mobile-nav').classList.remove('active');
});

// Toggle cart sidebar
document.querySelector('.mobile-cart-btn').addEventListener('click', () => {
    document.querySelector('.cart-sidebar').classList.add('active');
});

document.querySelector('.carte').addEventListener('click', () =>{
    document.querySelector('.cart-sidebar').classList.add('active')
});

document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('.cart-sidebar').classList.remove('active');
});


//--------------HERO SECTION


let slides = document.querySelectorAll('.slide');
        let index = 0;
        
        function nextSlide() {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }
        setInterval(nextSlide, 5000);





//// --------------- PROGRESS BAR/OUR CAUSE

window.onload = function () {
    const causeSection = document.getElementById("cause");
    const progressBars = document.querySelectorAll(".cause-bar");

    // Target percentages for each progress bar
    const progressValues = [101, 102, 40, 40];

    let hasAnimated = false; // Prevents re-triggering animation multiple times

    function animateProgressBars() {
        const sectionPosition = causeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition && !hasAnimated) {
            hasAnimated = true; // Ensures animation only runs once

            progressBars.forEach((bar, index) => {
                let width = 0; // Start from 0%
                const targetWidth = progressValues[index]; // Target percentage

                function updateWidth() {
                    if (width < targetWidth) {
                        width += 1; // Increase width by 1% per frame
                        bar.style.width = `${width}%`;
                        requestAnimationFrame(updateWidth); // Continue animation
                    }
                }

                updateWidth();
            });
        }
    }

    // Run animation when scrolling and ensure it starts after the page fully loads
    window.addEventListener("scroll", animateProgressBars);
    animateProgressBars(); // Run on page load in case section is already visible
};



//----------------Javascript for scrolling

// Clone the content to ensure seamless loop
const content = document.querySelector('.sscr-content');
const originalText = content.innerHTML;
content.innerHTML = originalText + originalText;

// Function to check if more clones are needed
function checkScroll() {
    const scrollWidth = content.scrollWidth;
    const containerWidth = content.parentElement.offsetWidth;
    
    if (scrollWidth < containerWidth * 3) {
        content.innerHTML += originalText;
    }
}

// Check periodically if more clones are needed
setInterval(checkScroll, 1000);



///SCROLLING FOR LOGO SPONSOR

 // Clone logos to ensure seamless loop
 const container = document.querySelector('.logo-container');
 const originalContent = container.innerHTML;
 
 // Function to check if more clones are needed
 function checkScroll() {
     const scrollWidth = container.scrollWidth;
     const containerWidth = container.parentElement.offsetWidth;
     
     if (scrollWidth < containerWidth * 3) {
         container.innerHTML += originalContent;
     }
 }

 // Check periodically if more clones are needed
 setInterval(checkScroll, 1000);



 ////------------TESTIMONIAL----------

 const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;
        let intervalId;
        let touchStartX = 0;
        let touchEndX = 0;

        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            dots.forEach(dot => {
                dot.classList.remove('active');
            });

            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }

        function previousTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        }

        function startInterval() {
            intervalId = setInterval(nextTestimonial, 6000);
        }

        function stopInterval() {
            clearInterval(intervalId);
        }

        // Click handlers for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showTestimonial(currentIndex);
                stopInterval();
                startInterval();
            });
        });

        // Touch handlers for swipe
        document.querySelector('.testimonial-container').addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        document.querySelector('.testimonial-container').addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX;
        });

        document.querySelector('.testimonial-container').addEventListener('touchend', () => {
            const swipeDistance = touchStartX - touchEndX;
            if (Math.abs(swipeDistance) > 50) {
                if (swipeDistance > 0) {
                    nextTestimonial();
                } else {
                    previousTestimonial();
                }
                stopInterval();
                startInterval();
            }
        });

        // Hover handlers
        document.querySelector('.testimonial-container').addEventListener('mouseenter', stopInterval);
        document.querySelector('.testimonial-container').addEventListener('mouseleave', startInterval);

        // Start the carousel
        startInterval();



        ////--------------DONATION SECTION HOMEPAGE----------
        function setAmount(button, amount) {
            // Reset all buttons to grey
            const buttons = document.querySelectorAll('.amount-btn');
            buttons.forEach(button => button.classList.remove('bg-[#522b81]', 'text-white'));
            buttons.forEach(button => button.classList.add('bg-gray-300', 'text-black'));
    
            // Set the selected button to purple
            button.classList.add('bg-[#522b81]', 'text-white');
            document.getElementById('amount').value = '$' + amount;
        }