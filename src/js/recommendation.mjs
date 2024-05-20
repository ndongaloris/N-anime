import externalServices from "./externalServices.mjs";

function recommendationTemplate(anime){
    return`<div class="anime-card">
                <img src="${anime.image}" alt="">
                <h3 class="title">${anime.title}</h3>
            </div>;`
}

function pageManipulation(){
    return `<div id="pageManipulation"><a href="">Prev</a>
    <label for="">Page:<input type="number" value="1"main="1" max="100"> <button>Go</button>of 100</label>
    
    <a href="">Next</a></div>`
}


export async function recommend(){
    const recommendation = new externalServices("anime?page=1&size=24");
    const result = await recommendation.getData();
    const data = result['data'];
    const main = document.querySelector("main");
    let recommendationSection = document.createElement("section");
    recommendationSection.classList = "recommendationSection";
    let htmlString = data.map(recommendationTemplate);
    
    recommendationSection.insertAdjacentHTML("afterbegin", htmlString.join(""));
    recommendationSection.insertAdjacentHTML("beforeend", pageManipulation());
    
    main.appendChild(recommendationSection)
    
    console.log(result);
}