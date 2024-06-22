document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('a[href="index.html"]');
    const cafeCalienteMenu = document.querySelector('a[href="#cafe-caliente"]');
    const cafeHeladoMenu = document.querySelector('a[href="#cafe-helado"]');
    const favoritosMenu = document.querySelector('a[href="#favoritos"]');

    
    function mostrarProductos(categoria) {
        const productos = document.querySelectorAll('.item');
        productos.forEach(producto => {
            if (categoria === 'all' || producto.classList.contains(categoria)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        location.reload(); 
    });

    cafeCalienteMenu.addEventListener('click', (event) => {
        event.preventDefault();
        mostrarProductos('cafe-caliente');
    });

    cafeHeladoMenu.addEventListener('click', (event) => {
        event.preventDefault();
        mostrarProductos('cafe-helado');
    });

    favoritosMenu.addEventListener('click', (event) => {
        event.preventDefault();
        mostrarProductos('favoritos');
    });

   
    mostrarProductos('all');
});
