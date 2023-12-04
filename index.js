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

const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if (!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
    }
})