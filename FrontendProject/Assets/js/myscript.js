//   HERO SECTION FOR ABOUT-US PAGE

let heroBg = document.querySelector('.hero');

setInterval(() => {
    heroBg.style.backgroundImage = "url(Assets/images/bg-light.jpg)"

    setTimeout(() => {
        heroBg.style.backgroundImage = "url(Assets/images/bg.jpg)"
    }, 1000);
}, 2200);



//    Ticker 

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




//   DATA

let Models = {
    data: [
        {
            "Model": "Audi A4",
            "Image": "audiA4.jpg",
            "Specs": "Turbocharged four-cylinder engine, elegant sedan design, advanced tech features.",
            "TopSpeed": "130 mph - 170 mph",
            "Price": "$35,000 - $50,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi A6",
            "Image": "audiA6.jpg",
            "Specs": "V6 engine options, luxurious interior, cutting-edge technology.",
            "TopSpeed": "140 mph - 180 mph",
            "Price": "$50,000 - $70,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi A8",
            "Image": "audiA8.jpg",
            "Specs": "Flagship luxury sedan, powerful engine options, opulent interior.",
            "TopSpeed": "150 mph - 200 mph",
            "Price": "$80,000 - $120,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi Q3",
            "Image": "audiq3.jpg",
            "Specs": "Compact luxury SUV, stylish design, advanced safety features.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$35,000 - $45,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi Q5",
            "Image": "audiq5.jpg",
            "Specs": "Midsize luxury SUV, powerful performance, spacious interior.",
            "TopSpeed": "130 mph - 170 mph",
            "Price": "$45,000 - $60,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi Q7",
            "Image": "audiq7.jpg",
            "Specs": "Three-row luxury SUV, advanced technology, premium features.",
            "TopSpeed": "140 mph - 180 mph",
            "Price": "$55,000 - $80,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi S4",
            "Image": "audis4.jpg",
            "Specs": "Sporty sedan with high-performance features, turbocharged engine.",
            "TopSpeed": "155 mph - 190 mph",
            "Price": "$50,000 - $65,000",
            "Category": "Audi"
        },
        {
            "Model": "Audi RS5",
            "Image": "audirs5.jpg",
            "Specs": "High-performance coupe, aggressive styling, V8 engine.",
            "TopSpeed": "170 mph - 200 mph",
            "Price": "$70,000 - $90,000",
            "Category": "Audi"
        },
        {
            "Model": "BMW 3 Series",
            "Image": "bmw3.jpg",
            "Specs": "Various engine options, including turbocharged four-cylinder and six-cylinder engines. Available in sedan, wagon, and Gran Turismo body styles.",
            "TopSpeed": "130 mph - 180 mph",
            "Price": "$40,000 - $60,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW 5 Series",
            "Image": "bmw5.jpg",
            "Specs": "Luxury sedan with powerful engine options, advanced technology features, and a comfortable interior.",
            "TopSpeed": "140 mph - 190 mph",
            "Price": "$50,000 - $70,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW 7 Series",
            "Image": "bmw7.jpg",
            "Specs": "High-end luxury sedan with cutting-edge technology, premium materials, and a range of engine choices, including hybrid options.",
            "TopSpeed": "150 mph - 200 mph",
            "Price": "$80,000 - $150,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW X3",
            "Image": "bmwix3.jpg",
            "Specs": "Compact luxury SUV with a spacious interior, versatile cargo space, and advanced safety features.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$40,000 - $50,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW X5",
            "Image": "bmwx5.jpg",
            "Specs": "Midsize luxury SUV known for its sporty performance, advanced technology, and comfortable cabin.",
            "TopSpeed": "130 mph - 170 mph",
            "Price": "$60,000 - $90,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW X7",
            "Image": "bmwx7.jpg",
            "Specs": "Large luxury SUV offering three rows of seating, high-end features, and powerful engine options.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$70,000 - $100,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW M3",
            "Image": "bmwm3.jpg",
            "Specs": "High-performance version of the 3 Series, featuring a more powerful engine, sport-tuned suspension, and aggressive styling.",
            "TopSpeed": "155 mph - 180 mph",
            "Price": "$70,000 - $90,000",
            "Category": "Bmw"
        },
        {
            "Model": "BMW iX3",
            "Image": "bmwix3.jpg",
            "Specs": "Electric SUV with the iX3 being BMW's first fully electric SUV, offering emission-free driving with a focus on sustainability.",
            "TopSpeed": "110 mph - 140 mph",
            "Price": "$50,000 - $60,000",
            "Category": "Bmw"
        },
        {
            "Model": "Hyundai Elantra",
            "Image": "HyundaiElantra.jpg",
            "Specs": "Compact sedan, fuel-efficient, modern design, advanced safety features.",
            "TopSpeed": "110 mph - 140 mph",
            "Price": "$20,000 - $25,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Sonata",
            "Image": "hyundaiSonata.jpg",
            "Specs": "Midsize sedan, comfortable interior, advanced tech, hybrid options.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$25,000 - $35,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Santa Fe",
            "Image": "hyundaiSantaFe.jpg",
            "Specs": "Midsize SUV, spacious interior, family-friendly, available in hybrid.",
            "TopSpeed": "130 mph - 170 mph",
            "Price": "$30,000 - $40,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Tucson",
            "Image": "hyundaiTucson.jpg",
            "Specs": "Compact SUV, modern design, advanced safety features.",
            "TopSpeed": "120 mph - 150 mph",
            "Price": "$23,000 - $32,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Kona",
            "Image": "hyundaiKona.jpg",
            "Specs": "Subcompact SUV, stylish design, available in electric.",
            "TopSpeed": "110 mph - 140 mph",
            "Price": "$21,000 - $30,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Palisade",
            "Image": "hyundaiPalisade.jpg",
            "Specs": "Full-size SUV, three-row seating, premium features.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$40,000 - $50,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Veloster",
            "Image": "hyundaiVeloster.jpg",
            "Specs": "Sporty hatchback, unique design, turbocharged engine options.",
            "TopSpeed": "130 mph - 160 mph",
            "Price": "$18,000 - $28,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Hyundai Genesis G80",
            "Image": "hyundaiGenesisG80.jpg",
            "Specs": "Luxury sedan, premium materials, advanced tech, powerful engine options.",
            "TopSpeed": "140 mph - 180 mph",
            "Price": "$45,000 - $60,000",
            "Category": "Hyundai"
        },
        {
            "Model": "Kia Optima",
            "Image": "kiaOptima.jpg",
            "Specs": "Efficient sedan with various engine options, advanced safety features, and comfortable interior.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$25,000 - $35,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Sorento",
            "Image": "kiaSorento.jpg",
            "Specs": "Versatile midsize SUV, three-row seating, powerful engine choices.",
            "TopSpeed": "130 mph - 170 mph",
            "Price": "$30,000 - $45,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Telluride",
            "Image": "kiaTelluride.jpg",
            "Specs": "Flagship SUV with spacious interior, advanced technology, and upscale features.",
            "TopSpeed": "140 mph - 180 mph",
            "Price": "$40,000 - $55,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Sportage",
            "Image": "kiaSportage.jpg",
            "Specs": "Compact SUV with stylish design, available turbocharged engine, and advanced safety tech.",
            "TopSpeed": "125 mph - 165 mph",
            "Price": "$25,000 - $35,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Forte",
            "Image": "kiaForte.jpg",
            "Specs": "Compact sedan known for reliability, fuel efficiency, and modern tech features.",
            "TopSpeed": "115 mph - 155 mph",
            "Price": "$20,000 - $25,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Soul",
            "Image": "kiaSoul.jpg",
            "Specs": "Compact crossover with distinctive design, practical interior, and customizable options.",
            "TopSpeed": "110 mph - 150 mph",
            "Price": "$18,000 - $25,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Stinger",
            "Image": "kiaStinger.jpg",
            "Specs": "Sporty sedan with a powerful turbocharged engine, sleek design, and high-performance features.",
            "TopSpeed": "155 mph - 200 mph",
            "Price": "$35,000 - $50,000",
            "Category": "Kia"
        },
        {
            "Model": "Kia Carnival",
            "Image": "kiaCarnival.jpg",
            "Specs": "MPV with spacious and flexible interior, advanced safety features, and modern design.",
            "TopSpeed": "120 mph - 160 mph",
            "Price": "$30,000 - $40,000",
            "Category": "Kia"
        },
        {
            "Model": "Suzuki Swift",
            "Image": "suzukiSwift.jpg",
            "Specs": "Compact hatchback, fuel-efficient engine, nimble handling.",
            "TopSpeed": "100 mph - 130 mph",
            "Price": "$15,000 - $20,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki Vitara",
            "Image": "suzukiVitara.jpg",
            "Specs": "Subcompact SUV, stylish design, available all-wheel drive.",
            "TopSpeed": "110 mph - 140 mph",
            "Price": "$20,000 - $25,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki Jimny",
            "Image": "suzukiJimny.jpg",
            "Specs": "Off-road compact SUV, boxy design, rugged capabilities.",
            "TopSpeed": "90 mph - 120 mph",
            "Price": "$18,000 - $22,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki Baleno",
            "Image": "suzukiBaleno.jpg",
            "Specs": "Subcompact sedan, spacious interior, fuel-efficient.",
            "TopSpeed": "100 mph - 130 mph",
            "Price": "$16,000 - $21,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki Ciaz",
            "Image": "suzukiCiaz.jpg",
            "Specs": "Midsize sedan, comfortable ride, advanced safety features.",
            "TopSpeed": "110 mph - 140 mph",
            "Price": "$22,000 - $27,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki SX4 S-Cross",
            "Image": "suzukiSX4S.jpg",
            "Specs": "Crossover SUV, versatile design, available AWD.",
            "TopSpeed": "105 mph - 135 mph",
            "Price": "$24,000 - $30,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki Ignis",
            "Image": "suzukiIgnis.jpg",
            "Specs": "Micro SUV, unique design, fuel-efficient.",
            "TopSpeed": "95 mph - 125 mph",
            "Price": "$14,000 - $18,000",
            "Category": "Suzuki"
        },
        {
            "Model": "Suzuki Grand Vitara",
            "Image": "suzukiGrand.jpg",
            "Specs": "Compact SUV, off-road capabilities, spacious interior.",
            "TopSpeed": "100 mph - 130 mph",
            "Price": "$26,000 - $32,000",
            "Category": "Suzuki"

        },
    ],
};

