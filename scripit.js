function calculadora(){
    const operacao = Number(prompt('escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potencia (**)'));

    if (!operacao || operacao >= 7){
        alert('Operação inválida!');
        calculadora();
    }else {
    
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado = 0;

    if (!n1 || !n2){
        alert('Parâmetros inválidos!');
        calculadora();
    } else {
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        };
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        };
    
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        };
    
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        };
    
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao();
        };
    
        function potencia(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
            novaOperacao();
        };
    
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação?\n 1 - sim\n 2 - não');
    
            if(opcao == 1){
                calculadora();
            } else if (opcao == 2){
                alert('Até mais!');
            }else{
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        }
    }

    

    /*if (operacao == 1) {
        soma();
    }else if (operacao == 2) {
        subtracao();
    }else if(operacao == 3) {
        multiplicacao();
    }else if(operacao == 4) {
        divisaoReal();
    }else if(operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potencia();
    };}*/

    switch (operacao){
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potencia();
            break;
    }
};
};
calculadora();