// Function to generate the newsletter template
function newsletterTemplate(){
    return ` <div id="newsMessage">
                <h2>Sign up For our Newsletter:</h2>
                <p>Embark on thrilling adventures, dive into captivating storylines, 
                and immerse yourself in the vibrant world of anime with our latest 
                newsletter! Whether you're a seasoned otaku or just discovering the 
                wonders of Japanese animation, we've got something for everyone. 
                From action-packed shonen to heartwarming slice-of-life, we handpick 
                the best recommendations to satisfy your anime cravings. 
                Stay updated on the latest releases, exclusive reviews, and hidden 
                gems waiting to be discovered. Let's journey together through the boundless 
                realms of anime 
                </p>
            </div>
            <form id="inputNews">
                <label>Enter Your email:<input type="email" name="email" id="email" required></label>
                <button type="submit" id="newsButton">Subscribe</button>
            </form>`;
}

// Function to render the newsletter template
function renderNewsletterTemplate(){
    const newsSection = document.querySelector("#Newsletter");
    newsSection.insertAdjacentHTML("afterbegin", newsletterTemplate());
    const emailInput = document.querySelector("#email");
    // Event listener for newsletter subscription button
    document.querySelector("#newsButton").addEventListener("click", () => {
        if (emailInput.value.trim() !== ""){
            // Display checkmark icon upon successful subscription
            document.querySelector("#inputNews").innerHTML = "<p>&#10004;</p>";
        }
    });
}

// Class for managing newsletter subscription
export default class Newsletter{
    constructor(email){
        this.email = email;
    }
    // Method to initialize newsletter subscription
    init(){
        renderNewsletterTemplate();
    } 
}
