// ----------------------------------------------------------------
//  ANIMACION Joe Musashi (Personaje del juego Shinobi)
// ----------------------------------------------------------------
window.onload = () => {
    const contPrincipal = document.querySelector('.contenedor__principal');

    let musashi = creaElemento('div', 'class', 'Joe__Musashi');
    contPrincipal.appendChild(musashi);

    let atacando = false;
    window.lanzando = false;
    window.arma = undefined;

    const idBotones = {
        ataque: ['div', 'class', 'Joe__Musashi ataque', 110],
        ataqueKatana: ['div', 'class', 'Joe__Musashi katana', 550],
        lanzaSuriken: ['div', 'class', 'Joe__Musashi lanza-suriken', 110],
        lanzaPow: ['div', 'class', 'Joe__Musashi lanza-pow', 200]
    }

    console.log(Object.keys(idBotones));

    // -------------------------------------------------------------
    document.addEventListener('click', (event) => {
        console.log(event.target.id);
        let boton = event.target.id;

        if (Object.keys(idBotones).includes(boton) && !atacando) {
            atacando = true;
            contPrincipal.removeChild(musashi);

            let argS = idBotones[boton];
            console.log(argS);
            let ataque = creaElemento(argS[0], argS[1], argS[2]);
            contPrincipal.appendChild(ataque);

            setTimeout(() => {
                atacando = false;
                contPrincipal.removeChild(ataque);
                contPrincipal.appendChild(musashi);

                iniciaLanzamientosSurikenPow(argS[2], contPrincipal);
            }, argS[3]);
        }
    });
}

function creaElemento(etiqueta, attr, attrId) {
    let elemento = document.createElement(etiqueta);
    elemento.setAttribute(attr, attrId);
    return elemento;
}

function iniciaLanzamientosSurikenPow(gun, contP) {
    if (gun != 'Joe__Musashi lanza-suriken' && gun != 'Joe__Musashi lanza-pow') return

    if (arma != undefined) contP.removeChild(arma);

    let idArma = gun.replace('lanza-', '');
    arma = creaElemento('div', 'class', idArma, 0);
    contP.appendChild(arma);
}