// index MODAL & CARDS
window.onload = () => {
    const cardsPerSlide = 4;

    for (let i = 0; i < Models.data.length; i += cardsPerSlide) {
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        let cardGroup = document.createElement("div");
        cardGroup.classList.add("card-group");

        for (let j = 0; j < cardsPerSlide && i + j < Models.data.length; j++) {
            let card = createCard(Models.data[i + j]);
            cardGroup.appendChild(card);
        }

        carouselItem.appendChild(cardGroup);
        document.querySelector(".carousel-dynamic").appendChild(carouselItem);

        if (i === 0) {
            carouselItem.classList.add("active");
        }
    }
};

function createCard(modelData) {


    let card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "col-md-4", "col-sm-12", "mb-4");
    // Adjust column classes for responsiveness



    let image = document.createElement("img");
    image.src = "Assets/images/" + modelData.Image;
    image.classList.add("card-img-top");
    image.alt = modelData.Model;


    // Add click event listener to the image
    image.addEventListener("click", () => showModal(modelData));

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let modelTitle = document.createElement("h5");
    modelTitle.classList.add("card-title");
    modelTitle.textContent = modelData.Model;

    let price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = "Price: " + modelData.Price;

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Details";
    button.addEventListener("click", () => showModal(modelData));

    cardBody.appendChild(modelTitle);
    cardBody.appendChild(price);
    cardBody.appendChild(button);

    card.appendChild(image);
    card.appendChild(cardBody);

    return card;
}

