document.addEventListener('DOMContentLoaded', () => {
    const botonesPestana = document.querySelectorAll('.btn-pestana');
    const bloquesProyectos = document.querySelectorAll('.proyecto-contenido');

    botonesPestana.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesPestana.forEach(btn => btn.classList.remove('activa'));
            boton.classList.add('activa');

            const entornoSeleccionado = boton.getAttribute('data-entorno');

            bloquesProyectos.forEach(contenido => {
                if (contenido.id === `proyecto-${entornoSeleccionado}`) {
                    contenido.classList.add('activo');
                } else {
                    contenido.classList.remove('activo');
                }
            });
        });
    });    
});