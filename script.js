document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs");

  updateFeatured(['Knife', 'Pistol', 'Assault Rifle', 'SMG', 'Sniper Rifle', 'RPG', 'Sticky Bomb', 'Jerry Can', 'üres']);

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(tab => {
        tab.classList.remove("tabs-active");
      });
      tab.classList.add("tabs-active");
    });
  });
});

// Fegyverek beállítása a Featured szekcióba
function updateFeatured(fegyverLista) {
  const featuredContainer = document.getElementById('featured');
  featuredContainer.innerHTML = '';

  let fegyversor = null;

  for (let i = 0; i < fegyverLista.length; i++) {
    // Minden harmadik elemnél új sort kezdünk
    if (i % 3 === 0) {
      fegyversor = document.createElement('div');
      fegyversor.className = 'fegyversor';
      featuredContainer.appendChild(fegyversor);
    }

    const fegyverNev = fegyverLista[i];
    const fegyverContainer = document.createElement('div');
    fegyverContainer.className = 'fegyverek';

    // Ellenőrizzük, hogy "üres" fegyvert kértek-e
    if (fegyverNev.toLowerCase() === 'üres') {
      // Üres elem hozzáadása, nincs tartalom
      fegyversor.appendChild(fegyverContainer);
    } else {
      // Keressünk hasonló fegyvert a DOM-ban
      let fegyverTalalt = false;

      // Az összes kártyát átnézzük, hogy találjunk egyet a megadott névvel
      document.querySelectorAll(".weapon-card").forEach(card => {
        const cardWeaponName = card.querySelector(".weapon-name");
        if (cardWeaponName && cardWeaponName.textContent.trim() === fegyverNev) {
          // Találtunk megfelelő kártyát, klónozzuk
          fegyverContainer.innerHTML = card.outerHTML;
          fegyverTalalt = true;
        }
      });

      if (!fegyverTalalt) {
        // Ha nem találtunk ilyen fegyvert, üres elemet adunk hozzá
        console.log("Nem található fegyver:", fegyverNev);
      }

      fegyversor.appendChild(fegyverContainer);
    }
  }

  // Kattintás eseménykezelők hozzáadása az új kártyákhoz
  featuredContainer.querySelectorAll(".weapon-card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".weapon-name").textContent;
      const price = card.querySelector(".weapon-price").textContent;
      const imgSrc = card.querySelector(".weapon-image img").src;
      openModal(name, price, imgSrc);
    });
  });
}

// Példa arra, hogy hogyan használjuk
// Meghívhatjuk így: updateFeatured(['Knife', 'Pistol', 'Combat MG', 'üres', 'RPG']);

function featured() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "block";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function melee() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "block";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function handguns() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "block";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function submachineguns() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "block";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function shotguns() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "block";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function assaultrifles() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "block";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function lightmachineguns() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "block";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function sniperrifles() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "block";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function heavyweapons() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "block";
  throwables.style.display = "none";
  miscellaneous.style.display = "none";
}
function throwables() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "block";
  miscellaneous.style.display = "none";
}
function miscellaneous() {
  const featured = document.getElementById("featured");
  const melee = document.getElementById("melee");
  const handguns = document.getElementById("handguns");
  const submachineguns = document.getElementById("submachineguns");
  const shotguns = document.getElementById("shotguns");
  const assaultrifles = document.getElementById("assaultrifles");
  const lightmachineguns = document.getElementById("lightmachineguns");
  const sniperrifles = document.getElementById("sniperrifles");
  const heavyweapons = document.getElementById("heavyweapons");
  const throwables = document.getElementById("throwables");
  const miscellaneous = document.getElementById("miscellaneous");


  featured.style.display = "none";
  melee.style.display = "none";
  handguns.style.display = "none";
  submachineguns.style.display = "none";
  shotguns.style.display = "none";
  assaultrifles.style.display = "none";
  lightmachineguns.style.display = "none";
  sniperrifles.style.display = "none";
  heavyweapons.style.display = "none";
  throwables.style.display = "none";
  miscellaneous.style.display = "block";
}




document.addEventListener("DOMContentLoaded", () => {
  const weaponCards = document.querySelectorAll(".weapon-card");

  weaponCards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".weapon-name").textContent;
      const price = card.querySelector(".weapon-price").textContent;
      const imgSrc = card.querySelector(".weapon-image img").src;

      openModal(name, price, imgSrc);
    });
  });
});

function openModal(name, price, imgSrc) {
  document.getElementById("modalWeaponName").textContent = name;
  document.getElementById("modalWeaponPrice").textContent = "Ár: " + price;
  document.getElementById("modalWeaponImage").src = imgSrc;
  document.getElementById("weaponModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("weaponModal").style.display = "none";
}

function kosar() {
  let cartTable = document.getElementById("cartTable");

  cartTable.style.display = (cartTable.style.display === "none" || cartTable.style.display === "") ? "table" : "none";

}


let cart = [];

function addToCart(name, price) {
  itemname = document.getElementById(name).textContent;
  itemprice = document.getElementById(price).textContent.replace("Ár: $", "");
  itemprice = itemprice.replace(",", "");

  let letezoItem = cart.find(item => item.itemname === itemname);

  if (letezoItem) {
    letezoItem.quantity += 1;
  } else {
    cart.push({ itemname, itemprice, quantity: 1 });
  }
  updateCart();

}

function updateCart() {
  let cartBody = document.getElementById("cartBody");
  let totalPriceElement = document.getElementById("totalPrice");
  cartBody.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.itemname}</td>
            <td>$${item.itemprice}</td>
            <td>${item.quantity}</td>
            <td><button class="torlesgomb" onclick="removeFromCart('${item.itemname}')"><i class="fa-solid fa-xmark"></i></button></td>
        `;
    cartBody.appendChild(row);

    total += item.itemprice * item.quantity;
  });
  let formattedTotal = total.toLocaleString("en-US");
  totalPriceElement.textContent = "$" + formattedTotal;
}

function removeFromCart(itemname) {
  cart = cart.filter(item => item.itemname !== itemname);
  updateCart();
}


document.addEventListener("DOMContentLoaded", function() {
  fetch("prices.json")
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll(".weapon-card").forEach(card => {
        let nameElement = card.querySelector(".weapon-name");
        let priceElement = card.querySelector(".weapon-price");

        if (nameElement && priceElement) {
          let weaponName = nameElement.textContent.trim();
          if (data[weaponName]) {
            let formattedPrice = data[weaponName].toLocaleString("en-US"); // Ez biztosítja az ezeresvesszőket
            priceElement.textContent = `$${formattedPrice}`;
          }
        }
      });
    })
    .catch(error => console.error("Hiba a JSON betöltésekor:", error));
});

function checkout() {
  let totalPriceElement = document.getElementById("totalPrice");

  window.location.href = `fizetes.html?tprice=${totalPriceElement.textContent.replace(",", "").replace("$", "")}`;
}
