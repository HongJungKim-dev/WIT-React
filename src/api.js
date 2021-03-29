export async function fetchPostInfos() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url);
    const data = await response.json();

    return data; 
}