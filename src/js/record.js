import { loadHeaderFooter } from "./utils";
import wishingList from "./whishingList.mjs";


loadHeaderFooter();

const wishListing = new wishingList()

wishListing.init();
