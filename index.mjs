/* import dotenv from 'dotenv';
dotenv.config(); */

const HeroSearch = document.getElementById('hero-input');
const searchButton = document.getElementById('search-button');
const heroContainer = document.getElementById('hero-info');

const calling =  "https://superheroapi.com/api/"; 
const accessToken = "611aba05b5d373c2d26ef17a511e7073";


const searchHero = () => {
    const heroName = HeroSearch.value;
    console.log(`Searching for hero: ${heroName}`);
    axios.get(`${calling}${accessToken}/search/${heroName}`)
        .then(response => {
            console.log('API response:', response.data.results);
            response.data.results.forEach(hero => {
                cardCreation(hero);
            });
        })
        .catch(error => {
            console.error('Error searching for hero:', error);
        });
        
};

const cardCreation = (hero) =>{
    const herosInfo = document.createElement('div');
    herosInfo.classList.add('card');
    const heroName = document.createElement('h2');
    heroName.textContent = hero.name;
    const heroImage = document.createElement('img');
    heroImage.src = hero.image.url;
    herosInfo.appendChild(heroName);
    herosInfo.appendChild(heroImage);
    heroContainer.appendChild(herosInfo);

}

searchButton.addEventListener('click', searchHero);