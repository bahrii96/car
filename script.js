function toggleMobileMenu() {
    document.querySelector('#menu').classList.toggle('active')
    document.querySelector('.mobile__bar').classList.toggle('active')
}
function toggleRegistration() {
    document.querySelector('#form').classList.toggle('active')
    document.querySelector('.registration').classList.toggle('active')
  button.innerText = "Сохранить";
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

// кнопка показати більше
document.querySelectorAll("button").forEach(function(el){
  	el.addEventListener("click",function(){
      if(!this.dataset.secondname)
        return;
       var tmp = this.innerHTML;
       this.innerHTML = this.dataset.secondname;
       this.dataset.secondname = tmp;
    },false)
})

// Авто на складі
function toggleAvailability() {
    document.querySelector('#form_availability').classList.toggle('active')
    document.querySelector('.availability').classList.toggle('active')
}

// авто в європі
function toggleEurope() {
    document.querySelector('#form_europe').classList.toggle('active')
    document.querySelector('.europe').classList.toggle('active')
}


// кнопка закрити 
 
//  document.getElementById('f1').onclick = function () {
//     func(1);
// };
        //Update Content-Container Div 
 