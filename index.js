const servicesButtons = document.querySelectorAll('.service__item');
const servicesDetails = document.querySelector('.services__right');

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    servicesDetails.innerHTML =
        `<h3>${details.title}</h3>
        ${details.description.map(paragraph => "<P>" + paragraph + "</p>").join('')}
        `

}

const removeActiveClass = () => {
    servicesButtons.forEach(button => {
        button.classList.remove('active');
    }
    )
}

servicesButtons.forEach(item => {
    item.addEventListener('click', () => {
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active')
    })
})

getService('frontend');

//NAV toggle 

const navMenu = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)

//close nav

const navItems = navMenu.querySelectorAll('a');


if (window.innerWidth < 768) {

    navItems.forEach(item => { item.addEventListener('click', closeNavHandler) })

}

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
