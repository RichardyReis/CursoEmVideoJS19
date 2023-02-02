function multiplicar () {
    var number = document.querySelector('input#fator1');
    var n = Number(number.value);
    var resultado = document.querySelector('div#tabuada');
    var produto = 0;
    var contador = 1;
    if (n == '') {
        window.alert('Erro! Digite algum valor!')
    } else {
        if ( n <= 999 && n >= -999) {
            while (contador <= 10) {
                produto = n * contador;
                resultado.innerHTML += (`${n} x ${contador} = ${produto}.<br>`);
                contador++;
            }
        } else {
            window.alert("Digite um número inferior à 1'000 e superior à -1'000!");
        }
    }
    
}