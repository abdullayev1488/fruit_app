const products = [
    { id: 1, name: "Elma", price: 2.5, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 2, name: "Armut", price: 3.0, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 3, name: "Muz", price: 4.5, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 4, name: "Çilek", price: 5.0, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 5, name: "Havuç", price: 2.0, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 6, name: "Domates", price: 3.5, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 7, name: "Salatalık", price: 3.2, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 8, name: "Biber", price: 4.0, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 9, name: "Patates", price: 2.8, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 10, name: "Soğan", price: 1.5, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 11, name: "Kabak", price: 3.3, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 12, name: "Brokoli", price: 4.2, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 13, name: "Ispanak", price: 2.7, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 14, name: "Marul", price: 1.8, isFruit: "false", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 15, name: "Mandalina", price: 3.6, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 16, name: "Kivi", price: 6.0, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 17, name: "Nar", price: 5.5, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 18, name: "Limon", price: 2.9, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 19, name: "Üzüm", price: 7.0, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" },
    { id: 20, name: "Kayısı", price: 4.8, isFruit: "true", img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-multifruit-juice-studio-png-image_10121221.png" }
];

let basket = []

const srcInputEl = document.querySelector("#searchInput")
const cardsEl = document.querySelector("#productCards")
const filterEl = document.querySelector("#categoryFilter")
const basketItemsEl = document.querySelector("#basketItems")
const totalQuantityEl = document.querySelector("#total-quantity")
const totalPriceEl = document.querySelector("#total-price")


function show() {
    html = ""
    products
        .filter(item => filterEl.value == "All" ? item : item.isFruit == filterEl.value)
        .filter(item => item.name.toLowerCase().startsWith(srcInputEl.value.toLowerCase()))
        .forEach(item => {
            html += `   <div class="productCard">
                        <img src="${item.img}" alt="Urun">
                        <h2>${item.name}</h2>
                        <h3>AZN: ${item.price}</h3>
                        <button onclick="add(${item.id})">Add</button>
                    </div>`
        })

    cardsEl.innerHTML = html
}
show()

function searchProducts() {
    show()
}

function filterProducts() {
    show()
}

function add(id) {
    const control = basket.some(item => item.id == id)
    if (!control) {
        const findEl = products.find(item => item.id == id)
        basket.push({ ...findEl, quantity: 1 })
        basketShow()
    }

}

function basketShow() {
    let html = ""
    basket.forEach(item => {
        html += `   <div class="productCard inBasket">
                        <img src="${item.img}" alt="Urun">
                        <h2>${item.name}</h2>
                        <h3> AZN: ${item.price * item.quantity}</h3>
                        <article>
                            <button onclick="changeQuantity(${false}, ${item.id})">-</button>
                            <input disabled value=${item.quantity} type="number" />
                            <button onclick="changeQuantity(${true}, ${item.id})">+</button>
                        </article>
                        <button onclick="dell(${item.id})">Delete</button>
                    </div>`
    })

    basketItemsEl.innerHTML = html
    totalQuantityEl.innerHTML = basket.length ? basket.length : ""
    basketTotalPrice()

}


function changeQuantity(boolean, id) {
    const findEl = basket.find(item => item.id == id)
    if (boolean) findEl.quantity += 1
    else findEl.quantity > 1 ? findEl.quantity -= 1 : dell(id)
    basketShow()

    // if (findEl.quantity > 1) {
    //     findEl.quantity -= 1
    // }else{
    //     dell(id)
    // }


}

function dell(id) {
    basket = basket.filter(item => item.id !== id)
    basketShow()
}


function basketTotalPrice() {
    let total = 0
    basket.forEach(item => total += (item.price * item.quantity))
    totalPriceEl.innerHTML = total 
}
basketTotalPrice()

