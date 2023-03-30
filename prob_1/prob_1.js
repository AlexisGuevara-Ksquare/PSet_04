
// Get card Container
const cardContainer = document.querySelector('.cardContainer');

// Get timeframes
let dailyOption = document.querySelector('.daily');
let weeklyOption = document.querySelector('.weekly');
let monthlyOption = document.querySelector('.monthly');

// Array for starage the objects from the data API
let elementsLive = [];

// Default option on window load
let option = 'weekly';
// Change the font color
dailyOption.style.color = '#454784';
weeklyOption.style.color = 'white';
monthlyOption.style.color = '#454784';

// API
let url = 'https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json';

// Main function to get data from API
let main = async() => {
    const response = await fetch(url);
    const data = await response.json();

    // Fill array with objects from API
    data.forEach(element => {
        elementsLive.push(element);
    });

    // Send array to the function that will render the cards in the HTML
    createCards(elementsLive);
}

let createCards = (cardData) => {
    // Counter to change icon
    let count = 0;

    cardContainer.innerHTML = '';

    cardData.forEach(item => {

        // Trim titles that have blank space so it can be added as class
        let triming = item.title;
        let newtrim = triming.split(' ').join('');
        
        // Create div
        const div = document.createElement('div');

        // Assign name to class
        div.classList.add('mainCard', `${newtrim}`);

        // Send the HTML template
        div.innerHTML = `
        <div class="colorSection">
            <img class="icons" src="./img/0${count}.png" alt="">
        </div>
        <div class="infoSection">
            <p class="cardText cardTitle">${item.title}</p>
            <p class="cardText cardTime">${item.timeframes[option].current}hrs</p>
            <p class="cardText lastTime">Last week: ${item.timeframes[option].previous}hrs</p>
        </div>
        `;
        // Send the render to inside the cardContainer Div
        cardContainer.append(div);

        // Increase counter
        count = count + 1;
    });

    // On click timeframes event
    dailyOption.addEventListener('click', function(e) {
        e.preventDefault();
        option = 'daily';

        // Change the font color
        dailyOption.style.color = 'white';
        weeklyOption.style.color = '#454784';
        monthlyOption.style.color = '#454784';

        // Render Cards
        createCards(elementsLive);
    });
    
    weeklyOption.addEventListener('click', function(e) {
        e.preventDefault();
        option = 'weekly';

        // Change the font color
        dailyOption.style.color = '#454784';
        weeklyOption.style.color = 'white';
        monthlyOption.style.color = '#454784';
        
        createCards(elementsLive);
    });
    
    monthlyOption.addEventListener('click', function(e) {
        e.preventDefault();
        option = 'monthly';

        // Change the font color
        dailyOption.style.color = '#454784';
        weeklyOption.style.color = '#454784';
        monthlyOption.style.color = 'white';

        createCards(elementsLive);
    });
}




main();