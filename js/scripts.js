let isOrder = document.getElementById("order");

function openAuth(name) {
    localStorage.setItem("user", name);
    window.location.href = "authorization.html";
}

function Auth() {
    let user = localStorage.getItem("user");

    if (user === 'o') {
        window.location.href = "organizations.html";
    } else if (user === 's') {
        window.location.href = "orders.html";
    }
}

function openMakeOrder(){
    window.location.href = "makeOrder.html";
}

function openOrganizations(){
    window.location.href = "orders.html";
}

const organizations = [
    { name: "Тири пири тралала", orders: "5" },
    { name: "Тири пири тралала", orders: "10" },
    { name: "Тири пири тралала", orders: "8" },
    { name: "Тири пири тралала", orders: "12" },
    { name: "Тири пири тралала", orders: "5" },
    { name: "Тири пири тралала", orders: "10" },
    { name: "Тири пири тралала", orders: "8" },
    { name: "Тири пири тралала", orders: "12" },
    { name: "Тири пири тралала", orders: "5" },
    { name: "Тири пири тралала", orders: "10" },
    { name: "Тири пири тралала", orders: "8" },
    { name: "Тири пири тралала", orders: "12" }
];

function renderOrganizations() {
    const container = document.getElementById("org-list");
    container.innerHTML = "";
    
    organizations.forEach(org => {
        const orgCard = document.createElement("div");
        orgCard.classList.add("org-card");
        orgCard.innerHTML = `
            <strong>${org.name}</strong><br>
            <strong>Замовлень:</strong> ${org.orders}
        `;
        container.appendChild(orgCard);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderOrganizations();
});