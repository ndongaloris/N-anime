import externalServices from "./externalServices.mjs";


export async function recommend(link){
    const recommendation = new externalServices(link);
    const result =  await recommendation.getData();
    const data = result.data;
    let recommendationSection = document.querySelector(".recommendationSection");
    recommendationSection.innerHTML = "";
    let htmlString = data.map(recommendationTemplate);
    
    recommendationSection.insertAdjacentHTML("afterbegin", htmlString.join(""));

    popUpWindow();
    
}

export function popUpWindow(){
    const moreInfo = document.querySelectorAll(".moreInfo");   
    moreInfo.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            // Find the card element
            const card = event.target.parentElement;

            // Find the sibling pop-up element
            const popUp = card.nextElementSibling;

            // Toggle the class for the pop-up
            popUp.classList.toggle("active");

            document.querySelectorAll(".closeWindow").forEach(element => {
                element.addEventListener("click", (event)=>{
                    event.preventDefault();

                    const parent = event.target.parentElement;
                    parent.classList.remove("active");
            });
                
            })
        });
    });
}

function recommendationTemplate(anime){
    return`<div class="container">
                <div class="anime-card">
                    <img src="${anime.image}" alt="">
                    <h3 class="title">${anime.title}</h3>
                    <a href="#" class="moreInfo">More Info</a>
                </div>
                <div class="pop-up">
                    <img src="${anime.image}" alt="">
                    <div class="windowInfo">
                        <h2 class="title">${anime.title}</h2>
                        <p>Ranking: ${anime.ranking}</p>
                        <p>Genre: ${anime.genres}</p>
                        <p>Type: ${anime.type}</p>
                        <p>Episodes: ${anime.episodes}</p>
                        <p class="title">Status: ${anime.status}</p>
                    </div>
                    <p>Synopsis: ${anime.synopsis}</p>
                    <a href="#" class="closeWindow">close</a>
                </div>
            </div>`
}

function pageManipulation(pageNumber){
    return `<a href="#recommendationSection" id="prev">Prev</a>
            <label for="">Page:<input type="number" Readonly value="${pageNumber}"main="1" max="100"> of 100</label>
            
            <a href="#recommendationSection" id="next">Next</a>`
}

export default class recommendation{
    constructor(type, page, post){
        this.type = type;
        this.page = page;
        this.post = post;
        this.link;
    }
    init(){
        this.getLink();
        this.nextPage();
        this.prevPage();
    }
    getLink(link){
        let section = document.querySelector("#pageManipulation");
        if (link ===  null){
            this.link = this.type + this.page + this.post;
        }else{
            this.link = link;
        }
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

