window.onload = () => {
        document.body.classList.remove("container");

        // Obtener los elementos
        const mostrarBoton = document.getElementById("mostrarBoton");
        const contenedorFlotante = document.querySelector(".contenedor-flotante");
        const boton1 = document.querySelector('.boton-1'); // Botón hacia adelante
        const boton2 = document.querySelector('.boton-2'); // Botón hacia atrás
        const botonSecuencia = document.getElementById("iniciarSecuencia"); // Botón para iniciar la secuencia de imágenes
        const parrafos = document.querySelectorAll(".contenedor-flotante p");
        const contenedorImagenes = document.querySelector(".contenedor-imagenes"); // Contenedor de imágenes
        const imagenes = [];

        // Crear el array con las rutas de las imágenes
        for (let i = 1; i <= 54; i++) {
                imagenes.push(`img/UliandSofi/IMG${i}.jpg`);
        }

        let currentIndex = 0;

        // Mostrar el contenedor y el botón 1 al presionar "mostrarBoton"
        mostrarBoton.addEventListener("click", () => {
                contenedorFlotante.style.display = "block";
                setTimeout(() => {
                        contenedorFlotante.style.opacity = "1";
                        mostrarBoton.style.display = 'none'; // Ocultar el botón mostrarBoton
                }, 10);
        });

        // Mostrar siguiente párrafo al presionar el botón 1
        boton1.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % parrafos.length;
                actualizarParrafos();

                // Si estamos en el último párrafo, ocultar el botón 1
                if (currentIndex === parrafos.length - 1) {
                        boton1.style.display = 'none'; // Ocultar el botón 1 al llegar al último párrafo
                        botonSecuencia.style.display = 'inline-block'; // Mostrar el botón de iniciar secuencia
                }
                boton2.style.display = 'inline-flex'; // Mostrar el botón 2
        });

        // Mostrar párrafo anterior al presionar el botón 2
        boton2.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + parrafos.length) % parrafos.length;
                actualizarParrafos();

                // Si volvemos atrás, mostrar el botón 1 de nuevo
                if (currentIndex !== parrafos.length - 1) {
                        boton1.style.display = 'inline-flex'; // Mostrar el botón 1 si no estamos en el último párrafo
                        botonSecuencia.style.display = 'none'; // Ocultar el botón de iniciar secuencia
                }
        });

        // Función para actualizar los párrafos
        function actualizarParrafos() {
                parrafos.forEach((parrafo, index) => {
                        parrafo.style.display = index === currentIndex ? "block" : "none";
                });
        }

        // Inicializar la visibilidad de los párrafos
        actualizarParrafos();

        // Cuando se presiona el botón de iniciar secuencia
        botonSecuencia.addEventListener("click", () => {
                // Ocultar el contenedor de los párrafos
                contenedorFlotante.style.display = "none";

                // Mostrar el contenedor de las imágenes
                contenedorImagenes.style.display = "grid";

                // Agregar las imágenes al contenedor
                imagenes.forEach((imagenSrc, index) => {
                        const img = document.createElement("img");
                        img.src = imagenSrc;
                        img.alt = `Imagen ${index + 1}`;
                        img.classList.add("imagen-secuencia");
                        contenedorImagenes.appendChild(img);

                        // Hacer visible la imagen con un retraso entre cada una
                        setTimeout(() => {
                                img.style.opacity = "1";
                        }, index * 100); // Ajusta el retraso entre las imágenes
                });
        });
};
