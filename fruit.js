const products = [
  { id: 1, name: "Elma", price: 2.50, isFruit: "true", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=350&auto=format&fit=crop&q=80" },
  { id: 2, name: "Armut", price: 3.00, isFruit: "true", img: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=350&auto=format&fit=crop&q=80" },
  { id: 3, name: "Muz", price: 4.50, isFruit: "true", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=350&auto=format&fit=crop&q=80" },
  { id: 4, name: "Çilek", price: 5.00, isFruit: "true", img: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=350&auto=format&fit=crop&q=80" },
  { id: 5, name: "Havuç", price: 2.00, isFruit: "false", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=350&auto=format&fit=crop&q=80" },
  { id: 6, name: "Domates", price: 3.50, isFruit: "false", img: "https://media.istockphoto.com/id/1419141035/tr/foto%C4%9Fraf/cut-red-tomato-close-up-in-a-box.jpg?s=612x612&w=0&k=20&c=BHCxBhpEZR_DZY01WHDc54ivG25RZrlyLMKaZV3f1mg=" },
  { id: 7, name: "Salatalık", price: 3.20, isFruit: "false", img: "https://t3.ftcdn.net/jpg/00/19/46/16/360_F_19461651_W9PWityJdoNx407z4UT9JStES34n0V9N.jpg" },
  { id: 8, name: "Biber", price: 4.00, isFruit: "false", img: "https://media.istockphoto.com/id/538623177/tr/foto%C4%9Fraf/chili-pepper.jpg?s=612x612&w=0&k=20&c=_m44fxNGrORxNxapZUptiHmrN5_wYcoUrMaWv9OnWPs=" },
  { id: 9, name: "Patates", price: 2.80, isFruit: "false", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=350&auto=format&fit=crop&q=80" },
  { id: 10, name: "Soğan", price: 1.50, isFruit: "false", img: "https://static.insales-cdn.com/images/products/1/7507/527269203/manav-kuru-sogan-kg-897961001544767810-1000x1000.jpg" },
  { id: 11, name: "Kabak", price: 3.30, isFruit: "false", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=350&auto=format&fit=crop&q=80" },
  { id: 12, name: "Brokoli", price: 4.20, isFruit: "false", img: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=350&auto=format&fit=crop&q=80" },
  { id: 13, name: "Ispanak", price: 2.70, isFruit: "false", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=350&auto=format&fit=crop&q=80" },
  { id: 14, name: "Marul", price: 1.80, isFruit: "false", img: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=350&auto=format&fit=crop&q=80" },
  { id: 15, name: "Mandalina", price: 3.60, isFruit: "true", img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=350&auto=format&fit=crop&q=80" },
  { id: 16, name: "Kivi", price: 6.00, isFruit: "true", img: "https://img.freepik.com/free-photo/close-up-tasty-kiwi-white-background_1112-453.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 17, name: "Nar", price: 5.50, isFruit: "true", img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=350&auto=format&fit=crop&q=80" },
  { id: 18, name: "Limon", price: 2.90, isFruit: "true", img: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=350&auto=format&fit=crop&q=80" },
  { id: 19, name: "Üzüm", price: 7.00, isFruit: "true", img: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?w=350&auto=format&fit=crop&q=80" },
  { id: 20, name: "Kayısı", price: 4.80, isFruit: "true", img: "https://www.islek.com.tr/images/product/530420418625-207-kayisi.jpg" }
]

let basket = []

const srcInputEl = document.querySelector("#searchInput")
const cardsEl = document.querySelector("#productCards")
const filterEl = document.querySelector("#categoryFilter")
const basketItemsEl = document.querySelector("#basketItems")
const totalQuantityEl = document.querySelector("#total-quantity")
const totalPriceEl = document.querySelector("#total-price")

function show() {
  let html = ""
  const query = srcInputEl.value.trim().toLowerCase()
  const category = filterEl.value

  const filtered = products
    .filter(item => category === "All" ? item : item.isFruit === category)
    .filter(item => item.name.toLowerCase().includes(query))

  if (filtered.length === 0) {
    html = `<div class="no-results">
                <i class="fa-solid fa-face-frown no-results-icon"></i>
                <p>Axtarışınıza uyğun məhsul tapılmadı.</p>
            </div>`
  } else {
    filtered.forEach(item => {
      const itemTypeClass = item.isFruit === "true" ? "is-fruit" : "is-veg"
      const tagLabel = item.isFruit === "true" ? "Meyvə" : "Tərəvəz"

      html += `   <div class="product-card-premium ${itemTypeClass}">
                      <span class="type-tag">${tagLabel}</span>
                      <div class="img-container">
                          <img src="${item.img}" alt="${item.name}">
                      </div>
                      <div class="product-details">
                          <h2>${item.name}</h2>
                          <div class="price-action">
                              <h3>${item.price.toFixed(2)} AZN</h3>
                              <button class="btn-add-cart" onclick="add(${item.id})">
                                  <i class="fa-solid fa-cart-plus"></i> Səbətə At
                              </button>
                          </div>
                      </div>
                  </div>`
    })
  }

  cardsEl.innerHTML = html
}

// Initial Catalog show
show()

function searchProducts() {
  show()
}

function filterProducts() {
  show()
}

function add(id) {
  const existingEl = basket.find(item => item.id == id)
  if (existingEl) {
    existingEl.quantity += 1
  } else {
    const findEl = products.find(item => item.id == id)
    basket.push({ ...findEl, quantity: 1 })
  }
  basketShow()
}

function basketShow() {
  let html = ""

  if (basket.length === 0) {
    html = `<div class="empty-basket-message">
                <i class="fa-solid fa-basket-shopping empty-icon"></i>
                <p>Səbətiniz hazırda boşdur.</p>
            </div>`
  } else {
    basket.forEach(item => {
      html += `   <div class="basket-item-row">
                      <img src="${item.img}" alt="${item.name}">
                      <div class="basket-item-info">
                          <h3>${item.name}</h3>
                          <p>${item.price.toFixed(2)} AZN × ${item.quantity}</p>
                      </div>
                      <div class="basket-item-actions">
                          <div class="qty-controls">
                              <button class="btn-qty" onclick="changeQuantity(false, ${item.id})">
                                  <i class="fa-solid fa-minus"></i>
                              </button>
                              <span class="qty-val">${item.quantity}</span>
                              <button class="btn-qty" onclick="changeQuantity(true, ${item.id})">
                                  <i class="fa-solid fa-plus"></i>
                              </button>
                          </div>
                          <span class="item-total-price">${(item.price * item.quantity).toFixed(2)} AZN</span>
                          <button class="btn-delete" onclick="dell(${item.id})" title="Sil">
                              <i class="fa-solid fa-trash-can"></i>
                          </button>
                      </div>
                  </div>`
    })
  }

  basketItemsEl.innerHTML = html

  // Calculate total sum of all item quantities
  const totalQty = basket.reduce((acc, item) => acc + item.quantity, 0)
  totalQuantityEl.innerHTML = totalQty

  basketTotalPrice()
}

// Initial empty basket message show
basketShow()

function changeQuantity(boolean, id) {
  const findEl = basket.find(item => item.id == id)
  if (findEl) {
    if (boolean) {
      findEl.quantity += 1
    } else {
      if (findEl.quantity > 1) {
        findEl.quantity -= 1
      } else {
        dell(id)
        return
      }
    }
    basketShow()
  }
}

function dell(id) {
  basket = basket.filter(item => item.id !== id)
  basketShow()
}

function basketTotalPrice() {
  let total = 0
  basket.forEach(item => total += (item.price * item.quantity))
  totalPriceEl.innerHTML = total.toFixed(2) + " AZN"
}
