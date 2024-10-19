// summary of task: Every few seconds have a new freelance appear on the website. This will include:
// - name -occupation -price
// As new freelancers are added, adjust the average of all their prices. 

  const freeLancers = {
    alice: { name: 'alice', job: 'level 100 mafia boss', price: 80 },
    dorcus: { name: 'francis', job: 'sad painter', price: 85 },
    guy: { name: 'guy', job: 'guy', price: 45 },
};

//creating constants for each of the ul being used
const nameList = document.getElementById('nameList');
const jobList = document.getElementById('jobList');
const priceList = document.getElementById('priceList');
const averagePriceTotal = document.querySelector(`h3`)

let count = 1;
let totalPrice = 60;
let index = 0;
const keys = Object.keys(freeLancers)

function updateLists() {
    if (index < keys.length) {
        const freelancer = freeLancers[keys[index]];

        // Create list items
        const nameItem = document.createElement('li');
        nameItem.textContent = freelancer.name;
        nameList.append(nameItem);

        const jobItem = document.createElement('li');
        jobItem.textContent = freelancer.job;
        jobList.append(jobItem);

        const priceItem = document.createElement('li');
        priceItem.textContent = `$${freelancer.price}`;
        priceList.append(priceItem);

        totalPrice += freelancer.price;
        count ++

        const averagePrice = totalPrice / count;
        averagePriceTotal.textContent = `$${averagePrice}`;

        index++;
    
    } else {
        clearInterval(interval);
    }
}

const interval = setInterval(updateLists, 2000);
