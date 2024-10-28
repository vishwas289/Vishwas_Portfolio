// THEAM 

// Function to check if it's daytime based on local device time
const isDayTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Assuming day time is between 6:00 AM (6) and 6:00 PM (18)
    return currentHour >= 6 && currentHour < 18;
};

// Function to update the theme based on the time of day
const updateTheme = () => {
    const dayTime = isDayTime();
    
    if (dayTime) {
        document.body.className = ''; // Light theme
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
    } else {
        document.body.className = 'dark'; // Dark theme
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
    }
};

// Toggle theme on button click (manual override)
const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if (!bodyClass) {
        document.body.className = 'dark';
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>";
    } else {
        document.body.className = '';
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>";
    }
});

// Set the theme automatically based on local device time on page load
window.onload = () => {
    updateTheme();
};
