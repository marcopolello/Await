let newFood; //metterò dati api

class Food {
    constructor(response) {
        for (let key in response) {
            //console.log(key);
            let value = response[key];
            //console.log(value);
            this[key] = value;
        }
    }
}

async function getFood() {
    let response = await axios.get('https://random-data-api.com/api/food/random_food');
    let newFood = new Food(
        response.data
    );
    console.log(newFood);
    //var text = '';
    /*Object.entries(newFood).forEach(([key,value]) => {
        text += key + " => " + value + '<br>';
    })*/
    document.getElementById("id").innerHTML = newFood.id;
    document.getElementById("title").innerHTML = newFood.dish;
    document.getElementById("desc").innerHTML = newFood.description;

}

getFood();


