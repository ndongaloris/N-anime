import { loadHeaderFooter } from "./utils";
import { renderBrowseTemplate } from "./browse.mjs";
import recommendation from "./recommendation.mjs";
import { heroImage } from "./hero.mjs";
import Newsletter from "./Newsletter.mjs";
import record from "./record.mjs";


loadHeaderFooter();

renderBrowseTemplate();


// heroImage("anime?page=1&size=15&sortBy=ranking&sortOrder=asc");


const newsletter = new Newsletter();

newsletter.init();

const Recommendation = new recommendation("anime?page=",1, "&size=24");

Recommendation.init()




