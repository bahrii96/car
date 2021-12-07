function toggleMobileMenu() {
    document.querySelector('#menu').classList.toggle('active')
    // document.querySelector('.mobile__bar').classList.toggle('active')
}

// vкнопка меню для мобільного
function toggleMobile() {
    document.querySelector('#mobile').classList.toggle('active')
    // document.querySelector('.mobile__bar').classList.toggle('active')
}


// показати быльше

function toggleMore() {
    document.querySelector('#more').classList.toggle('active')
    // document.querySelector('.marka__more').classList.toggle('active')
}
// показати більше відгуки
function toggleReviews() {
    document.querySelector('#reviews').classList.toggle('active')
    // document.querySelector('.reviews__more').classList.toggle('active')
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
const availability= document.querySelector('#form_availability')
function toggleAvailability() {
   availability.classList.toggle('active')
    // document.querySelector('.availability').classList.toggle('active')
}
function closeFormAvailability() {
	availability.classList.remove('active')
}

// авто в європі
const carInEurope=document.querySelector('#form_europe')
function toggleEurope() {
    carInEurope.classList.add('active')
	
}
function closeFormEurope() {
		carInEurope.classList.remove('active')
	}

	// РЕГИСТРАЦИЯ
	const registration=document.querySelector('#form')
	function toggleRegistration() {
    registration.classList.toggle('active')
 
}
function closeFormRegistration() {
	 registration.classList.remove('active')
}
	
 

// function closeForm() {
// document.querySelector('.form-button_button').classList.remove('active')	
// }
 
// переключення меню в секції марка
 var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'

var targetIdToShow = 1

function main() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}
 
main()
 