function showModal(modelData) {
    // Create modal element
    let modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = "carModal";
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "carModalLabel");
    modal.setAttribute("aria-hidden", "true");

    // Create modal dialog
    let modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    // Create modal content
    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Create modal header
    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    let modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "carModalLabel";
    modalTitle.textContent = modelData.Model;

    let closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create modal body
    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    let image = document.createElement("img");
    image.src = "Assets/images/" + modelData.Image;
    image.classList.add("img-fluid", "mb-2");
    image.alt = modelData.Model;

    let topSpeed = document.createElement("p");
    topSpeed.innerHTML = `<strong>Top Speed:</strong> ${modelData.TopSpeed}`;

    let specs = document.createElement("p");
    specs.innerHTML = `<strong>Specs:</strong> ${modelData.Specs}`;

    let price = document.createElement("p");
    price.innerHTML = `<strong>Price:</strong> ${modelData.Price}`;

    modalBody.appendChild(image);
    modalBody.appendChild(topSpeed);
    modalBody.appendChild(specs);
    modalBody.appendChild(price);

    // Create modal footer
    let modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    let closeButtonFooter = document.createElement("button");
    closeButtonFooter.type = "button";
    closeButtonFooter.classList.add("btn", "btn-secondary");
    closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
    closeButtonFooter.textContent = "Close";

    modalFooter.appendChild(closeButtonFooter);

    // Assemble modal elements
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);+
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    // Add modal to the body
    document.body.appendChild(modal);

    // Initialize the modal
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}



