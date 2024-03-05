document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

/*FUNCION PARA INICIAR LA APP*/ 
function iniciarApp(){
    navegacionFija();
}

/*FUNCION PARA DEJAR LA NAVEGACION FIJA EN DISPOSITIVOS PEQUEÑOS*/
function navegacionFija(){
    const barra = document.querySelector('.hheader');
    const principal = document.querySelector('.principal');

    window.addEventListener('scroll', function(){
        if(principal.getBoundingClientRect().top < 0){
            barra.classList.add('fijo');
        }else{
            barra.classList.remove('fijo');
        }
    });
}

