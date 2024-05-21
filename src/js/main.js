import { loadHeaderFooter } from "./utils";
import { renderBrowseTemplate } from "./browse";
import {recommend} from "./recommendation.mjs";
import { heroImage } from "./hero";
import Newsletter from "./Newsletter.mjs";

loadHeaderFooter();

renderBrowseTemplate();


heroImage("anime?page=1&size=15&sortBy=ranking&sortOrder=asc");

recommend("anime?page=1&size=24");

const newsletter = new Newsletter();

newsletter.init();