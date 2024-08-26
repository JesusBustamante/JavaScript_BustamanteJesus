

var jsonj = [
  {
    "products": [
      {
        "id": 1,
        "name": "Laptop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
      },
      {
        "id": 2,
        "name": "Desktop",
        "category": "Electronics",
        "price": 999.99,
        "quantityInStock": 50,
        "supplierId": 101
      }
    ],
    
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

// Funciones de busqueda y filtro

function searchProducts(query)  {

  for (let i = 0; i < jsonj[0].products.length; i++) {
    
    if (jsonj[0].products[i].name === query) {
      console.log(`ID: ${jsonj[0].products[i].id}`);
      console.log(`Nombre: ${jsonj[0].products[i].name}`);
      console.log(`Categoría: ${jsonj[0].products[i].category}`);
      console.log(`Precio: ${jsonj[0].products[i].price}`);
      console.log(`Cantidad en stock: ${jsonj[0].products[i].quantityInStock}`);
      console.log(`ID de proveedor: ${jsonj[0].products[i].supplierId}`);
    } 

    if (jsonj[0].products[i].category === query) {
      console.log(`ID: ${jsonj[0].products[i].id}`);
      console.log(`Nombre: ${jsonj[0].products[i].name}`);
      console.log(`Categoría: ${jsonj[0].products[i].category}`);
      console.log(`Precio: ${jsonj[0].products[i].price}`);
      console.log(`Cantidad en stock: ${jsonj[0].products[i].quantityInStock}`);
      console.log(`ID de proveedor: ${jsonj[0].products[i].supplierId}`);
    }

    if (jsonj[0].products[i].supplierId === query) {
      console.log(`ID: ${jsonj[0].products[i].id}`);
      console.log(`Nombre: ${jsonj[0].products[i].name}`);
      console.log(`Categoría: ${jsonj[0].products[i].category}`);
      console.log(`Precio: ${jsonj[0].products[i].price}`);
      console.log(`Cantidad en stock: ${jsonj[0].products[i].quantityInStock}`);
      console.log(`ID de proveedor: ${jsonj[0].products[i].supplierId}`);
    }
  }
}

function filterOrders(criteria) {
  let filteredOrders = [];

  if (criteria.status) {
    filteredOrders = jsonj[0].orders.filter(order => order.status === criteria.status);
  }
  if (criteria.productId) {
    filteredOrders = jsonj[0].orders.filter(order => order.productId === criteria.productId);
  }
  if (criteria.dateRange) {
    let startDate = new Date(criteria.dateRange.startDate);
    let endDate = new Date(criteria.dateRange.endDate);
    filteredOrders = jsonj[0].orders.filter(order => {
      let orderDate = new Date(order.orderDate);
      return orderDate >= startDate && orderDate <= endDate;
    });
  }

  console.log("Órdenes filtradas:");
  for (let i = 0; i < filteredOrders.length; i++) {
    console.log(`ID: ${filteredOrders[i].orderId}`);
    console.log(`Producto: ${filteredOrders[i].productId}`);
    console.log(`Cantidad: ${filteredOrders[i].quantity}`);
    console.log(`Fecha: ${filteredOrders[i].orderDate}`);
    console.log(`Estado: ${filteredOrders[i].status}`);
    console.log("");
  }
}

// Funciones de Product Management

// Agregar

function addProduct(product) {

  jsonj[0].products.push(product);

}


// Ver

function viewProducts() {

  for (let i = 0; i < jsonj[0].products.length; i++) {
    console.log(`ID: ${jsonj[0].products[i].id}`);
    console.log(`Nombre: ${jsonj[0].products[i].name}`);
    console.log(`Categoría: ${jsonj[0].products[i].category}`);
    console.log(`Precio: ${jsonj[0].products[i].price}`);
    console.log(`Cantidad en stock: ${jsonj[0].products[i].quantityInStock}`);
    console.log(`ID de proveedor: ${jsonj[0].products[i].supplierId}`);
    console.log("")
  }

}
// Actualizar

function updateProduct(id, newDetails) {

  for (let i = 0; i < jsonj[0].products.length; i++) {

    if (jsonj[0].products[i].id === id) {
      jsonj[0].products[i].name = newDetails.name;
      jsonj[0].products[i].category = newDetails.category;
      jsonj[0].products[i].price = newDetails.price;
      jsonj[0].products[i].quantityInStock = newDetails.quantityInStock;
      jsonj[0].products[i].supplierId = newDetails.supplierId;
      console.log("¡Producto actualizado con éxito!");
      console.log("")

      viewProducts();
      return;
    }
  }
  console.log("Producto no encontrado!");
}

// Eliminar

function deleteProduct(id) {
  for (let i = 0; i < jsonj[0].products.length; i++) {
    if (jsonj[0].products[i].id === id) {
      jsonj[0].products.splice(i, 1);
      console.log("Producto eliminado con éxito!");
      viewProducts();
      return;
    }
  }
  console.log("Producto no encontrado!");
}

// Funciones de Supplier Management

//Agregar

function addSupplier(supplier) {

  jsonj[0].suppliers.push(supplier);

}

// Ver

function viewSuppliers() {

  for (let i = 0; i < jsonj[0].suppliers.length; i++) {
    console.log(`ID: ${jsonj[0].suppliers[i].id}`);
    console.log(`Nombre: ${jsonj[0].suppliers[i].name}`);
    console.log(`Teléfono: ${jsonj[0].suppliers[i].contactInfo.phone}`);
    console.log(`Correo electrónico: ${jsonj[0].suppliers[i].contactInfo.email}`);
    console.log(`Dirección: ${jsonj[0].suppliers[i].contactInfo.address}`);
    console.log("")
  }
}

// Actualizar

function updateSupplier(id, newDetails) {
  for (let i = 0; i < jsonj[0].suppliers.length; i++) {

    if (jsonj[0].suppliers[i].id === id) {
      jsonj[0].suppliers[i].name = newDetails.name;
      jsonj[0].suppliers[i].contactInfo.phone = newDetails.phone;
      jsonj[0].suppliers[i].contactInfo.email = newDetails.email;
      jsonj[0].suppliers[i].contactInfo.address = newDetails.address;
      
      console.log("¡Proovedor actualizado con éxito!");
      console.log("")

      viewSuppliers();
      return;
    }
  }
  console.log("Producto no encontrado!");
}

// Eliminar

function deleteSupplier(id) {
  for (let i = 0; i < jsonj[0].suppliers.length; i++) {
    if (jsonj[0].suppliers[i].id === id) {
      jsonj[0].suppliers.splice(i, 1);
      console.log("Producto eliminado con éxito!");
      viewSuppliers();
      return;
    }
  }
  console.log("Proovedor no encontrado!");
}


// Funciones Order Management

// Agregar 

function addOrder(order) {

  let product = jsonj[0].products.find(p => p.id === order.productId);

  if (!product) {
    console.log("Producto no encontrado");
    return;
  }

  if (order.quantity > product.quantityInStock) {
    console.log("Error: la cantidad del pedido excede el stock disponible");
    return;
  }

  product.quantityInStock -= order.quantity;

  jsonj[0].orders.push(order);

}

// Ver 

function viewOrders() {

  console.log("Órdenes:");
  console.log("")
  for (let i = 0; i < jsonj[0].orders.length; i++) {
    console.log(`ID: ${jsonj[0].orders[i].orderId}`);
    console.log(`Producto: ${jsonj[0].orders[i].productId}`);
    console.log(`Cantidad: ${jsonj[0].orders[i].quantity}`);
    console.log(`Fecha: ${jsonj[0].orders[i].orderDate}`);
    console.log(`Estado: ${jsonj[0].orders[i].status}`)
    console.log("");
  }
}

// Actualizar 

function updateOrder(orderId, newDetails) {

  for (let i = 0; i < jsonj[0].orders.length; i++) {

    if (jsonj[0].orders[i].orderId === orderId) {

      jsonj[0].orders[i].productId = newDetails.productId;
      jsonj[0].orders[i].quantity = newDetails.quantity;

      console.log("¡Producto actualizado con éxito!");
      console.log("")

      viewOrders();
      return;
    }
  }
  console.log("Producto no encontrado!");
}

function deleteOrder(orderId) {

  for (let i = 0; i < jsonj[0].orders.length; i++) {
    if (jsonj[0].orders[i].orderId === orderId) {
      jsonj[0].orders.splice(i, 1);
      console.log("Pedido eliminado con éxito!");
      viewOrders();
      return;
    }
  }
  console.log("Pedido no encontrado!");

}

// Inicio

console.log("---------------------------------------");+
console.log("----------Inventory System----------");
console.log("---------------------------------------");
console.log("");

console.log("MENÚ--------------------------------");
console.log("1. Product Management\n2. Supplier Management\n3. Order Management\n4. Stock Management\n5. Reporting\n6. Search and Filter\n7. Data Integrity and Validation")
let option = parseInt(prompt("Selecciona una opción: "))

if (option === 1) {
  console.clear()
  console.log("1. Añade un nuevo producto al inventario");
  console.log("2. Muestra todos los productos del inventario");
  console.log("3. Actualiza los detalles de un producto por su ID");
  console.log("4. Elimina un producto del inventario");
  let option = parseInt(prompt("Selecciona una opción:")); 

  if (option === 1) {
    for (let i = 0; i < 1; i++) {

      let product = {
        "id": parseInt(prompt("Ingresa el ID: ")),
        "name": prompt("Ingrese el nombre: "),
        "category": prompt("Ingrese la categoría: "),
        "price": parseInt(prompt("Ingrese el precio: ")),
        "quantityInStock": parseInt(prompt("Ingrese la cantidad en stock: ")),
        "supplierId": parseInt(prompt("Ingrese el número de ID del proovedor: "))
      };
      addProduct(product)
    }
    console.clear()
    viewProducts()
  }

  if (option === 2) {
    console.clear()

    console.log("Productos en inventario");
    console.log("");
    viewProducts()
  }

  if (option === 3) {
    console.clear()
    let id = parseInt(prompt("Ingrese el ID del producto a actualizar: "));

    let newDetails = {
      name: prompt("Ingrese el nuevo nombre: "),
      category: prompt("Ingrese la nueva categoría: "),
      price: parseInt(prompt("Ingrese el nuevo precio: ")),
      quantityInStock: parseInt(prompt("Ingrese la nueva cantidad en stock: ")),
      supplierId: parseInt(prompt("Ingrese el nuevo ID del proveedor: "))
    }

    console.log("")
    updateProduct(id, newDetails);
  };
  
  

  if (option === 4) {
    let id = parseInt(prompt("Ingrese el ID del producto a eliminar: "));

    deleteProduct(id)
  }

}

if (option === 2) {
  console.clear()

  console.log("1. Añade un nuevo proveedor al sistema");
  console.log("2. Muestra todos todos los proveedores");
  console.log("3. Actualiza los detalles de un proveedor por su ID");
  console.log("4. Elimina un proveedor del sistema");
  let option = parseInt(prompt("Selecciona una opción:"));

  if (option === 1) {
    for (let i = 0; i < 1; i++) {

      let supplier = {
        "id": parseInt(prompt("Ingresa el ID: ")),
        "name": prompt("Ingrese el nombre: "),
        "contactInfo": {
          "phone": prompt("Ingresa el número de celular: "),
          "email": prompt("Ingresa el correo electrónico: "),
          "address": prompt("Ingresa la dirección: ")
        }
        
      };
      addSupplier(supplier)
    }
    console.clear()
    console.log("Proovedores");
    console.log("");
    viewSuppliers()
  }

  if (option === 2) {
    console.log()
    console.log("Proovedores");
    console.log("");
    viewSuppliers()
  }

  if (option === 3) {
    console.clear()
    let id = parseInt(prompt("Ingrese el ID del proovedor a actualizar: "));

    let newDetails = {
      name: prompt("Ingrese el nuevo nombre: "),
      phone: prompt("Ingrese la nuevo numero de celular: "),
      email: prompt("Ingrese el nuevo correo electrónico: "),
      address: prompt("Ingrese la nueva dirección: ")
    }

    console.log("")
    updateSupplier(id, newDetails);
  }

  if (option === 4) {

    let id = parseInt(prompt("Ingrese el ID del proovedor a eliminar: "));

    deleteSupplier(id)

  }
  
}

if (option === 3) {

  console.clear()
  console.log("1. Nuevo pedido");
  console.log("2. Ver todos los pedidos");
  console.log("3. Actualiza los detalles de un pedido por su ID.");
  console.log("4. Elimina un pedido del sistema");
  let option = parseInt(prompt("Selecciona una opción:"));

  if (option === 1) {

    for (let i = 0; i < 1; i++) {

      let order = {
        "orderId": parseInt(prompt("Ingresa el ID: ")),
        "productId": parseInt(prompt("Ingrese el ID del producto: ")),
        "quantity": parseInt(prompt("Ingrese la cantidad: ")),
        "orderDate": new Date().toISOString(),
        "status": "Delivered"
        
      };
      addOrder(order)
    }
    viewOrders()
    console.log("")
    viewProducts()
  }

  if (option === 2) {

    console.clear()
    viewOrders()
  }

  if (option === 3) {

    console.clear()
    let orderId = parseInt(prompt("Ingrese el ID de la orden a actualizar: "));

    let newDetails = {
      productId: parseInt(prompt("Ingrese el nuevo ID del producto: ")),
      quantity: parseInt(prompt("Ingrese la nueva cantidad de producto")),
      orderDate: new Date().toISOString()
    }

    console.log("")
    updateOrder(orderId, newDetails);

  }

  if (option === 4) {

    let orderId = parseInt(prompt("Ingrese el ID del pedido a eliminar: "));
  
    deleteOrder(orderId)
  
  }

}

if (option === 6) {

  console.clear()
  console.log("1. Búsqueda por filtros");
  console.log("2. Búsqueda por estado, fecha o producto");

  let option = parseInt(prompt("Selecciona una opción:"));

  if (option === 1) {

    console.clear()
    let search = parseInt(prompt("Filtros:\n1. Nombre\n2. Categoría\n3. Proovedor\n\n¿Por cuál filtro deseas buscar?"))

    if (search  === 1) {
      let query = prompt("Ingrese el nombre del producto a buscar: ")
      console.log(searchProducts(query))
    }
    if (search === 2) {
      let query = prompt("Ingrese la categoria del producto a buscar: ")
      console.log(searchProducts(query))
    }
    if (search === 3) {
      let query = parseInt(prompt("Ingrese el id del proveedor del producto a buscar: "))
      console.log(searchProducts(query))
    }
  }

  if (option === 2) {
    console.clear()
    console.log("Filtros de órdenes:");
    console.log("1. Estado");
    console.log("2. ID de producto");
    console.log("3. Rango de fechas");
    let option = parseInt(prompt("¿Por cuál filtro deseas buscar?"));

    if (option === 1) {
      let status = prompt("Ingrese el estado de la orden: ");
      filterOrders({ status: status });
    }
    if (option === 2) {
      let productId = parseInt(prompt("Ingrese el ID del producto: "));
      filterOrders({ productId: productId });
    }
    if (option === 3) {
      let startDate = prompt("Ingrese la fecha de inicio (2022-01-01): ");
      let endDate = prompt("Ingrese la fecha de fin (2022-01-31): ");
      filterOrders({ dateRange: { startDate: startDate, endDate: endDate } });
    }
  }
}
