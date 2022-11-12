let list = []; 
const template = document.querySelector('#template').innerHTML;
const imgEl = document.querySelector('#id');
fetchFotoList();
async function fetchFotoList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    const data = await res.json();
    list = data;
    renderFotoList(list);
    $('.element-1').lightGallery({
    });
    }
function renderFotoList(list) {
    imgEl.innerHTML = '';
    list.forEach(renderFoto);
}
function renderFoto(item) {
    const foto = getFoto(item);
    imgEl.insertAdjacentHTML('beforeend', foto);
}
function getFoto({url, thumbnailUrl, title }) {
    return template
        .replaceAll('{{url}}', url)
        .replaceAll('{{thumbnailUrl}}', thumbnailUrl)
        .replaceAll('{{title}}', title);
}


