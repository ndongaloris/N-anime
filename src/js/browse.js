function browseTemplate(){
    return`<form action="" id="browse">
            <label>Search<input type="text"></label>
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
        <label>Year<select name="" id="">
            <option value="">Any</option>
            <option value="">2020 - 2024</option>
            <option value="">2015 - 2019</option>
            <option value="">2010 - 2014</option>
            <option value="">2005 - 2009</option>
            <option value="">2000 - 2005</option>
        </select></label>
        <label>ranking <select name="" id="">
            <option value="">Any</option>
            <option value="">Top 10</option>
            <option value="">Top 50</option>
            <option value="">Top 100</option>
            <option value="">Top 500</option>
            <option value="">Top 500+</option>
        </select></label></form>`;
}
export function renderBrowseTemplate(){
    const browseSection =document.querySelector("main");
    browseSection.insertAdjacentHTML("afterbegin", browseTemplate());
}