
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', (play)=>{
    document.querySelector('.bus').style.animationPlayState = 'running';
    document.querySelector('.bus').style.animationPlayState = 'running';
    document.querySelector('.bus').style.display = 'block';
})

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

//const drag = document.querySelector('dragImage');
//const drop = document.querySelector('img-box');

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

