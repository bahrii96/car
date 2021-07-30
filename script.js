function toggleMobileMenu() {
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('.mobile__bar').classList.toggle('active')
}
function toggleRegistration() {
    document.querySelector('#form').classList.toggle('active')
    document.querySelector('.registration').classList.toggle('active')
}

// показати быльше

function toggleMore() {
    document.querySelector('#more').classList.toggle('active')
    document.querySelector('.marka__more').classList.toggle('active')
}
// показати більше відгуки
function toggleReviews() {
    document.querySelector('#reviews').classList.toggle('active')
    document.querySelector('.reviews__more').classList.toggle('active')
}