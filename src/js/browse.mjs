import recommendation from "./recommendation.mjs";

function browseTemplate(){
    return`<label>Search<input type="text" id="searchInput" name="search" placeholder="search"></label>
            <label for="">Genres<select name="genres" id="genres">
            <option >Any</option>
            <option value="Award Winning">Award Winning</option>
            <option value="Action">Action</option>
            <option value="Suspense">Suspense</option>
            <option value="Horror">Horror</option>
            <option value="Ecchi">Ecchi</option>
            <option value="Avant Garde">Avant Garde</option>
            <option value="Sports">Sports</option>
            <option value="Supernatural">Supernatural</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Boys Love">Boys Love</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Mystery">Mystery</option>
            <option value="Girls Love">Girls Love</option>
            <option value="Slice of Life">Slice of Life</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Erotica">Erotica</option>
            <option value="Hentai">Hentai</option>
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
    let searching = new recommendation("anime?page=", 1, `&size=24`);
    const search = document.querySelector("#searchInput")
    search.addEventListener("input", (e) =>{
        e.preventDefault();
        const value = search.value; 
        searching.getSearch(`&search=${value}`)

    })
    const genres = document.querySelector("#genres")
    genres.addEventListener("change", (e) => {
        e.preventDefault();
        const genresValue = genres.value;
        searching.getGenres(`&genres=${genresValue}`);
        
    })
    const sortBy = document.querySelector("#sortBy")
    sortBy.addEventListener("change", (e) => {
        e.preventDefault();
        const sortValue = sortBy.value;
        searching.getSortBy(`&sortBy=${sortValue}`);

    })
    const sortOrder = document.querySelector("#sortOrder")
    sortOrder.addEventListener("change", (e) => {
        e.preventDefault();
        const orderValue = sortOrder.value;
        searching.getSortOrd(`&sortOrder=${orderValue}`);
    })
}