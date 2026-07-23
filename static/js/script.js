const menu_container = document.getElementById("menu_container");

async function loadMenu() {
    const response = await fetch("/api/menu");
    const menu = await response.json();

    for (const item of menu) {
        const div = document.createElement("div");

        div.className = "menu_item";

        div.innerHTML = `
            <img alt="${item.name} фото" src="${item.image}">
            <h2>${item.name}</h2>
            <p class="menu_item_description">${item.description}</p>
            <span>${item.price} руб.</span>
        `;

        menu_container.append(div);
    }
}

loadMenu();