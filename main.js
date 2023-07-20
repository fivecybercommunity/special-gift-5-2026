const slides = document.querySelectorAll(".slide")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

let counter = 0;

nextBtn.addEventListener("click", ()=>{
    counter++;
    carousel();
})

prevBtn.addEventListener("click", ()=>{
    counter--;
    carousel();
})

function carousel(){
    counter = counter==slides.length ? slides.length-1: counter<0?  0: counter;
    slides.forEach(function (Element){
        Element.style.transform = `translateX(${counter*-100}%)`
    });
}

let background = document.querySelector('#background-img')
let wave1 = document.querySelector('#wave-1')
let wave2 = document.querySelector('#wave-2')

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    if(value <= window.innerHeight){
        background.style.top = value*0.5 + "px"
        wave2.style.transform = `rotate(180deg) translateY( ${-250 + value*0.2}px)`;
        wave1.style.transform = `rotate(180deg) translateY( ${-200 + value*0.4}px)`;
        
    }
})

//gsap

const timeline = gsap.timeline({default: {duration: 1, ease: 'power3.out'}})

timeline
    .from('#logo-hero', { y:'-50%', opacity: 0 })
    .from('.judul', { y:'-50%', opacity: 0})

gsap.from("#perkenalan .deskripsi", {scrollTrigger : {trigger:"#perkenalan .deskripsi", once:false }, y:"-50%", duration: 1})    

//confetti
let end = null
let colors = ["#FFE15D", "#DC3535"]
function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
    });

    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
}

function renderConfetti(){
    end = Date.now() + 5* 1000
    frame();
}
window.addEventListener('hashchange', ()=>{
    if(window.location.hash === "#52026") renderConfetti();
})

if(window.location.hash === "#52026") {renderConfetti();}

let pass=""
let timeout=null

function timeoutReset(){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        pass=""
    },2000)
    console.log(timeout)
}

document.addEventListener('keydown', ({key})=>{
    timeoutReset()
    pass += key 
    if (pass == "fcc") {
        colors = ["#2E8A99", "#2E8A99"]
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
        pass = ""
    } else if (pass == "sman5") {
        colors = ["#FFF400", "#006D35"]
        renderConfetti()
        pass=""
    }
})

function shoot() {
    const defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };
    
    confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
    });

    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
    });
}

function daftar(){
    window.location.assign('https://docs.google.com/forms/d/e/1FAIpQLSddhhzzSLLl7ofwivnbyqoQZt_csuiwj7acvKSQaWEUvewjOQ/viewform?usp=sf_link')
}