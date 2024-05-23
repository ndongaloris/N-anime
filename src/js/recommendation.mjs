import externalServices from "./externalServices.mjs";

function recommendationTemplate(anime){
    return`<div class="anime-card">
                <img src="${anime.image}" alt="">
                <h3 class="title">${anime.title}</h3>
                <h5 class="title">Status: ${anime.status}</h5>
            </div>`
}

function pageManipulation(){
    return `<div id="pageManipulation"><a id="prev">Prev</a>
    <label for="">Page:<input type="number" value="1"main="1" max="100"> <button>Go</button>of 100</label>
    
    <a id="next">Next</a></div>`
}


export async function recommend(link){
    const recommendation = new externalServices(link);
    const result =  await recommendation.getData();
    const data = result.data;
    let recommendationSection = document.querySelector(".recommendationSection");
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
        let section = document.querySelector("section");
        section.insertAdjacentHTML("afterbegin", pageManipulation());
        this.getLink();
        recommend(this.link);
        this.nextPage();
        this.prevPage();
    }
    getLink(){
        this.link = this.type + this.page + this.post;
    }
    nextPage(){
        const prev = document.querySelector("#prev")
        prev.addEventListener("click", () =>{
            if (this.page > 1){
                this.page--;
            }
        })

    }
    prevPage(){
        document.querySelector("#next").addEventListener("click", () =>{
            if (this.page < 100){
                this.page++;
            }
        })
    }
}
