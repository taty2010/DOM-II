///WINDOW ONLOAD EVENT
const page = document.querySelector('body');
const fade = document.querySelector('.fade');
window.onload = ((event) =>{
    page.classList.remove('fade');
});
///END ONLOAD

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
        let bigger = 1
        lastImg.style.transform = "scale(1.5)"

});
///END WHEEL


