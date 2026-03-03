const franceButton = document.querySelector('.country__france')
const germanyButton = document.querySelector('.country__germany')
const englandButton = document.querySelector('.country__england')

const huntingPicteres = document.querySelector('.picteres__hunting')
const germanyPicteres = document.querySelector('.picteres__ger')
const englandPicteres = document.querySelector('.picteres__eng')


function toggleGermany() {

    huntingPicteres.style.display = 'none'
    germanyPicteres.style.display = 'none'
    englandPicteres.style.display = 'none'


    franceButton.classList.remove('hunting__button-active')
    germanyButton.classList.remove('germany__button-active')
    englandButton.classList.remove('england__button-active')


    germanyPicteres.style.display = 'grid'
    germanyButton.classList.add('germany__button-active')
}


function toggleEngland() {

    huntingPicteres.style.display = 'none'
    germanyPicteres.style.display = 'none'
    englandPicteres.style.display = 'none'


    franceButton.classList.remove('hunting__button-active')
    germanyButton.classList.remove('germany__button-active')
    englandButton.classList.remove('england__button-active')


    englandPicteres.style.display = 'grid'
    englandButton.classList.add('england__button-active')
}

function toggleFrance() {

    huntingPicteres.style.display = 'none'
    germanyPicteres.style.display = 'none'
    englandPicteres.style.display = 'none'


    franceButton.classList.remove('hunting__button-active')
    germanyButton.classList.remove('germany__button-active')
    englandButton.classList.remove('england__button-active')


    huntingPicteres.style.display = 'grid'
    franceButton.classList.add('hunting__button-active')
}


germanyButton.addEventListener("click", toggleGermany)
englandButton.addEventListener("click", toggleEngland)
franceButton.addEventListener("click", toggleFrance)


const burger = document.querySelector('.burger') 
const list = document.querySelector('.menu__list') 
const welcome = document.querySelector('.welcome')
const reproductions = document.querySelector('.reproductions')


burger.addEventListener("click", () => {
burger.classList.toggle('active')
list.classList.toggle('open')
welcome.classList.toggle('form')
reproductions.classList.toggle('top')
})