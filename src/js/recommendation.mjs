import externalServices from "./externalServices.mjs";

function recommendationTemplate(anime){
    return`<div class="anime-card">
                <img src="${anime.image}" alt="">
                <h3 class="title">${anime.title}</h3>
                <h5 class="title">Status: ${anime.status}</h5>
            </div>;`
}

function pageManipulation(){
    return `<div id="pageManipulation"><a href="">Prev</a>
    <label for="">Page:<input type="number" value="1"main="1" max="100"> <button>Go</button>of 100</label>
    
    <a href="">Next</a></div>`
}


export async function recommend(link){
    const recommendation = new externalServices(link);
    const result =  await recommendation.getData();
    const data = result.data;
    let recommendationSection = document.querySelector(".recommendationSection");
    let htmlString = data.map(recommendationTemplate);
    
    recommendationSection.insertAdjacentHTML("afterbegin", htmlString.join(""));
    recommendationSection.insertAdjacentHTML("beforeend", pageManipulation());
        
}
