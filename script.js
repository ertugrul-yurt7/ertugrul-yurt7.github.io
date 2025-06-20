// add photo file names here
const photos = [
    'ert1.jpg',
    'ert2.jpg', 
    'ert3.jpg',
];

let currentPhotoIndex = 0;

const profilePhoto = document.querySelector('.profile-photo');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updatePhoto() {
    profilePhoto.src = photos[currentPhotoIndex];
    profilePhoto.alt = `Photo of Ertugrul ${currentPhotoIndex + 1}`;
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updatePhoto();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

document.addEventListener('DOMContentLoaded', function() {
    
    updatePhoto();
    
    nextBtn.addEventListener('click', nextPhoto);
    prevBtn.addEventListener('click', prevPhoto);
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevPhoto();
        } else if (event.key === 'ArrowRight') {
            nextPhoto();
        }
    });
    
    // Auto-slideshow 
    setInterval(nextPhoto, 5000); // Changes photo every 5 seconds
});

const experiences = [
    {
        companyName: "Company Name 1",
        period: "January 2023 - Present",
        website: "https://company1.com",
        logo: "company1-logo.png", // Add your logo file
        type: "Work Experience",
        roles: [
            "Role 1: Description of what you did",
            "Role 2: Another responsibility or achievement",
            "Role 3: Additional tasks and accomplishments"
        ]
    },
    {
        companyName: "Company Name 2",
        period: "June 2022 - December 2022",
        website: "https://company2.com",
        logo: "company2-logo.png",
        type: "Internship",
        roles: [
            "Intern Role 1: What you learned and contributed",
            "Intern Role 2: Projects you worked on",
            "Intern Role 3: Skills you developed"
        ]
    },
    {
        companyName: "Volunteer Organization",
        period: "March 2022 - May 2022",
        website: "https://volunteer-org.com",
        logo: "volunteer-logo.png",
        type: "Volunteering Experience",
        roles: [
            "Volunteer Role 1: Community service activities",
            "Volunteer Role 2: Leadership responsibilities",
            "Volunteer Role 3: Impact and outcomes"
        ]
    }
];

let currentExpIndex = 0;

const companyLogo = document.getElementById('company-logo');
const companyName = document.getElementById('company-name');
const companyPeriod = document.getElementById('company-period');
const companyWebsite = document.getElementById('company-website');
const experienceType = document.getElementById('experience-type');
const rolesList = document.getElementById('roles-list');
const expCounter = document.getElementById('exp-counter');
const prevExpBtn = document.getElementById('prev-exp-btn');
const nextExpBtn = document.getElementById('next-exp-btn');

function updateExperience() {
    const exp = experiences[currentExpIndex];
    
    companyLogo.src = exp.logo;
    companyLogo.alt = `${exp.companyName} Logo`;
    companyName.textContent = exp.companyName;
    companyPeriod.textContent = exp.period;
    companyWebsite.href = exp.website;
    experienceType.textContent = exp.type;
    
    rolesList.innerHTML = '';
    exp.roles.forEach(role => {
        const li = document.createElement('li');
        li.textContent = role;
        rolesList.appendChild(li);
    });
    
    expCounter.textContent = `${currentExpIndex + 1} / ${experiences.length}`;
}

function nextExperience() {
    currentExpIndex = (currentExpIndex + 1) % experiences.length;
    updateExperience();
}

function prevExperience() {
    currentExpIndex = (currentExpIndex - 1 + experiences.length) % experiences.length;
    updateExperience();
}

document.addEventListener('DOMContentLoaded', function() {
    // Your existing photo code 
    
    if (companyName) { 
        updateExperience();
        nextExpBtn.addEventListener('click', nextExperience);
        prevExpBtn.addEventListener('click', prevExperience);
    }
});
