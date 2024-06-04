import { loadHeaderFooter } from "./utils";
import wishingList from "./record.mjs";


loadHeaderFooter();

const wishListing = new wishingList()

wishListing.init();