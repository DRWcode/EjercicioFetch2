fetch("https://api.escuelajs.co/api/v1/categories")
    .then(response => response.json())
    .then(data => {
        let tabla = "";
        data.forEach(category => {
            tabla += `
                <tr>
                    <td>${category.name}</td>
                    <td><img src="${category.image}" alt="${category.name}" width="50"></td>
                </tr>
            `;
        });
        document.getElementById("tblCategories").innerHTML = tabla;
    })
    .catch(error => console.error("Error al obtener los datos: ", error));
