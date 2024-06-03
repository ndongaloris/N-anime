import externalServices from "./externalServices.mjs";


    // JavaScript to handle the sliding functionality
let currentSlide = 0;



function showSlide(slideIndex) {
    const slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    if (slideIndex === 0  || slideIndex <= 0) {
        slideIndex = 0;
        slides[slideIndex].style.display = "block";
        slides[slideIndex + 1].style.display = "block";
        slides[slideIndex + 2].style.display = "block"
    }else{
        slides[slideIndex].style.display = "block";
        slides[slideIndex + 1].style.display = "block";
        if (slideIndex + 2 === slides.length){
            slides[slideIndex - 1].style.display = "block";
            slideIndex -= 2;
        }else{
            slides[slideIndex + 2].style.display = "block"
        }
    }
    currentSlide = slideIndex;
    return currentSlide;
}

function heroImageTemplate(anime){
    return `<div href="" class="slide">
                <img  src="${anime.image}" alt="">
                <div class="card-info">
                <h2>${anime.title}</h2>
                <p>${anime.synopsis}</p>
                </div>
            </div>`;
}

function dotCirclesShow(){
    return `<a id="prevBtn" class="prev">❮</a>
    <a id="nextBtn" class="next">❯</a>`;
}

function renderHeroImage(){
    const templateDivs = document.querySelectorAll(".slide");
    let index = 0;
    templateDivs.forEach(img =>{
        img.id += (index +1).toString();
        index++;
    })
}


export async function  heroImage(link){
    const hero = new externalServices(link);
    const result =  await hero.getData();
    const data = result.data;

    const imageContainer = document.querySelector("#slide");
    let htmlString = data.map(heroImageTemplate);
    imageContainer.insertAdjacentHTML("afterbegin", htmlString.join("")); 
    renderHeroImage();

    imageContainer.insertAdjacentHTML("afterbegin", dotCirclesShow());

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", () =>{
        showSlide(currentSlide - 1);
    });
    nextBtn.addEventListener("click", ()=>{
        showSlide(currentSlide + 1);
    });

    showSlide(currentSlide);
}