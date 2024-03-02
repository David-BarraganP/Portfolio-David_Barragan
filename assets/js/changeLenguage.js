document.addEventListener('DOMContentLoaded', function () {
//  codigo
const elementsToTranslate = document.querySelectorAll('[data-translate-es]')
const btnchangeLanguage = document.getElementById('changeLanguageBtn')

let language = 'es'

btnchangeLanguage.addEventListener('click', function (){
    if (language === 'es') {
        for(const phrase of elementsToTranslate) {
            const translation = phrase.getAttribute('data-translate-en')
            phrase.textContent = translation
        }
        document.getElementById('downloadCV').href ='./assets/cv/CV-DB-ENGLISH.jpeg'
        language = 'en'
    } else {
        for(const phrase of elementsToTranslate) {
            const translation = phrase.getAttribute('data-translate-es')
            phrase.textContent = translation
        }
        document.getElementById('downloadCV').href ='./assets/cv/CV-DB-ESPAÑOL.jpeg'
        language = 'es' 
    }
})

})