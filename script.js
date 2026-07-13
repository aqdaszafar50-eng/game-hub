console.log("GameHub Loaded Successfully");

// Play Button
const playButton = document.getElementById("playBtn");

if (playButton) {
    playButton.addEventListener("click", () => {
        alert("Welcome to GameHub!");
    });
}

// Contact Form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;

        alert("Thank you " + name + "! Your message has been sent.");

        form.reset();

    });
}

// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 0 25px #3B82F6";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 10px 20px rgba(0,0,0,.35)";

    });

});

// Search Games
const search = document.getElementById("searchGame");

if (search) {

search.addEventListener("keyup", function(){

const value=this.value.toLowerCase();

const gameCards=document.querySelectorAll(".card");

gameCards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value))

card.style.display="block";

else

card.style.display="none";

});

});

}

// Back To Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

if(topBtn)

topBtn.style.display="block";

}else{

if(topBtn)

topBtn.style.display="none";

}

};

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
window.addEventListener("load",function(){

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.display="none";

},1500);

}

});























const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

};

update();

});