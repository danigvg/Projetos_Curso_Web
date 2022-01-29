function calculadora(tipo, valor) {
    console.log(tipo, valor);
    if (tipo === 'acao') {

        //Limpa visor
        if (valor === 'limpa') {
            document.getElementById('display').value = '';
        }

        //Insere Operador
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            let expressao = document.getElementById('display').value
            let ultimoCaractere = expressao.substr(-1);
            let operador = valor;
            let newexpressao;

            if (ultimoCaractere !== valor) {
                if (ultimoCaractere === '+' && operador === '-') {
                    newexpressao = expressao.replace(expressao.substr(-1), '-');
                    document.getElementById('display').value = newexpressao;
                } else if (ultimoCaractere === '+' && operador === '*') {
                    newexpressao = expressao.replace(expressao.substr(-1), '*');
                    document.getElementById('display').value = newexpressao;
                } else if(ultimoCaractere === '+' && operador === '/'){
                    newexpressao = expressao.replace(expressao.substr(-1), '/');
                    document.getElementById('display').value = newexpressao;
                 }else if (ultimoCaractere === '-' && operador === '+') {
                    newexpressao = expressao.replace(expressao.substr(-1), '+');
                    document.getElementById('display').value = newexpressao;
                } else if (ultimoCaractere === '-' && operador === '*') {
                    newexpressao = expressao.replace(expressao.substr(-1), '*');
                    document.getElementById('display').value = newexpressao;
                } else if (ultimoCaractere === '-' && operador === '/') {
                    newexpressao = expressao.replace(expressao.substr(-1), '/');
                    document.getElementById('display').value = newexpressao;
                } else if (ultimoCaractere === '*' && operador === '/') {
                    newexpressao = expressao.replace(expressao.substr(-1), '/');
                    document.getElementById('display').value = newexpressao;
                } else if (ultimoCaractere === '/' && operador === '*') {
                    newexpressao = expressao.replace(expressao.substr(-1), '*');
                    document.getElementById('display').value = newexpressao;
                } else {
                    document.getElementById('display').value += valor;
                }
            }
        }

        //Apaga ultimo caractere 
        if (valor === 'apaga') {
            document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
        }

        //realiza conta
        if (valor === '=') {
            let conta = eval(document.getElementById('display').value);
            document.getElementById('display').value = conta;
        }

    } else if (tipo === 'numero') {
        document.getElementById('display').value += valor;
    };
};