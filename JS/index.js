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


