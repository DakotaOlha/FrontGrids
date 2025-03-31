
const orders = [
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"},
    {name: "Хто запитав", time: "На коли"}
]

function renderOrders() {
    const container = document.getElementById("ord-list");
    container.innerHTML = "";
    
    orders.forEach(ord => {
        const ordCard = document.createElement("div");
        ordCard.classList.add("ord-card");
        ordCard.innerHTML = `
            <strong>${ord.name}</strong><br>
            <strong>Час:</strong> ${ord.time}
        `;
        container.appendChild(ordCard);
    });
}

renderOrders();