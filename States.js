fetch("http://localhost:3000/dash_stats")

    .then((response) => {
        if(response.ok){

            console.log("fetched");
            return response.json();

        }else{
            throw new Error("failed")
        }
    })
    .then((data) => {
    document.getElementById('users').textContent = data.users;
    document.getElementById('products').textContent = data.products;
    document.getElementById('sales').textContent = data.sales;
    document.getElementById('profit').textContent = data.profit;
    })
    
    .catch(error => console.error(error));
