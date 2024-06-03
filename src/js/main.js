import { loadHeaderFooter } from "./utils";
import { renderBrowseTemplate } from "./browse";
import recommendation from "./recommendation.mjs";
// import { heroImage } from "./hero";
import Newsletter from "./Newsletter.mjs";

loadHeaderFooter();

renderBrowseTemplate();


// heroImage("anime?page=1&size=15&sortBy=ranking&sortOrder=asc");


const newsletter = new Newsletter();

newsletter.init();

// const Recommendation = new recommendation("anime?page=",1, "&size=24");

// Recommendation.init()


