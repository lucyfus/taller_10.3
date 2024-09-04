document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor');
    let items = JSON.parse(localStorage.getItem('items')) || [];

    function actualizarVista() {
        contenedor.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.className = 'list-group-item';
            contenedor.appendChild(li);
        });
    }

    actualizarVista();

    const inputItem = document.getElementById('item');
    const btnAgregar = document.getElementById('agregar');

    // Agregar nuevo ítem
    btnAgregar.addEventListener('click', function () {
        const nuevoItem = inputItem.value.trim();
        if (nuevoItem !== '') {
            items.push(nuevoItem);
            localStorage.setItem('items', JSON.stringify(items));
            actualizarVista();
            inputItem.value = '';
        }
    });

    // Limpiar listado
    const btnLimpiar = document.getElementById('limpiar');
    btnLimpiar.addEventListener('click', function () {
        items = [];
        localStorage.removeItem('items');
        actualizarVista();
    });
});

/*Explicación del Código:
Carga Inicial del Listado:

Cuando la página se carga (DOMContentLoaded), se obtiene el listado de localStorage (o se inicia un array vacío si no hay nada guardado).
La función actualizarVista recorre los ítems almacenados y los añade a la lista visual (<ul>).
Agregar Nuevo Ítem:

Al hacer clic en el botón "Agregar", se obtiene el valor del campo de entrada, se verifica que no esté vacío, y se agrega al array de items.
Luego, el array actualizado se guarda nuevamente en localStorage, se actualiza la vista para reflejar el nuevo ítem, y se limpia el campo de entrada.
Limpiar Listado:

Al hacer clic en el botón "Limpiar", se vacía el array de items, se elimina el ítem del localStorage, y se actualiza la vista para mostrar una lista vacía.
Conclusión:
Con este código, los ítems añadidos a la lista se guardan en localStorage, lo que permite que se mantengan incluso si cierras y vuelves a abrir el navegador. 
Además, al pulsar el botón "Limpiar", se elimina todo el contenido tanto de la lista visual como de localStorage.*/