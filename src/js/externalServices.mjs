const url = import.meta.env.VITE_SERVER_URL;
function ConvertToJson(response){
    // const data = response.json();
    const contentType = response.headers.get('content-length');
    console.log('Content-Type:', contentType);
    if(response.ok)
        return response.json();
    else{
        console.log("response not okay");
    }
}


export default class externalServices{
    
    constructor(postUrl){
        this.postUrl = postUrl;
    }
    async getData(){
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '25522b8f0fmsh19a9a1ea00eeaf9p19bbe6jsn0394c9d1253b',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }};

        try {
            return await fetch(url + this.postUrl, options).then(ConvertToJson);
        } catch (error) {
            console.error(error);
        }
    }
    async getAnimeByID(id){
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '25522b8f0fmsh19a9a1ea00eeaf9p19bbe6jsn0394c9d1253b',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }};

        try {
            return await fetch(url + `anime/by-id/${id}`, options).then(ConvertToJson);
        } catch (error) {
            console.error(error);
        }
    }
} 