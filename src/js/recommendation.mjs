import externalServices from "./externalServices.mjs";
import record from "./record.mjs";

export async function recommend(link){
    const recommendation = new externalServices(link);
    const result =  await recommendation.getData();
    const data = result.data;
    let recommendationSection = document.querySelector(".recommendationSection");
    recommendationSection.innerHTML = "";
    let htmlString = data.map(recommendationTemplate);
    
    recommendationSection.insertAdjacentHTML("afterbegin", htmlString.join(""));

    popUpWindow();
    const dataSource = new externalServices();
    const Record = new record(dataSource);
    Record.addToStorage();
    
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
                <a href="#" id="addWishlist" data-id=${anime._id}><i id="websiteLogo" class="fa-sharp fa-regular fa-star"></i></a>
                    <img src="${anime.image}" alt="${anime.title}">
                    <h3 class="title">${anime.title}</h3>
                    <a href="#" class="moreInfo">More Info</a>
                </div>
                <div class="pop-up">
                    <img src="${anime.image}" alt="${anime.title}">
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
            <label for="">Page:<input type="number" Readonly value="${pageNumber}"main="1" max="100"></label>
            
            <a href="#recommendationSection" id="next">Next</a>`
}

export default class recommendation{
    constructor(type, page, size=1, search="", genres="", sortBy="", sortOrd =""  ){
        this.type = type;
        this.page = page;
        this.size = size, 
        this.search = search, 
        this.genres = genres, 
        this.sortBy = sortBy, 
        this.sortOrd = sortOrd;
        this.link;
    }
    init(){
        this.getLink();
        this.nextPage();
        this.prevPage();
    }
    getLink(){
        let section = document.querySelector("#pageManipulation");
        const parameters = [ this.size , this.search , this.genres , this.sortBy , this.sortOrd]
        this.link = this.type + this.page;
        parameters.forEach(element =>{
            if (element !== null || element!== undefined){
                this.link += element
            }
        })
        recommend(this.link);
        section.innerHTML = "";
        section.insertAdjacentHTML("beforeend", pageManipulation(this.page));
        this.nextPage();
        this.prevPage();
    }
    getSize(size){
        this.size = size;
        this.getLink();
    } 
    getSearch(search){
        this.search = search;
        this.getLink();
    }
    getGenres(genres){
        this.genres = genres;
        this.getLink();
    } 
    getSortBy(sortBy){
        this.sortBy = sortBy;
        this.getLink();
    } 
    getSortOrd(sortOrd){
        this.sortOrd = sortOrd;
        this.getLink();
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

