document.addEventListener("DOMContentLoaded", function() {
    // Obtener la referencia de la tabla
    var tabla = document.getElementById("tablaHobbies");

    // Datos de ejemplo para la tabla de estadísticas
    var datos = [
        { hobby: "Cine", usuarios: 150 },
        { hobby: "Programación", usuarios: 250 },
        { hobby: "Arte", usuarios: 100 },
        { hobby: "Música", usuarios: 300 },
        { hobby: "Literatura", usuarios: 200 },
        { hobby: "Videojuegos", usuarios: 400 }
    ];

    // Recorrer los datos y crear las filas de la tabla
    datos.forEach(function(dato) {
        var fila = document.createElement("tr");
        var celdaHobby = document.createElement("td");
        var celdaUsuarios = document.createElement("td");

        celdaHobby.textContent = dato.hobby;
        celdaUsuarios.textContent = dato.usuarios;

        fila.appendChild(celdaHobby);
        fila.appendChild(celdaUsuarios);

        tabla.appendChild(fila);
    });
});
