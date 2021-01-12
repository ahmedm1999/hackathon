
// Side Down 
const navbarContant = document.getElementsByClassName("navbar-nav") ;
const sideDown = document.getElementById("sideDown") ;
const openBar = document.getElementById("openBar") ;

const returnDropDownLang = () => {
    if (localStorage.getItem("lang") === "arab") {
        return `` ;
    }
} ;

sideDown.innerHTML = `
<div class="holeWindow" id="hole">
<ul class="second-nav">
<i class="fas fa-times closeBar" id="closeBar"></i>
<li class="nav-item active">
                    <a class="nav-link active" href="#intro">Introduction</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#object">Objective</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#participants">Information</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#winners">Winners</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#agenda">Hackathon Agenda</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#ruless">Participation Rules</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#faq">FAQs</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#time">Timeline</a>
                </li>
                <li class="nav-item active" id="arabic">
                <a class="nav-link" href="arabic/index.html">العربية</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link active" href="#home"><i class="fas fa-chevron-up"></i></a>
                </li>
</ul>
</div>
 `;
 
const closBar = document.getElementById("closeBar") ;
const closeSideDown = () => {
    sideDown.style.top = '-400px' ;
} ;
const openbar = () => {
    sideDown.style.top = '0' ;
    console.log() ;
} ;

openBar.addEventListener('click', openbar) ;

closeBar.addEventListener('click', closeSideDown) ;
window.addEventListener('scroll', closeSideDown) ;
/////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// End Side Down 


// FAQs //
const faqBtn = document.getElementsByClassName("faq-btn") ;
const faqTxt = document.getElementsByClassName("faq-txt") ;
const faqPlus = document.getElementsByClassName("faq-plus") ;
let dataIndex;
const closeFqa = (index) => {
    faqTxt[index].classList.remove("openFQA") ;
    faqPlus[index].classList.remove("openFAQ_color_plus") ;
    faqPlus[index].innerHTML = `<i class="fas fa-plus-circle"></i>` ;
    faqBtn[index].classList.remove("openFAQ_color") ;
    faqBtn[index].setAttribute("data-hidden", "true") ;
};
const checkClosed = () => {
    for(let i = 0 ; i < faqBtn.length; i++) {
        if (faqBtn[i].getAttribute("data-hidden") === "false") {
            closeFqa(i) ;
        } 
    }
};
// add Event click to faqBtn 
for(let btn of faqBtn) {
    btn.addEventListener('click', () => {
        if (btn.getAttribute("data-hidden") === "true") {
            checkClosed() ;
            faqTxt[btn.getAttribute("data-index")].classList.add("openFQA") ;
            faqPlus[btn.getAttribute("data-index")].classList.add("openFAQ_color_plus") ;
            faqPlus[btn.getAttribute("data-index")].innerHTML = `<i class="fas fa-minus-circle"></i>`
            faqBtn[btn.getAttribute("data-index")].classList.add("openFAQ_color") ;
            btn.setAttribute("data-hidden", "false") ;
        }
        else {
            closeFqa(btn.getAttribute("data-index")) ;
        }
    }) ;
}
// End FAQs //

// timeline-panel
const timelinePanel = document.getElementsByClassName("timeline-panel") ;
let i = 1 ;
window.addEventListener('resize', () => { for (let panel of timelinePanel) {
    if(window.innerWidth <= 760) {
        if(i%2 == 0) {
            panel.style.borderLeft = 'none' ;
            panel.style.borderRight = `30px solid ${panel.getAttribute("data-color")}` ;
        }
    }
    else {
        if(i%2 == 0) {
            panel.style.borderLeft = `30px solid ${panel.getAttribute("data-color")}` ;
            panel.style.borderRight = 'none' ;
        }
    }
    i++ ;
}}) ;
// End timeline-panel
const toTop = document.getElementById("toTop") ;
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.style.display = 'block' ;
    }
    else {
        toTop.style.display = 'none' ;
    }
}) ;

closeBar.addEventListener('click', closeSideDown) ;
window.addEventListener('scroll', closeSideDown) ;