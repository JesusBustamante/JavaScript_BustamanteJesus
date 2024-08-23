var jsonj = [
    {
    "products": 
    {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
    },
    
    "suppliers": [
      {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
          "phone": "123-456-7890",
          "email": "sales@techsupplies.com",
          "address": "123 Tech Lane, Silicon Valley, CA"
        }
      }
    ],
    "orders": [
      {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-08-23",
        "status": "Delivered"
      }
    ]
  }
]

function searchProducts(query)  {

    for (let i of jsonj) {
        if (i.products.name === query) {
            console.log(`ID: ${i.products.id}`)
            console.log(`Nombre: ${i.products.name}`)
            console.log(`Categoría: ${i.products.category}`)
            console.log(`Precio: ${i.products.price}`)
            console.log(`Cantidad en stock: ${i.products.quantityInStock}`)
            console.log(`ID de proveedor: ${i.products.supplierId}`)
        } 
        if (i.products.category === query) {
            
        }
    }
}

console.log("---------------------------------------")
console.log("----------Inventory System----------")
console.log("---------------------------------------")
console.log("")

console.log("MENÚ--------------------------------")
console.log("1. Product Management\n2. Supplier Management\n3. Order Management\n4. Stock Management\n5. Reporting\n6. Search and Filter\n7. Data Integrity and Validation")
let option = parseInt(prompt("Selecciona una opción: "))

if (option === 6) {

    let search = parseInt(prompt("Filtros:\n1. Nombre\n2. Categoría\n3. Proovedor\n\n¿Por cuál filtro deseas buscar?"))

    if (search  === 1) {
        let query = prompt("Ingrese el nombre del producto a buscar: ")
        console.log(searchProducts(query))
    }
}
