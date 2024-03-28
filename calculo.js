function meuScopo(){
    const calcular = document.querySelector('.calcular');
    const limpar = document.querySelector('.limpar');
    const result = document.getElementById('resultado');

    function Primo(n) {
        let divisor = 0;

        for(let i = 1; i <= n; i++){
            if(n % i === 0){
                divisor += 1;
            }
        }
        return divisor === 2;     
    }

    function calcNumber() {
        const n = parseInt(document.querySelector('.valor').value);
        let resultado = '';

        if (isNaN(n)) {
        alert('Número inválido, por favor, insira números positivos maiores que zero');
        return;
        }

        if (n % 2 == 0) {
        resultado += `<br/> ${n} é par   `;
        } 
        else {
            resultado += `<br/>${n} é ímpar `;
        }

        if(Primo(n)){
            resultado += `e primo`
        }
    

        // Adicionando o novo resultado abaixo do anterior
        result.innerHTML += `${resultado}`;
    }


    function limparCampos() {
        document.querySelector('.valor').value = '';
        result.innerHTML = ' <br/>Resultado';
    }

    calcular.addEventListener('click', calcNumber);
    limpar.addEventListener('click', limparCampos);
}

meuScopo();