window.addEventListener("load", (event) => {
  const params = new URLSearchParams(window.location.search);

  const price = params.get('tprice');

  document.getElementById("totalprice").textContent = "$" + parseInt(price);
});

function kuldes() {
  alert("Sikeresen kiadtad egy idegennek a bankkártya adataid")
}