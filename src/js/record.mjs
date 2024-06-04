import { setLocalStorage, getLocalStorage } from "./utils.mjs"

export function recordTemplate(anime){
    return `<tr>
                <td><img src="${anime.image}" alt="image of ${anime.name}"></td>
                <td>
                <h3>${anime.title}</h3>
                    <p>Episodes: ${anime.episodes}</p>
                </td>
                <td>
                    <p><a href="#" id="removed" data-id=${anime._id}>Remove</a></p>
                </td>
            </tr>`;
}

export default class record{
    constructor(dataSource){
        this.storage = [];
        this.animeDetail = {};
        this.anime_id;
        this.dataSource = dataSource;
    }
    async init(){
        this.storage = getLocalStorage("wList");
        this.renderTemplate();
        this.removeFromStorage();
    }
    getWhishingStorage(){
        this.storage = getLocalStorage("wList");
        if (this.storage === null || this.storage === undefined) this.storage = [];
    }
    async addToStorage(){
        try {
            const wishList = document.querySelectorAll("#addWishlist")
            wishList.forEach(star =>{
                star.addEventListener("click", async (event)=>{
                event.preventDefault();
                await this.getWhishingStorage();
                this.getAnimeId(event);
                this.storage.forEach(element => {
                    if (element._id === this.anime_id){
                        throw new Error("inside already");
                    }
                });
                await this.getAnimeDetail();
                await this.storage.push(this.animeDetail);
                this.storage = setLocalStorage("wList", this.storage);
            })
        })
        } catch (e) {
            console.log("Inside already" + e)
        }

    }
    async removeFromStorage(){
        try {
            const wishList = document.querySelectorAll("#removed")
            wishList.forEach(star =>{
                star.addEventListener("click", (event)=>{
                event.preventDefault();
                this.getWhishingStorage();
                this.getAnimeId(event);
                this.storage.forEach(element => {
                    if (element._id === this.anime_id){
                        const index = this.storage.findIndex(item => item._id === this.anime_id);

                        if (index !== -1){
                            this.storage.splice(index, 1);
                        }
                    }
                });
                this.storage = setLocalStorage("wList", this.storage);
                window.location.reload();
            })
        })
        } catch (e) {
            console.log("Inside already" + e)
        }

    }
    async getAnimeDetail(){
        this.animeDetail = await this.dataSource.getAnimeByID(this.anime_id);
    }
    renderTemplate(){
        let htmlString = this.storage.map(recordTemplate);
        document.querySelector("#animeWish").insertAdjacentHTML("afterbegin", htmlString.join(""));
    }
    async getAnimeId(event){
        console.log(event.target);
        if (event.currentTarget.dataset.id) { // Check if clicked element has a data-id attribute
            const animeId = event.currentTarget.dataset.id;
            this.anime_id = animeId;
        }
    }
}
