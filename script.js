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
        logo: "bctech.png", // Add your logo file
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
        logo: "fbnk.png",
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
        logo: "shoppers.png",
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
    
    if (companyName) { 
        updateExperience();
        nextExpBtn.addEventListener('click', nextExperience);
        prevExpBtn.addEventListener('click', prevExperience);
    }
});

const sfuPhotos = [
    'sfu2.png',
    'sfu3.png', 
    'sfu4.png'
];

let currentSfuPhotoIndex = 0;

const educationData = [
    {
        schoolName: "Simon Fraser University",
        period: "2023 - 2027",
        website: "https://www.sfu.ca/",
        logo: "sfu.png",
        type: "Bachelor's Degree",
        details: [
            "Computing Science Major",
            "Second year student",
            "Currently pursuing Bachelor of Applied Sciences in Computing Science",
            "Planning to specialize in Artificial Intelligence and Machine Learning."
        ]
    }
];

let currentEduIndex = 0;

const schoolLogo = document.getElementById('school-logo');
const schoolName = document.getElementById('school-name');
const schoolPeriod = document.getElementById('school-period');
const schoolWebsite = document.getElementById('school-website');
const educationType = document.getElementById('education-type');
const educationDetailsList = document.getElementById('education-details');

const sfuPhoto = document.getElementById('sfu-photo');
const prevSfuBtn = document.getElementById('prev-sfu-btn');
const nextSfuBtn = document.getElementById('next-sfu-btn');

function updateEducation() {
    const edu = educationData[currentEduIndex];
    
    schoolLogo.src = edu.logo;
    schoolLogo.alt = `${edu.schoolName} Logo`;
    schoolName.textContent = edu.schoolName;
    schoolPeriod.textContent = edu.period;
    schoolWebsite.href = edu.website;
    educationType.textContent = edu.type;
    
    educationDetailsList.innerHTML = '';
    edu.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        educationDetailsList.appendChild(li);
    });
}

function updateSfuPhoto() {
    sfuPhoto.src = sfuPhotos[currentSfuPhotoIndex];
    sfuPhoto.alt = `SFU Photo ${currentSfuPhotoIndex + 1}`;
}

function nextSfuPhoto() {
    currentSfuPhotoIndex = (currentSfuPhotoIndex + 1) % sfuPhotos.length;
    updateSfuPhoto();
}

function prevSfuPhoto() {
    currentSfuPhotoIndex = (currentSfuPhotoIndex - 1 + sfuPhotos.length) % sfuPhotos.length;
    updateSfuPhoto();
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
    
    setInterval(nextPhoto, 5000);
    
    if (companyName) { 
        updateExperience();
        nextExpBtn.addEventListener('click', nextExperience);
        prevExpBtn.addEventListener('click', prevExperience);
    }
    
    if (schoolName) {
        updateEducation();
        updateSfuPhoto();
        
        nextSfuBtn.addEventListener('click', nextSfuPhoto);
        prevSfuBtn.addEventListener('click', prevSfuPhoto);
        
        setInterval(nextSfuPhoto, 7000); 
    }
});

const hobbiesData = [
    {
        name: "Travelling",
        description: "I love travelling across Canada and internationally. It is my favourite activity while I am away from the keyboard. Exploring new cultures, architectures, and nature enlightens me.",
        photos: [
            'travel1.jpg',
            'travel2.jpg',
            'travel3.jpg',
            'travel4.jpg'
        ]
    },
    {
        name: "Eating",
        description: "I enjoy eating different foods. My favourite meal is sea-food. I also try to avoid sugar and junk food to stay healthy.",
        photos: [
            'eat1.jpg', 
            'eat22.jpg'
        ]
    },
    {
        name: "Nature and History",
        description: "Camping in the nature, hiking, being away from the crowd helps me clear my mind after the stress of the city.",
                     "I also like visiting historical places and explore the past civilizations.",
        photos: [
            'nat1.jpg', 
            'nat2.jpg',
            'nat3.jpg',
            'nat4.jpg',
            'hist1.jpg',
            'hist2.jpg',
            'hist3.jpg'
        ]
    }
];

let currentHobbyIndex = 0;
let currentHobbyPhotoIndex = 0;

const hobbyName = document.getElementById('hobby-name');
const hobbyDescription = document.getElementById('hobby-description');
const hobbyPhoto = document.getElementById('hobby-photo');
const hobbyCounter = document.getElementById('hobby-counter');
const prevHobbyBtn = document.getElementById('prev-hobby-btn');
const nextHobbyBtn = document.getElementById('next-hobby-btn');
const prevHobbySectionBtn = document.getElementById('prev-hobby-section-btn');
const nextHobbySectionBtn = document.getElementById('next-hobby-section-btn');

function updateHobby() {
    const hobby = hobbiesData[currentHobbyIndex];
    
    hobbyName.textContent = hobby.name;
    hobbyDescription.textContent = hobby.description;
    hobbyCounter.textContent = `${currentHobbyIndex + 1} / ${hobbiesData.length}`;
    
    currentHobbyPhotoIndex = 0;
    updateHobbyPhoto();
}

function updateHobbyPhoto() {
    const hobby = hobbiesData[currentHobbyIndex];
    if (hobby.photos && hobby.photos.length > 0) {
        hobbyPhoto.src = hobby.photos[currentHobbyPhotoIndex];
        hobbyPhoto.alt = `${hobby.name} Photo ${currentHobbyPhotoIndex + 1}`;
    }
}

function nextHobbyPhoto() {
    const hobby = hobbiesData[currentHobbyIndex];
    if (hobby.photos) {
        currentHobbyPhotoIndex = (currentHobbyPhotoIndex + 1) % hobby.photos.length;
        updateHobbyPhoto();
    }
}

function prevHobbyPhoto() {
    const hobby = hobbiesData[currentHobbyIndex];
    if (hobby.photos) {
        currentHobbyPhotoIndex = (currentHobbyPhotoIndex - 1 + hobby.photos.length) % hobby.photos.length;
        updateHobbyPhoto();
    }
}

function nextHobby() {
    currentHobbyIndex = (currentHobbyIndex + 1) % hobbiesData.length;
    updateHobby();
}

function prevHobby() {
    currentHobbyIndex = (currentHobbyIndex - 1 + hobbiesData.length) % hobbiesData.length;
    updateHobby();
}

document.addEventListener('DOMContentLoaded', function() {
    
    if (hobbyName) {
        updateHobby();
        
        nextHobbyBtn.addEventListener('click', nextHobbyPhoto);
        prevHobbyBtn.addEventListener('click', prevHobbyPhoto);
        
        nextHobbySectionBtn.addEventListener('click', nextHobby);
        prevHobbySectionBtn.addEventListener('click', prevHobby);
        
        setInterval(nextHobbyPhoto, 9000); 
    }
});
