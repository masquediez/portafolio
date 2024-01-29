function changePage(element) {
    // Obtener todos los elementos con la clase 'nav-item'
    var navItems = document.getElementsByClassName('nav-item');

    // Eliminar la clase 'active' de todos los elementos
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
    }

    // Agregar la clase 'active' al elemento clicado
    element.classList.add('active');
}
