import { loadHeaderFooter } from "./utils";
import { recommend } from "./recommendation.mjs";
import { renderBrowseTemplate } from "./browse";

loadHeaderFooter();

renderBrowseTemplate();

recommend();