                                              // TICKER

function updateTicker() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const formattedTime = currentDate.toLocaleTimeString();

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

updateTicker(); // Initial update
setInterval(updateTicker, 1000); // Update every second                                             
                                             
                                             
                                             // WARRANTY
let warranty={
    data2: [
        {
            "brand": "Bmw",

            "image": "basic.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension with added years with the same mileage of 100,000 KMs but with Limited parts coverage (this includes engine and transmission trail parts only).Limited warranty of 12 months and 24 months upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs",

            "price": "$10,000|$20,000"
        },
        {
            "brand": "Bmw",

            "image": "comprehensive.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension for further Peace of Mind. This will give added years with the same mileage of 100,000 KMs and complete parts coverage as in Built-in warranty.12 months* and 24 months* upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",

            "price": "$15,000|$30,000"
        },
        {
            "brand": "Bmw",

            "image": "premium.png",

            "description": "For those customers who often take long road trips and go through 100,000 KMs (with in 3 years period) of Built in Warranty. This will provide warranty extension with added years and miles with complete parts coverage.12 months/20,000 KMs* and 24 months/40,000 KMs* post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",
            
            "price": "$25,000|$40,000"
        },
        {
            "brand": "Audi",

            "image": "basic.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension with added years with the same mileage of 100,000 KMs but with Limited parts coverage (this includes engine and transmission trail parts only).Limited warranty of 12 months and 24 months upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs",

            "price": "$10,000|$20,000"
        },
        {
            "brand": "Audi",

            "image": "comprehensive.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension for further Peace of Mind. This will give added years with the same mileage of 100,000 KMs and complete parts coverage as in Built-in warranty.12 months* and 24 months* upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",

            "price": "$15,000|$30,000"
        },
        {
            "brand": "Audi",

            "image": "premium.png",

            "description": "For those customers who often take long road trips and go through 100,000 KMs (with in 3 years period) of Built in Warranty. This will provide warranty extension with added years and miles with complete parts coverage.12 months/20,000 KMs* and 24 months/40,000 KMs* post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",
            
            "price": "$25,000|$40,000"
        },
        {
            "brand": "Hyundai",

            "image": "basic.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension with added years with the same mileage of 100,000 KMs but with Limited parts coverage (this includes engine and transmission trail parts only).Limited warranty of 12 months and 24 months upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs",

            "price": "$10,000|$20,000"
        },
        {
            "brand": "Hyundai",

            "image": "comprehensive.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension for further Peace of Mind. This will give added years with the same mileage of 100,000 KMs and complete parts coverage as in Built-in warranty.12 months* and 24 months* upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",

            "price": "$15,000|$30,000"
        },
        {
            "brand": "Hyundai",

            "image": "premium.png",

            "description": "For those customers who often take long road trips and go through 100,000 KMs (with in 3 years period) of Built in Warranty. This will provide warranty extension with added years and miles with complete parts coverage.12 months/20,000 KMs* and 24 months/40,000 KMs* post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",
            
            "price": "$25,000|$40,000"
        },
        {
            "brand": "Kia",

            "image": "basic.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension with added years with the same mileage of 100,000 KMs but with Limited parts coverage (this includes engine and transmission trail parts only).Limited warranty of 12 months and 24 months upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs",

            "price": "$10,000|$20,000"
        },
        {
            "brand": "Kia",

            "image": "comprehensive.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension for further Peace of Mind. This will give added years with the same mileage of 100,000 KMs and complete parts coverage as in Built-in warranty.12 months* and 24 months* upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",

            "price": "$15,000|$30,000"
        },
        {
            "brand": "Kia",

            "image": "premium.png",

            "description": "For those customers who often take long road trips and go through 100,000 KMs (with in 3 years period) of Built in Warranty. This will provide warranty extension with added years and miles with complete parts coverage.12 months/20,000 KMs* and 24 months/40,000 KMs* post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",
            
            "price": "$25,000|$40,000"
        },
        {
            "brand": "Suzuki",

            "image": "basic.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension with added years with the same mileage of 100,000 KMs but with Limited parts coverage (this includes engine and transmission trail parts only).Limited warranty of 12 months and 24 months upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs",

            "price": "$10,000|$20,000"
        },
        {
            "brand": "Suzuki",

            "image": "comprehensive.png",

            "description": "For all those customers who do not consume 100,000 KMs (with in 3 years period) of Built in Warranty but want a Warranty extension for further Peace of Mind. This will give added years with the same mileage of 100,000 KMs and complete parts coverage as in Built-in warranty.12 months* and 24 months* upto 100,000 KMs, post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",

            "price": "$15,000|$30,000"
        },
        {
            "brand": "Suzuki",

            "image": "premium.png",

            "description": "For those customers who often take long road trips and go through 100,000 KMs (with in 3 years period) of Built in Warranty. This will provide warranty extension with added years and miles with complete parts coverage.12 months/20,000 KMs* and 24 months/40,000 KMs* post expiry of vehicles built-in warranty period of 36 months/100,000 KMs*",
            
            "price": "$25,000|$40,000"
        },
    ],   
};                                      


for (let i of warranty.data2) {
    let card2 = document.createElement("div");
    card2.classList.add("card", i.brand ,"card-effect");

    let brand = document.createElement("h1");
    brand.innerText = i.brand.toUpperCase();
    

    let ImgContainerC = document.createElement("div");
    ImgContainerC.classList.add("Image-containerC");

    let image = document.createElement("img");
    image.setAttribute("src", 'Assets/images/' + i.image);
    ImgContainerC.appendChild(brand);
    ImgContainerC.appendChild(image);
    card2.appendChild(ImgContainerC);
    

    let containerC = document.createElement("div");
    containerC.classList.add("containerC");

    let price = document.createElement("h3");
    price.innerText = i.price;
    containerC.appendChild(price);

    let name = document.createElement("p");
    name.classList.add("Model-name");
    name.innerText = i.description;
    containerC.appendChild(name);

    card2.appendChild(containerC);

    document.getElementById("warranty").appendChild(card2);
}

// Function to filter products based on category
function filterwarranty(value) {
    let buttons = document.querySelectorAll(".button2-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all" || element.classList.contains(value)) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}

// Initially display all products
window.onload = () => {
    filterwarranty("all");
};
