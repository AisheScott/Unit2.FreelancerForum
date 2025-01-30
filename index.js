//starting freelancer array with at least 2 objects [{name: 'Sam', occupation: 'Programmer', price: 50}]
const freelancer = [
    {Name: 'John', Occupation: 'Engineer', Price: 25},
    {Name: 'Jamie', Occupation: 'Building Supervisor', Price: 125},
    {Name: 'Candie', Occupation: 'Building Inspector', Price: 50},
];


//array of names
const names = [
    "Scott",
    "Paul",
    "Jane",
    "Jessica",
    "Matt",
];

//array of occupations
const occupations = [
    "Electrican",
    "Plumber",
    "Contractor",
    "Inspector",
    "Roofer",
];

/**
 * create init function
 *
 *      1. select freelancer_container from DOM
 *      2. create DOM elements
 *          - table
 *          - thead
 *              - tr (header row)
 *          - tbody
 *      3. Add text to the header row where the text matches the object key of a freelancer
 *      4. Append header row to the thead
 *      5. Append thead and tbody to table
 *      6. Append table to freelancer_container
 *      7. Call the function created below to render the freelancer array
 *      8. Call the function created below to render the average price
 *
 */
function Update () {
    const root = document.querySelector("#root");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    

    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement("tbody");

    freelancer.forEach((freelancer) => {
    const dataRow = document.createElement("tr");

    for (const key in freelancer) {
      const th = document.createElement("th");
      th.textContent = freelancer[key];
      dataRow.append(th);
    }
    tbody.append(dataRow);
    });
    table.append(tbody);

    root.append(table);
    
}
function init(){
    const root = document.querySelector("#root");

    const h1 = document.createElement("h1");
    h1.textContent = "Freelancer Forum";
    root.append(h1);

    const p = document.createElement("p");
    p.textContent = "The average starting price is $66";
    root.append(p);

    const h2 = document.createElement("h2");
    h2.textContent = "Available Frelancers";
    root.append(h2);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Name", "Occupation", "Price"].forEach((headers) => {
        const th = document.createElement("th");
        th.textContent = headers;
        headerRow.append(th);
    });

    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement("tbody");

    freelancer.forEach((freelancer) => {
    const dataRow = document.createElement("tr");

    for (const key in freelancer) {
      const th = document.createElement("th");
      th.textContent = freelancer[key];
      dataRow.append(th);
    }
    tbody.append(dataRow);
    });
    table.append(tbody);

    root.append(table);
}

/**
 * Create function to render the freelancer array to the DOM
 *
 *      1. select tbody from DOM
 *      2. map over freelancer array
 *          2-1. create elements
 *              - tr
 *              - td (name)
 *              - td (occupation)
 *              - td (starting price)
 *          2-2. Add text to each td representing the value of the freelancer object
 *          2-3. Append tds to tr
 *          2-4. return tr
 *      3. replace children of tbody with the elements created in the map
 */

/**
 * Create a function to render the average freelancer price to the DOM
 *
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avg function passing the calculated sum and the freelancer array
 *      4. update textContent of the span with the avg
 *          - if textContent doesn't work use innerHTML
 *      5. replace children of p tag with the updated span
 */

/**
 * Create function to sum all prices in our freelancer array
 */

function sum(arr) {
    //total price
    let totalPrice = 0;
    numbers.forEach(num => totalPrice += num);
    console.log (totalPrice);
    return totalPrice;
  }
  
  /**
   *
   * Function to get average of given price with array
   *
   * @param {Number} totalPrice
   * @param {Array} arr
   * @returns Number
   */
  function avg(totalPrice, arr) {
    return totalPrice / arr.length;
  }
  
  /**
   * Create a function to add a new freelancer to the freelancer array
   *
   *      1. create variable for the new freelancer object
   *      2. set the name value of our new freelancer to a random name selected from our names array
   *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
   *      4. generate random price for new freelancer
   *
   * new_freelancer --> {name: 'Alex', occupation: 'writer', price: 75 }
   *
   *      5. add new freelancer to the freelancers array
   *      6. Call the function created above to render the freelancer array
   *      7. Call the function created above to render the average price
   *
   */
  function gernerateFreelancer () {
    const N = Math.floor(Math.random()*names.length);
    const O = Math.floor(Math.random()*occupations.length);
    const P = Math.floor(Math.random()*125);

    const newLancer = {Name: names[N],Occupation: occupations[O],Price: P};
    return newLancer;
  }
  function addFreelancer () {
    const newLancer = gernerateFreelancer();
    freelancer.push(newLancer);
    Update();
    }
  //setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds
  
  setInterval(addFreelancer, 1000);
  //setInterval(newNames, 1000);

  //call init function
  init();