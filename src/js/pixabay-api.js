export async function fetchImages(query) { 
    const API_KEY = '47111557-92c37ade8bb97610ca7074a51'; 
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`; 
    const response = await fetch(URL); 
    if (!response.ok) { 
        throw new Error('Failed to fetch images'); 
    } 
    const data = await response.json(); 
    return data.hits; 
}