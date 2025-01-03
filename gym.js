let trains = document.getElementById("trains");
let connects = document.getElementById("connects");
let members = document.getElementById("members");
let programs = document.getElementById("programs");

trains.addEventListener("click", function(){
    trains.style.color="green";
    members.style.color="white";
    connects.style.color="white";
    programs.style.color="white";
})

programs.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="white";
    connects.style.color="white";
    programs.style.color="green";
})

connects.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="white";
    connects.style.color="green";
    programs.style.color="white";
})

members.addEventListener("click", function(){
    trains.style.color="white";
    members.style.color="green";
    connects.style.color="white";
    programs.style.color="white";
})


let mainBtn = document.getElementById("mainBtn");
mainBtn.addEventListener("click", function(){
    document.querySelector(".join").style.display="block";
})

let join = document.getElementById("join");
join.addEventListener("click", function(){
    let names = document.getElementById("names");
        let number = document.getElementById("number");
    if(names.value === "" && number.value === ""){
        alert("please Enter Name and Number")
    }else
        alert("Thanks for Joining");
        document.querySelector(".join").style.display="none";
})

//slide

const slideContainer = document.querySelector(".slide");
const slides = document.querySelectorAll(".slide img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;


function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("middle-slide"); 
        if (index === (currentIndex + 1) % slides.length) {
            slide.classList.add("middle-slide"); 
        }
        
        slide.style.opacity = index === (currentIndex + 1) % slides.length ? "1" : "0.5";
    });

    
    const offset = -(currentIndex * (slides[0].offsetWidth + 20)); 
    slideContainer.style.transform = `translateX(${offset}px)`;
}

next.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++; 
    } else {
        currentIndex = 0; 
    }
    updateSlides();
});

prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--; 
    } else {
        currentIndex = slides.length - 3; 
    }
    updateSlides();
});


updateSlides();



let submit = document.getElementById("submit");
submit.addEventListener("click", function(){
let name = document.getElementById("name");
let pass = document.getElementById("pass");
if(name.value === "" && pass.value === ""){
alert("please Enter Name and Password")
}else{
alert("Thanks for Connecting");
}})