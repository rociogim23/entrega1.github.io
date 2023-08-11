const API_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const cardsContainer = document.getElementById("container-cards");

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Error trayendo la data:", error);
    }
}

async function displayProducts() {
    const products = await fetchProducts();
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card"); 
        card.innerHTML = `
           <div class="divmayor"><img src="${product.image}" alt="${product.name}">
            <div> <h2>${product.name}</h2>
            <p>${product.description}</p>
            <span>Precio: ${product.cost} ${product.currency}</span>
            <span>Vendidos: ${product.soldCount}</span>
            
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });
}

// Llamo a la func para mostrar los productos cuando la página cargue
displayProducts();