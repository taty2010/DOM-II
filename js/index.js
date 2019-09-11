///WINDOW ONLOAD EVENT
const page = document.querySelector('body');
const fade = document.querySelector('.fade');
window.onload = ((event) =>{
    page.classList.remove('fade');
});
///END ONLOAD

///WINDOW RESIZE EVENT
function windowSize(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    alert(`I'm shrinking... shrinking!!!`)
}

window.onresize = windowSize;
///END RESIZE

/// MOUSEOVER BUS ANIMATION
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', (play)=>{
    document.querySelector('.bus').style.animationPlayState = 'running';
    document.querySelector('.bus').style.animationPlayState = 'running';
    document.querySelector('.bus').style.display = 'block';
})

/// END MOUSEOVER


/// MAIN NAV SCROLLING EVENT
const nav = document.querySelector('.main-navigation');
const navLink = document.querySelectorAll('nav a');
window.onscroll = () => scrollPosition();
function scrollPosition(){
    const position = window.pageYOffset | document.body.scrollTop;
    if(position > 40){
    nav.style.color = 'white';
    nav.style.background= "#ffbf5c";
    navLink.forEach((arr) => {
        arr.style.color = 'white';
    })
    }else{
        nav.style.color = 'black';
        nav.style.background= "white";
        navLink.forEach((arr) => {
            arr.style.color = 'black';
        })
    }
};
//END SCROLLING 

///DROP EVENT IMAGES
function allowDrop(event){
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id)
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}
///END DROP 

/// WHEEL EVENT IMAGE
const lastImg = document.querySelector('.imgLast')

lastImg.addEventListener('wheel', (zoom) => {
        let bigger = zoom.deltaY * -0.01;
        bigger = Math.min(Math.max(0.225, bigger), 6)
        lastImg.style.transform = `scale(${bigger})`

});
///END WHEEL


/// H2 CLICK EVENT 
const headerText = document.querySelectorAll('h2');
headerText.forEach((el) =>{
    el.addEventListener("click", () =>{
        let firstClick = false;
        el.style.color = 'pink';
        el.addEventListener("click", () => {
            if (firstClick === false){
                firstClick = true;
                secondClick = false
                el.style.color = 'blue';
                el.addEventListener("click", () => {
                    if (secondClick === false){
                        secondClick = true;
                        thirdClick = false;
                        el.style.color = "orange";
                    }
                })
            }
        })
    })
    el.addEventListener("dblclick", () => {
        if (thirdClick === false){
            el.style.color = null;
            el.stopPropagation();
        }
    })

})
/// END CLICK EVENT

const body = document.querySelector('.container')
body.addEventListener("click", () => {
    body.style.background = 'lightgray';
})

///KEYDOWN EVENT
const p = document.querySelector('p');
document.addEventListener('keydown', key);

function key() {
    p.style.color = "purple";
}

///END KEYDOWN

///FOCUS AND BLUR

const form = document.querySelectorAll('.form');

form.forEach((el) => {
    el.addEventListener('focus', (el) => {
        el.target.style.background = 'yellow';
    }, true);

    el.addEventListener('blur', (el) =>{
        el.target.style.background = '';
    }, true);
})