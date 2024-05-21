import externalServices from "./externalServices.mjs";

function heroImageTemplate(anime){
    return `<img class="slide" src="${anime.image}" alt="">
           `;
}

function dotCirclesShow(){
    return `<a class="prev" onclick="plusSlides(-1)">❮</a>
    <a class="next" onclick="plusSlides(1)">❯</a>`;
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

    const dotContainer = document.querySelector(".dot");
    dotContainer.insertAdjacentHTML("afterbegin", dotCirclesShow());
}