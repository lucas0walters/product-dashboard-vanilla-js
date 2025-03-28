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

//fetchProductsThen();

//Task 3 - Add fetchProductsAsync using async/await and try/catch

async function fetchProductsAsync() { //Create another function fetchProductsAsync() that uses async/await and try/catch to fetch product data.
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const products = await response.json();
    try {
        if (!response.ok) { //checking our response status and throwing an error if !200
            throw new Error(`Network response was ${response.status}`)
        }
        products.forEach(product => { //looping through the products array
            console.log(product.fields.name); //logging each product name
        });
        displayProducts()
    } catch (error) {
        handleError(error)
    }
}

function handleError(error) { //Defining error handling function
    console.log(error);
}

function displayProducts(products) { //Setting up displayProducts function
    //Do nothing
}

fetchProductsAsync();