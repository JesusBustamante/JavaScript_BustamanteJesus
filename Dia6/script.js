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
    document.getElementById(`capturar`).style.display = `block`
});

updateproducts.addEventListener(`click`, (a) => {
    document.getElementById(`updateproductid`).style.display = `block`
    document.getElementById(`updateproductname`).style.display = `block`
    document.getElementById(`updateproductcategory`).style.display = `block`
    document.getElementById(`updateproductprice`).style.display = `block`
    document.getElementById(`updateproductquantity`).style.display = `block`
    document.getElementById(`updateproductidsupplier`).style.display = `block`
    document.getElementById(`captar`).style.display = `block`
});

// Suppliers
suppliers.addEventListener(`click`, (a) => {
    document.getElementById(`readsuppliers`).style.display = `block`
    document.getElementById(`createsuppliers`).style.display = `block`
    document.getElementById(`updatesuppliers`).style.display = `block`
    document.getElementById(`deletesuppliers`).style.display = `block`
});

createsuppliers.addEventListener(`click`, (a) => {
    document.getElementById(`supplierid`).style.display = `block`
    document.getElementById(`suppliername`).style.display = `block`
    document.getElementById(`supplierphone`).style.display = `block`
    document.getElementById(`supplieremail`).style.display = `block`
    document.getElementById(`supplieraddress`).style.display = `block`
});

createsuppliers.addEventListener(`click`, (a) => {
    document.getElementById(`captura`).style.display = `block`
});

// Orders
orders.addEventListener(`click`, (a) => {
    document.getElementById(`readorders`).style.display = `block`
    document.getElementById(`createorders`).style.display = `block`
    document.getElementById(`updateorders`).style.display = `block`
    document.getElementById(`deleteorders`).style.display = `block`
});

createorders.addEventListener(`click`, (a) => {
    document.getElementById(`capture`).style.display = `block`
});

createorders.addEventListener(`click`, (a) => {
    document.getElementById(`orderid`).style.display = `block`
    document.getElementById(`orderproductid`).style.display = `block`
    document.getElementById(`orderquantity`).style.display = `block`
    document.getElementById(`orderdate`).style.display = `block`
    document.getElementById(`orderstatus`).style.display = `block`
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
        }
    })
};

document.getElementById("createsuppliers").addEventListener(`click`, addSuppliers);

function addSuppliers() {

    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {

        for (let i = 0; i < 1; i++) {
            var idsupplier = document.getElementById(`supplierid`).value;
            var namesupplier = document.getElementById(`suppliername`).value;
            var phonesupplier = document.getElementById(`supplierphone`).value;
            var emailsupplier = document.getElementById(`supplieremail`).value;
            var addresssupplier = document.getElementById(`supplieraddress`).value;

            let supplier = {
                "id": idsupplier,
                "name": namesupplier,
                "contactInfo": {
                "phone": phonesupplier,
                "email": emailsupplier,
                "address": addresssupplier
                }
            }

            daticos[0].suppliers.push(supplier)
           
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
        }
    })
};

document.getElementById("createorders").addEventListener(`click`, addOrders);

function addOrders() {

    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {

        for (let i = 0; i < 1; i++) {
            var idorder = document.getElementById(`orderid`).value;
            var productidorder = document.getElementById(`orderproductid`).value;
            var quantityorder = document.getElementById(`orderquantity`).value;
            var dateorder = document.getElementById(`orderdate`).value;
            var statusorder = document.getElementById(`orderstatus`).value;

            let order = {
                "orderId": idorder,
                "productId": productidorder,
                "quantity": quantityorder,
                "orderDate": dateorder,
                "status": statusorder
            }

            daticos[0].orders.push(order)
           
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
        }
    })
};

document.getElementById(`updateproducts`).addEventListener(`click`, updateProduct)

function updateProduct(id, newDetails) {

    fetch("datos.json")
    .then(res => res.json())
    .then(daticos => {
        for (let i = 0; i < daticos[0].products.length; i++) {

            var id = document.getElementById(`updateproductid`).value;

            let newDetails = {
                name: document.getElementById(`updateproductname`).value,
                category: document.getElementById(`updateproductcategory`).value,
                price: document.getElementById(`updateproductprice`).value,
                quantityInStock: document.getElementById(`updateproductquantity`).value,
                supplierId: document.getElementById(`updateproductidsupplier`).value
            }
    
            if (daticos[0].products[i].id === id) {
                daticos[0].products[i].name = newDetails.name;
                daticos[0].products[i].category = newDetails.category;
                daticos[0].products[i].price = newDetails.price;
                daticos[0].products[i].quantityInStock = newDetails.quantityInStock;
                daticos[0].products[i].supplierId = newDetails.supplierId;


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
        
            }
        }
    })
}