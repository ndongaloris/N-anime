import { getLocalStorage, setLocalStorage } from "./utils.mjs"


export function recordTemplate(anime){
    return `<tr>
                <td><img src="${anime.image}" alt="image of ${anime.name}"></td>
                <td>
                <h3>${anime.name}</h3>
                    <p>Episodes:${anime.episode}</p>
                </td>
                <td>
                    <p><a href="#" id="removed">Remove</a></p>
                    <p><a href="#" id="Watched">Watched</a></p>
                </td>
            </tr>`;
}

export default class wishingList{
    constructor(){
        this.storage;
    }
    async init(){
        this.renderTemplate();
    }
    getStorage(){
        this.storage = getLocalStorage("wList");
        if (this.storage === null || this.storage === undefined) this.storage = [];
    }
    addToStorage(anime){
        this.getStorage();
    }
    renderTemplate(){
        document.querySelector("animeWish").insertAdjacentHTML("afterbegin", recordTemplate)
    }
}