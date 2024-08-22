var jsonj = [
    {
        "informacion_personal": {
            "identificación": 1,
            "nombre": "Juan Pérez",
            "edad": 30,
            "direccion": {
                "calle": "Calle Principal",
                "numero": 123,
                "ciudad": "Ciudad Ejemplo"
            },
            "contacto": {
                "correo": "juan.perez@example.com",
                "telefono": "+123456789"
            }
        },
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": "Instituto Secundario",
                "anio_inicio": 2000,
                "anio_fin": 2005
            },
            {
                "nivel": "Universidad",
                "institucion": "Universidad Ejemplar",
                "titulo": "Licenciatura en Ciencias",
                "anio_inicio": 2006,
                "anio_fin": 2010
            }
        ],
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
                "periodo": "2016-actualidad",
                "responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
    }
]


console.log("------------------------------------------------------------")
console.log("                   Bienvenido Usuario")
console.log("------------------------------------------------------------")
console.log("")


let answer = parseInt(prompt("MENÚ\n1. Crear nueva información\n2. Leer información existente\n3. Actualizar información existente\n4. Eliminar información\n"));

if (answer === 1) {

    var identificacion = parseInt(prompt("# Identificacion: "))
    console.log("")
    var nombre = prompt("Nombre: ");
    console.log("");
    var edad = parseInt(prompt("Edad: "));
    console.log("");
    var calle = prompt("Calle: ");
    console.log("");
    var numero = parseInt(prompt("Numero de calle"));
    console.log("");
    var ciudad = prompt("Ciudad: ");
    console.log("");
    var correo = prompt("Correo: ");
    console.log("");
    var telefono = prompt("Telefono")
    
    let newinfo = {

        "informacion_personal": {
            "identificacion": identificacion,
            "nombre": nombre,
            "edad": edad,
            "direccion": {
                "calle": calle,
                "numero": numero,
                "ciudad": ciudad
            }
        },
        "contacto": {
            "correo": correo,
            "telefono": telefono
        }
    }

    jsonj.push(newinfo);
    console.log(jsonj)

}

if (answer === 2) {

    console.log("Información Personal");
    var respuesta = parseInt(prompt("Ingrese el ID de la persona a revisar: "));

    for (let i of jsonj) {
        for (let x of i.informacion_personal) {
            if (x.identificacion === respuesta) {

                console.clear();

                console.log("------------------------------------------------");
                console.log(`  DATOS: ${x.nombres}`);
                console.log("------------------------------------------------\n");
                console.log("");

                console.log("Identificacion: ", x.identificacion);
                console.log("Nombre: ", x.nombre);
                console.log("Edad: ", x.edad);
                console.log("Calle: ", x.calle);
                console.log("Numero: ", x.numero);
                console.log("Ciudad: ", x.ciudad);
                console.log("Correo: ", x.correo);
                console.log("Telefono: ", x.telefono);
            }
        }
    }
}

if (answer === 3) {

    var estudiante = prompt("¿Cual numero de identificacion vas a cambiar? ");

    for (let i of jsonj) {
        for (let x of i.informacion_personal) {
            if (x.identificacion === estudiante) {

                console.clear();

                console.log("------------------------------------------------");
                console.log(`  DATOS: ${x.nombres}`);
                console.log("------------------------------------------------\n");
                console.log("");

                console.log("Identificacion: ", x.identificacion);
                console.log("Nombre: ", x.nombre);
                console.log("Edad: ", x.edad);
                console.log("Calle: ", x.calle);
                console.log("Numero: ", x.numero);
                console.log("Ciudad: ", x.ciudad);
                console.log("Correo: ", x.correo);
                console.log("Telefono: ", x.telefono);

                let datoCambiar = parseInt(prompt("Que te gustaría cambiar del estudiante:\n0. ID: \n1. Nombre: \n2. Edad: \n3. Calle: \n4. Numero de calle: \n5. Ciudad: \n6. Correo: \n7. Telefono: \n "));
                
                if (datoCambiar === 0) {
                    newid = parseInt(prompt("Ingresa el nuevo id: "))
                    jsonj["informacion_personal"][estudiante-1]["identificacion"] = newid
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 1) {
                    newname = parseInt(prompt("Ingresa el nuevo nombre: "))
                    jsonj["informacion_personal"][estudiante-1]["nombre"] = newname
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 2) {
                    newage = parseInt(prompt("Ingresa la nueva edad: "))
                    jsonj["informacion_personal"][estudiante-1]["edad"] = newage
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 3) {
                    newstreet = parseInt(prompt("Ingresa la nueva calle: "))
                    jsonj["informacion_personal"][estudiante-1]["calle"] = newstreet
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 4) {
                    newadrees = parseInt(prompt("Ingresa el nuevo numero de calle: "))
                    jsonj["informacion_personal"][estudiante-1]["numero"] = newadrees
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 5) {
                    newcity = parseInt(prompt("Ingresa la nueva ciudad: "))
                    jsonj["informacion_personal"][estudiante-1]["ciudad"] = newcity
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 6) {
                    newemail = parseInt(prompt("Ingresa el nuevo correo: "))
                    jsonj["informacion_personal"][estudiante-1]["identificacion"] = newemail
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 7) {
                    newphone = parseInt(prompt("Ingresa el nuevo numero de telefono: "))
                    jsonj["informacion_personal"][estudiante-1]["identificacion"] = newphone
                    console.log("Cambio realizado!")
                }

                for (let i of jsonj) {
                    for (x in i.informacion_personal) {
                        console.log("Identificacion: ", x.identificacion);
                        console.log("Nombre: ", x.nombre);
                        console.log("Edad: ", x.edad);
                        console.log("Calle: ", x.calle);
                        console.log("Numero: ", x.numero);
                        console.log("Ciudad: ", x.ciudad);
                        console.log("Correo: ", x.correo);
                        console.log("Telefono: ", x.telefono);
                    }
                }
            }
        }
    }
}
