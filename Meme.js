const memeBtn = document.querySelector('.meme-btn');
const memeImg = document.querySelector('.meme-img');
const memeTittle = document.querySelector('.meme-tittle');
const memeAuthor = document.querySelector('.meme-author');

const updateDetails = (url, title, author) =>{
    memeImg.setAttribute("src", url);
    memeTittle.innerHTML = title;
    memeAuthor.innerHTML = `Meme By: ${author}`;
}


memeGenerator = ()=>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response) => response.json())
    .then(data =>{
        updateDetails(data.url, data.title, data.author);
    });
}


memeBtn.addEventListener('click', memeGenerator);

memeGenerator();