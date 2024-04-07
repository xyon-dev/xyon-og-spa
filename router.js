import { config } from "./config.js";
import { homepage } from "./pages/home-page.js";
import { getMain } from "./functions/main.js";

// read url then send page and state to main with: main.innerHTML = page(state) 
// route the content based on the url
let route = window.location.href;
export let content = (page) => { 
    switch(route){
        case `${config.host}index.html`:
            getMain(homepage);
            break;
        default:
            console.log('page not found');
    }
};

