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
