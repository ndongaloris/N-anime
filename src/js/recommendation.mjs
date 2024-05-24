import externalServices from "./externalServices.mjs";

function recommendationTemplate(anime){
    return`<div class="container">
                <div class="anime-card">
                    <img src="${anime.image}" alt="">
                    <h3 class="title">${anime.title}</h3>
                    <a href="#" id="moreInfo">More Info</a>
                </div>
                <div class="pop-up">
                    <img src="${anime.image}" alt="">
                    <h2 class="title">${anime.title}</h2>
                    <p>Ranking: ${anime.ranking}</p>
                    <p>Genre: ${anime.genres}</p>
                    <p>Type: ${anime.type}</p>
                    <p>Episodes: ${anime.episodes}</p>
                    <p class="title">Status: ${anime.status}</p>
                    <p>Synopsis: ${anime.synopsis}</p>
                </div>
            </div>`
}

function pageManipulation(pageNumber){
    return `<a href="#" id="prev">Prev</a>
            <label for="">Page:<input type="number" Readonly value="${pageNumber}"main="1" max="100"> of 100</label>
            
            <a href="#" id="next">Next</a>
                `
}

function popUpWindow(){
    const moreInfo = document.querySelectorAll("#moreInfo");
    moreInfo.forEach(button =>{
        button.addEventListener("click", () =>{
            document.querySelector("body").classList.toggle(".active");
            document.querySelector("#pop-pup").classList.toggle("active")
        })

    })    
}


export async function recommend(link){
    const recommendation = new externalServices(link);
    const result =  await recommendation.getData();
    const data = result.data;
    let recommendationSection = document.querySelector(".recommendationSection");
    recommendationSection.innerHTML = "";
    let htmlString = data.map(recommendationTemplate);
    
    recommendationSection.insertAdjacentHTML("afterbegin", htmlString.join(""));
    
}

export default class recommendation{
    constructor(type, page, post){
        this.type = type;
        this.page = page;
        this. post = post;
        this. link;
    }
    init(){
        this.getLink();
        this.nextPage();
        this.prevPage();
    }
    getLink(){
        let section = document.querySelector("#pageManipulation");
        this.link = this.type + this.page + this.post;
        recommend(this.link);
        section.innerHTML = "";
        section.insertAdjacentHTML("beforeend", pageManipulation(this.page));
        this.nextPage();
        this.prevPage();
    }
    prevPage(){
        const prev = document.querySelector("#prev")
        prev.addEventListener("click", () =>{
            if (this.page > 1){
                this.page--;
            }
            this.getLink();
        })

    }
    nextPage(){
        document.querySelector("#next").addEventListener("click", () =>{
            if (this.page <= 100){
                this.page++;
            }
            this.getLink();
        })
    }
}
