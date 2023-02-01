// For submit
const submit = document.querySelector('#submit');
const input = document.querySelector('#nome');
const submitConvertor = document.querySelector('.submit-convertor');

input.addEventListener("input", function() {
    let valorInput = input.value;

    if(valorInput.length >= 4) {
        submit.removeAttribute('disabled');
    }
    if(valorInput.length <= 3) {
        submit.setAttribute('disabled', true);
    }
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    escribirNome(input.value);
    submitConvertor.removeAttribute('disabled');

    input.value = '';

    window.scrollTo({
        top: 300,
        behavior: "smooth"
    });
})

submitConvertor.addEventListener('click', function(el) {
    el.preventDefault();

    // calculoMoneda();
});


function escribirNome(inputNome) {
    const divNome = document.querySelector('#nome-user');
    const p = document.createElement('p');
    
    p.innerText = `Olá, ${inputNome.toUpperCase()}`;
    
    divNome.appendChild(p);
}


// Realizar calculo

/* function calculoMoneda() {
    let moedaUser = document.querySelector('#sua-moeda');
    let moedaDesejada = document.querySelector('#moeda-desejo');

    // La moneda del usuario = 1
    moedaUser.value = 1;
    
}

function valorMoedas() {
    let moedaDesejada = document.querySelector('#moeda-desejo');
     
}*/