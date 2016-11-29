function cuentaAtras(desde) {
    // Se notifica el valor al Worker
    postMessage(desde);

    // Se espera 1 segundo
    setTimeout(function () {
        // Se decrementa el contador
        desde--;
        //Se ejecuta de nuevo la función cuentaAtras con el nuevo contador
        cuentaAtras(desde)
    }, 1000);
}

cuentaAtras(10);