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
        companyName: "BC Technology for Learning Society",
        period: "January 2023 - February 2023",
        website: "https://reusetechbc.ca/",
        logo: "company1-logo.png", // Add your logo file
        type: "Work Experience",
        roles: [
            "Refurbishing computer and laptop hardware/parts and installing software.",
            "Quality check of refurbished computers and laptops.",
            "Dividing tasks with the help of team work."
        ]
    },
    {
        companyName: "Greater Vancouver Food Bank",
        period: "August 2022 - August 2024",
        website: "https://foodbank.bc.ca/",
        logo: "company2-logo.png",
        type: "Volunteer",
        roles: [
            "Helping people to get food with a with a friendly and embracing manner.",
            "Doing team work to complete tasks such as restocking.",
        ]
    },
    {
        companyName: "Shoppers Drug Mart",
        period: "February 2022 - May 2022",
        website: "https://www.shoppersdrugmart.ca/",
        logo: "volunteer-logo.png",
        type: "Volunteer Pharmacy Assistant",
        roles: [
            "Customer service: Greeting customers and giving out prescriptions.",
            "Calling customers to invite them to pick up their prescriptions.",
            "Locating and cashing out prescriptions and ancillary items, with my own responsibility."
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
