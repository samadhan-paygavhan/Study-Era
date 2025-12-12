// Explore button

let explore = document.querySelector(".explore");

explore.addEventListener("click", ()=> {
    const section = document.getElementById("footer-section");
    goToSection(section);
});

function goToSection(targetElement) {

    if(targetElement) {
        targetElement.scrollIntoView ({
            behaviar: 'smooth',
            block: 'start'
        });
    } else {
        console.log("Element with footer-section this Id not found!");
    }
}


// Image Slider Automatic after 15 seconds

const left = document.querySelector(".leftArrow");
const right = document.querySelector(".rightArrow");
const slider = document.querySelector(".slider");

let slideLeft = 2;
let slideRight = 1;

const slide = 4;


const body = document.querySelector("body");
let intervalId;

body.addEventListener("mouseenter", () => {
    if (!intervalId) { 
        intervalId = setInterval(() => {
            if(slideRight < slide) {
                slider.style.transform = `translateX(-${slideRight*1200}px)`;
                slider.style.transition = `transform 0.3s ease-in-out`;
                slideRight++;
            } else {
                slider.style.transition = `none`;
                slider.style.transform = `translateX(0px)`;
                slideRight = 1;
            }

        }, 3000);
    }
});

body.addEventListener("mouseleave", () => {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Interval stopped.");
});


// Image Slider Using Arrow Buttons


left.addEventListener("click", ()=> {
    if(slideLeft >= 1) {
        slider.style.transform = `translateX(-${slideLeft*1200}px)`;
        slideLeft--;
    } else {
        slider.style.transform = `translateX(0px)`;
        slideLeft = 2;
    }
});

right.addEventListener("click", ()=> {
    if(slideRight < slide) {
        slider.style.transform = `translateX(-${slideRight*1200}px)`;
        slideRight++;
    } else {
        slider.style.transform = `translateX(0px)`;
        slideRight = 1;
    }

    
});

// Courses 

const viewMoreButton = document.querySelector(".viewMoreDiv");
const viewLessButton = document.querySelector(".viewLessDiv");
const courses = document.querySelector(".viewMoreCourse");
let viewMoreOpen = false;

viewLessButton.style.display = `none`;


viewMoreButton.addEventListener("click", ()=> {
    console.log("Button click!");

    if(viewMoreOpen === false) {
        courses.style.display = `contents`;
        viewMoreButton.style.display = `none`;
        viewLessButton.style.display = `flex`;


        

        viewMoreOpen = true;
    }
});

viewLessButton.addEventListener("click", ()=> {
    console.log("Button click!");

    if(viewMoreOpen === true) {
        courses.style.display = `none`;
        viewMoreButton.style.display = `flex`;
        viewLessButton.style.display = `none`;

        const courseContainer = document.getElementById("mainCourseContainer");

        goToSection(courseContainer);

        viewMoreOpen = false;  
    }
});


