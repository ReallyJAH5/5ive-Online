//smooth scroll
 
const poemEntries = document.querySelectorAll('.poem-entry');

function revealOnScroll(){
    const triggerBottom = window.innerHeight * 0.85;

    poemEntries.forEach(entry => {
        const entryTop = entry.getBoundingClientRect().top;
        if (entryTop < triggerBottom){
            entry.classList.add('visible');
        }
    });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);