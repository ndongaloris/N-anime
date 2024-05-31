import externalServices from "./externalServices.mjs";
import recommendation from "./recommendation.mjs";

function browseTemplate(){
    return`<label>Search<input type="text" id="searchInput" name="search" placeholder="search"></label>
            <label for="">Genres<select name="genres" id="genres">
            <option >Any</option>
            <option value="">Award Winning</option>
            <option value="">Action</option>
            <option value="">Suspense</option>
            <option value="">Horror</option>
            <option value="">Ecchi</option>
            <option value="">Avant Garde</option>
            <option value="">Sports</option>
            <option value="">Supernatural</option>
            <option value="">Fantasy</option>
            <option value="">Boys Love</option>
            <option value="">Drama</option>
            <option value="">Comedy</option>
            <option value="">Mystery</option>
            <option value="">Girls Love</option>
            <option value="">Slice of Life</option>
            <option value="">Adventure</option>
            <option value="">Romance</option>
            <option value="">Sci-Fi</option>
            <option value="">Erotica</option>
            <option value="">Hentai</option>
            <option value="">Action</option>
        </select></label>
        <label>Sort Order<select name="" id="">
            <option value="">Any</option>
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
            
        </select></label>
        <label>SOrt By <select name="" id="">
            <option value="">Any</option>
            <option value="">Ranking</option>
            <option value="">Title</option>
        </select></label>`;
}
export function renderBrowseTemplate(){
    const browseSection = document.querySelector("#browse");
    browseSection.insertAdjacentHTML("afterbegin", browseTemplate());
    search();
}

function search(){
    const search = document.querySelector("#searchInput");
    search.addEventListener("input", (e) =>{
        e.preventDefault();
        const value = search.value; 
        // const postUrl = `anime?page=1&size=24&search=${value}`
        // const link = new externalServices(postUrl);
        const searching = new recommendation("anime?page=", 1, `&size=24&search=${value}`);
        searching.getLink();
    })
}