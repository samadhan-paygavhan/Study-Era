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