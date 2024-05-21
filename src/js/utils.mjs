// Function to render HTML template into a parent element, optionally executing a callback function
export function renderWithTemplate(templateFn, parentElement, data, position = "afterbegin", callback){
    // Insert the HTML template into the parent element at the specified position
    parentElement.insertAdjacentHTML(position, templateFn);
    // If a callback function is provided, execute it with the data parameter
    if (callback){
        callback(data);
    }
}

// Async function to load an HTML template from a specified path
async function loadTemplate(path){
    // Fetch the HTML template from the provided path
    const html = await fetch(path);
    // Convert the fetched HTML to text
    const template = await html.text();  
    // Return the HTML template
    return template;
}


// Async function to load header and footer templates and render them in corresponding elements
export async function loadHeaderFooter(){
    // Load the header template
    const header = await loadTemplate("../partials/header.html");
    // Select the header element
    const headerElement = document.querySelector("#main-header");
    // Load the footer template
    const footer = await loadTemplate("../partials/footer.html");
    // Select the footer element
    const footerElement = document.querySelector("#main-footer");

    // Render the header template in the header element
    renderWithTemplate(header, headerElement);
    // Render the footer template in the footer element
    renderWithTemplate(footer, footerElement);
    
    document.querySelector("#year").textContent = await new Date().getFullYear();

    // Execute the superscriptNumber function (assuming it's defined elsewhere)
    // superscriptNumber();
}