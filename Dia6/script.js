// Products
products.addEventListener(`click`, (a) => {
    document.getElementById(`readproducts`).style.display = `block`
    document.getElementById(`createproducts`).style.display = `block`
    document.getElementById(`updateproducts`).style.display = `block`
    document.getElementById(`deleteproducts`).style.display = `block`
});

createproducts.addEventListener(`click`, (a) => {
    document.getElementById(`productid`).style.display = `block`
    document.getElementById(`productname`).style.display = `block`
    document.getElementById(`productcategory`).style.display = `block`
    document.getElementById(`productprice`).style.display = `block`
    document.getElementById(`productquantity`).style.display = `block`
    document.getElementById(`productidsupplier`).style.display = `block`
});

// Suppliers
suppliers.addEventListener(`click`, (a) => {
    document.getElementById(`readsuppliers`).style.display = `block`
    document.getElementById(`createsuppliers`).style.display = `block`
    document.getElementById(`updatesuppliers`).style.display = `block`
    document.getElementById(`deletesuppliers`).style.display = `block`
});

// Orders
orders.addEventListener(`click`, (a) => {
    document.getElementById(`readorders`).style.display = `block`
    document.getElementById(`createorders`).style.display = `block`
    document.getElementById(`updateorders`).style.display = `block`
    document.getElementById(`deleteorders`).style.display = `block`
});



// Funciones de products
document.getElementById("readproducts").addEventListener("click", viewProducts);

function viewProducts() {
    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {
        for (let i = 0; i < daticos[0].products.length; i++) { 
            document.getElementById(`outputreadproducts`).innerHTML +=`
            
            <p>ID: ${daticos[0].products[i].id}</p>
            <p>Nombre: ${daticos[0].products[i].name}</p>
            <p>Categoría: ${daticos[0].products[i].category}</p>
            <p>Precio: ${daticos[0].products[i].price}</p>
            <p>Cantidad en stock: ${daticos[0].products[i].quantityInStock}</p>
            <p>ID de proveedor: ${daticos[0].products[i].supplierId}</p>
            -------------------------------------------------
            `
        }
    })
};


// Funciones de suppliers
document.getElementById("readsuppliers").addEventListener(`click`, viewSuppliers);

function viewSuppliers() {
    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {
        for (let i = 0; i < daticos[0].suppliers.length; i++) {
            document.getElementById(`outputreadsuppliers`).innerHTML += `

            <p>ID: ${daticos[0].suppliers[i].id}</p>
            <p>Nombre: ${daticos[0].suppliers[i].name}</p>
            <p>Teléfono: ${daticos[0].suppliers[i].contactInfo.phone}</p>
            <p>Correo electrónico: ${daticos[0].suppliers[i].contactInfo.email}</p>
            <p>Dirección: ${daticos[0].suppliers[i].contactInfo.address}</p>
            -------------------------------------------------
            `
        }
    })
};

// Funciones de orders
document.getElementById("readorders").addEventListener(`click`, viewOrders);

function viewOrders() {
    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {
        for (let i = 0; i < daticos[0].orders.length; i++) { 
            document.getElementById(`outputreadorders`).innerHTML += `

            <p>ID: ${daticos[0].orders[i].orderId}</p>
            <p>Producto: ${daticos[0].orders[i].productId}</p>
            <p>Cantidad: ${daticos[0].orders[i].quantity}</p>
            <p>Fecha: ${daticos[0].orders[i].orderDate}</p>
            <p>Estado: ${daticos[0].orders[i].status}</p>
            -------------------------------------------------
            `
        }
    })
};

document.getElementById("createproduts").addEventListener(`click`, addProducts);

function addProducts() {

    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {

        for (let i = 0; i < 1; i++) {
            var idproduct = document.getElementById(`productid`).value;
            var nameproduct = document.getElementById(`productname`).value;
            var categoryproduct = document.getElementById(`productcategory`).value;
            var priceproduct = document.getElementById(`productprice`).value;
            var quantityproduct = document.getElementById(`productquantity`).value;
            var idsupplierproduct = document.getElementById(`productidsupplier`).value;

            let product = {
                "id": idproduct,
                "name": nameproduct,
                "category": categoryproduct,
                "price": priceproduct,
                "quantityInStock": quantityproduct,
                "supplierId": idsupplierproduct
            }

            daticos[0].products.push(product)
            viewProducts()
        }
    })
}