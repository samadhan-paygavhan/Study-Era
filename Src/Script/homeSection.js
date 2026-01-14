// When hover explore button the block show otherwise hide

const exploreBtn = document.querySelector(".explore");
const container = document.querySelector(".exploreContainer");

let closeTimer;

// Function to Show
const showContainer = () => {
    clearTimeout(closeTimer); // Cancel any pending close
    container.style.display = "block";
};

// Function to Hide (with delay)
const hideContainer = () => {
    closeTimer = setTimeout(() => {
        container.style.display = "none";
    }, 200);
};

// Event Listeners
exploreBtn.addEventListener("mouseenter", showContainer);
exploreBtn.addEventListener("mouseleave", hideContainer);

container.addEventListener("mouseenter", showContainer);
container.addEventListener("mouseleave", hideContainer);


// When hover profile logo the profile container block show otherwise hide

const profileLogo = document.querySelector(".profileSpan");
const profileContainer = document.querySelector(".profileContainer");

let closeTimerFor;

// Function to Show
const showProfileContainer = () => {
    clearTimeout(closeTimer); // Cancel any pending close
    profileContainer.style.display = "block";
};

// Function to Hide
const hideProfileContainer = () => {
    closeTimer = setTimeout(() => {
        profileContainer.style.display = "none";
    }, 200);
};

// Event Listeners
profileLogo.addEventListener("mouseenter", showProfileContainer);
profileLogo.addEventListener("mouseleave", hideProfileContainer);

profileContainer.addEventListener("mouseenter", showProfileContainer);
profileContainer.addEventListener("mouseleave", hideProfileContainer);

// When we hover particular course their subtopics show inside the course block

const courseExplore = document.querySelector('.courseExplore');

const topicMap = {
    'fullStackCourse': '.fullStackTopics',
    'machineLearning': '.machineLearningTopics',
    'dataScience': '.dataScienceTopics',
    'cyberSecurity': '.cyberSecurityTopics',
    'cloudComputing': '.cloudComputingTopics',
    'UI/UX': '.UIUxTopics',
    'communicationSkill': '.communicationSkillTopics'
};

courseExplore.addEventListener('mouseover', (e) => {
    const courseDiv = e.target.closest('.courses');
    if (!courseDiv) return;

    const topicClass = courseDiv.classList[0]; 
    const targetSelector = topicMap[topicClass];

    if (targetSelector) {

        document.querySelectorAll('.topics').forEach(div => div.style.display = 'none');

        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
            targetElement.style.display = 'block';
        }
    }
});


courseExplore.addEventListener('mouseleave', () => {
    document.querySelectorAll('.topics').forEach(div => {
        div.style.display = "none";
    });

    document.querySelector(".fullStackTopics").style.display = "block";

});


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