// inventory
for (let i of Models.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have Category and should stay hidden initially
    card.classList.add("card", i.Category, "hide","card-effect");

    // Image div
    let imgContainerC = document.createElement("div");
    imgContainerC.classList.add("Image-containerC");

    // Image tag
    let Image = document.createElement("img");
    Image.setAttribute("src", 'Assets/images/' + i.Image);

    // Add event listener to open modal on image click
    Image.addEventListener("click", function () {
        openModal(i);
    });

    imgContainerC.appendChild(Image);
    card.appendChild(imgContainerC);
    //containerC
    let containerC = document.createElement("div");
    containerC.classList.add("containerC");
    //product name
    let name = document.createElement("h5");
    name.classList.add("Model-name");
    name.innerText = i.Model.toUpperCase();
    containerC.appendChild(name);
    //Price
    let Price = document.createElement("h6");
    Price.innerText = i.Price;
    containerC.appendChild(Price);
    card.appendChild(containerC);

    document.getElementById("Models").appendChild(card);
}


// Function to open modal with car details
function openModal(modelData) {
    // Create modal element
    let modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = "carModal";
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "carModalLabel");
    modal.setAttribute("aria-hidden", "true");

    // Create modal dialog
    let modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");

    // Create modal content
    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Create modal header
    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    let modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "carModalLabel";
    modalTitle.textContent = modelData.Model;

    let closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create modal body
    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    let largerImage = document.createElement("img");
    largerImage.src = 'Assets/images/' + modelData.Image;
    largerImage.classList.add("img-fluid", "mb-2");
    largerImage.alt = modelData.Model;

    let specs = document.createElement("p");
    specs.innerHTML = `<strong>Specs:</strong> ${modelData.Specs}`;

    let topSpeed = document.createElement("p");
    topSpeed.innerHTML = `<strong>Top Speed:</strong> ${modelData.TopSpeed}`;

    let price = document.createElement("p");
    price.innerHTML = `<strong>Price:</strong> ${modelData.Price}`;

    modalBody.appendChild(largerImage);
    modalBody.appendChild(specs);
    modalBody.appendChild(topSpeed);
    modalBody.appendChild(price);

    // Create modal footer
    let modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    let closeButtonFooter = document.createElement("button");
    closeButtonFooter.type = "button";
    closeButtonFooter.classList.add("btn", "btn-secondary");
    closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
    closeButtonFooter.textContent = "Close";

    modalFooter.appendChild(closeButtonFooter);

    // Assemble modal elements
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    // Add modal to the body
    document.body.appendChild(modal);

    // Initialize the modal using Bootstrap
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Function to close the modal
function closeModal() {
    let modal = document.querySelector(".modal");
    let modalBackdrop = document.querySelector(".modal-backdrop");
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
    // Remove the modal content when closing
    modal.innerHTML = '';
}


//parameter passed from button (Parameter same as Category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains Category class
            if (element.classList.contains(value)) {
                //display element based on Category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", performSearch);

// Enter key press
document.getElementById("search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

function performSearch() {
    // initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".Model-name");
    let cards = document.querySelectorAll(".card");

    // loop through all elements
    elements.forEach((element, index) => {
        // check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // display matching card
            cards[index].classList.remove("hide");
        } else {
            // hide others
            cards[index].classList.add("hide");
        }
    });
}

// Initially display all products
window.onload = () => {
    filterProduct("all");
};









