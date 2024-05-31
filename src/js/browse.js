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

        <label>Sort Order<select name="sortOrder" id="sortOrder">
            <option value="">Any</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
            
        </select></label>
        <label>Sort By <select name="sortBy" id="sortBy">
            <option value="">Any</option>
            <option value="ranking">Ranking</option>
            <option value="title">Title</option>
        </select></label>`;
}
export function renderBrowseTemplate(){
    const browseSection = document.querySelector("#browse");
    browseSection.insertAdjacentHTML("afterbegin", browseTemplate());
    search();
}

function search(){
    const search = document.querySelector("#searchInput");
    let searching = new recommendation("anime?page=", 1, `&size=24`);
    search.addEventListener("input", (e) =>{
        e.preventDefault();
        const value = search.value; 
        searching = new recommendation("anime?page=", 1, `&size=24`,`&search=${value}`);

        const genres = document.querySelector("#genres").addEventListener("change", (e) => {
            e.preventDefault();
            const genresValue = genres.value;
            searching = new recommendation("anime?page=", 1, `&size=24`,`&search=${value}`, `&genres=${genresValue}`)
            
            const sortBy = document.querySelector("#sortBy").addEventListener("change", (e) => {
                e.preventDefault();
                const sortValue = sortBy.value;
                searching = new recommendation("anime?page=", 1, `&size=24`,`&search=${value}`, `&genres=${genresValue}`, `&sortby=${sortValue}`)

                const sortOrder = document.querySelector("#sortOrder").addEventListener("change", (e) => {
                    e.preventDefault();
                    const orderValue = sortOrder.value;
                    searching = new recommendation("anime?page=", 1, `&size=24`, `&search=${value}`, `&genres=${genresValue}`, `&sortby=${sortValue}`, `&sortOrder=${orderValue}`)
                })
            })
        })
    })
    searching.getLink();
}