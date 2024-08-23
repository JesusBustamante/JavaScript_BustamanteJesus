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


console.log("------------------------------------")
console.log("        Bienvenido Usuario")
console.log("------------------------------------")
console.log("")

var preguntita = true
while (preguntita === true){
    let answer = parseInt(prompt("MENÚ\n1. Crear nueva información\n2. Leer información existente\n3. Actualizar información existente\n4. Eliminar información\n"));

    if (answer === 1) {

        var pregunta = "si"
        while (pregunta === "si"){

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

            var pregunta = prompt("¿Desea agregar más información?(si/no): ")


        }

    }

    if (answer === 2) {

        console.log("Información Personal");
        var respuesta = parseInt(prompt("Ingrese el ID de la persona a revisar:"));

        for (let i of jsonj) {
            
            if (i.informacion_personal.identificación === respuesta) {

                console.clear();

                console.log("------------------------------------------------");
                console.log(`  DATOS: ${i.informacion_personal.nombre}`);
                console.log("------------------------------------------------\n");
                console.log("");

                console.log(`Identificacion: " ${i.informacion_personal.identificación}`);
                console.log(`Nombre: " ${i.informacion_personal.nombre}`);
                console.log(`Edad: ${i.informacion_personal.edad}`);
                console.log(`Dirección: ${i.informacion_personal.direccion.calle} ${i.informacion_personal.direccion.numero} ${i.informacion_personal.direccion.ciudad}`);
                console.log(`Correo: ${i.informacion_personal.contacto.correo}`);
                console.log(`Teléfono: ${i.informacion_personal.contacto.telefono}`);
                
            }
        }
    }

    if (answer === 3) {

        var estudiante = parseInt(prompt("¿Cual numero de identificacion vas a cambiar? "));

        for (let i of jsonj) {

            if (i.informacion_personal.identificación === estudiante) {

                console.clear();

                console.log("------------------------------------------------");
                console.log(`  DATOS: ${i.informacion_personal.nombre}`);
                console.log("------------------------------------------------\n");
                console.log("");

                console.log(`Identificacion: " ${i.informacion_personal.identificación}`);
                console.log(`Nombre: " ${i.informacion_personal.nombre}`);
                console.log(`Edad: ${i.informacion_personal.edad}`);
                console.log(`Dirección: ${i.informacion_personal.direccion.calle} ${i.informacion_personal.direccion.numero} ${i.informacion_personal.direccion.ciudad}`);
                console.log(`Correo: ${i.informacion_personal.contacto.correo}`);
                console.log(`Teléfono: ${i.informacion_personal.contacto.telefono}`);
                console.log("")

                jsonj["informacion_personal"] = {}; 
                let datoCambiar = parseInt(prompt("Que te gustaría cambiar del estudiante:\n1. ID: \n2. Nombre: \n3. Edad: \n4. Calle: \n5. Numero de calle: \n6. Ciudad: \n7. Correo: \n8. Telefono: \n "));
                
                
                if (datoCambiar === 1) {
                    newid = parseInt(prompt("Ingresa el nuevo id: "))
                    i.informacion_personal.identificación = newid
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 2) {
                    newname = prompt("Ingresa el nuevo nombre: ")
                    i.informacion_personal.nombre = newname
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 3) {
                    newage = parseInt(prompt("Ingresa la nueva edad: "))
                    i.informacion_personal.edad = newage
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 4) {
                    newstreet = prompt("Ingresa la nueva calle: ")
                    i.informacion_personal.calle = newstreet
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 5) {
                    newadrees = parseInt(prompt("Ingresa el nuevo numero de calle: "))
                    i.informacion_personal.numero = newadrees
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 6) {
                    newcity = parseInt(prompt("Ingresa la nueva ciudad: "))
                    i.informacion_personal.ciudad = newcity
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 7) {
                    newemail = parseInt(prompt("Ingresa el nuevo correo: "))
                    i.informacion_personal.correo = newemail
                    console.log("Cambio realizado!")
                }
                if (datoCambiar === 8) {
                    newphone = parseInt(prompt("Ingresa el nuevo numero de telefono: "))
                    i.informacion_personal.telefono = newphone
                    console.log("Cambio realizado!")
                }

                console.log("")
                console.log(`Identificacion:  ${i.informacion_personal.identificación}`);
                console.log(`Nombre:  ${i.informacion_personal.nombre}`);
                console.log(`Edad: ${i.informacion_personal.edad}`);
                console.log(`Dirección: ${i.informacion_personal.direccion.calle} ${i.informacion_personal.direccion.numero} ${i.informacion_personal.direccion.ciudad}`);
                console.log(`Correo: ${i.informacion_personal.contacto.correo}`);
                console.log(`Teléfono: ${i.informacion_personal.contacto.telefono}`);
            }
            
        }
    }

    if (answer === 4) {
        let idEliminar = parseInt(prompt("Ingrese el ID de la persona que desea eliminar:"));
        jsonj = jsonj.filter(person => person.informacion_personal.identificación !== idEliminar);
        console.log("Persona eliminada con éxito.");
        console.log(jsonj);
    }

    var preguntita = false
}
