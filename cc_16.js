//Task 2 - Implement fetchProductsThen using .then() and .catch()

function fetchProductsThen() { //create a function fetchProductsThen() that uses fetch() with .then()
    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => {
            if (!response.ok) { //checking our response status and throwing an error if !200
                throw new Error(`Network response was ${response.status}`)
            }
            return response.json(); //sending response as json to the next promise
        })
        .then(products => {
            products.forEach(product => { //looping through the products array
                console.log(product.fields.name); //logging each product name
            });
        })
        .catch(error => { //error handling using .catch
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchProductsThen();