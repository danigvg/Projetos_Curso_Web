# projeto_APPCalculadora
>Primeiro projeto da seção de JavaScript.

<hr>

## :camera: O Projeto

O gif a seguir mostra o projeto finalizado e em funcionamento.

<center>

![AppCalculadora](img/app_calculadora.gif)

</center>

<hr>

## :clipboard: Objetivo

A ideia do projeto é pegar o conhecimento sobre javascript adquirido até esse ponto da seção, e criar uma calculadora que realize as funções mais básicas. Optei por não utilizar o layout fornecido no ínicio do exercício, e assim praticar a utilização do bootstrap e das técnicas de glassmorphism, e o resultado foi esse:

Calculadora disponibilizada no curso | Calculadora criada neste projeto
:-------------------------------------:|:---------------------------------:
<img src="img/calculadora_curso.png" width="550px">|<img src="img/calculadora_projeto.png" width="550px">

Outro ponto alterado foi a captura do evento dos botões: **+**, **-**, **X**, **/** e **.**. O código desses botões dava abertura pra um erro que permitia colocar mais de um símbolo em sequência, impedindo a realização da conta. Para impedir isso criado uma condição que verifica se o símbolo anterior antes de escrever na tela. 

 - Sem a verificação isso acontece: 
 <center><img src="img/erro_calc.gif" width="640px"></center>

~~~javascript
if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
          }
~~~

- Com a verificação é possível realizar as operações:

<center>
<img src="img/calc_erro_corrigido.gif" width="640px">
</center>

~~~~javascript
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
~~~~
- E um detalhe diferencial que foi colocado no projeto foi o botão com a função de apagar: 
<center>
<img src="img/botao_apagar.gif" width="640px">


</center>

## :mailbox: Dados

**Meus contatos:**
<p>
   <a href="https://www.linkedin.com/in/danigvg/" alt="Linkedin">
     <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/danigvg/" /></a>
   <a href="danigvg@gmail.com" alt="Gmail">
     <img src="https://img.shields.io/badge/-Gmail-FF0000?style=flat-square&labelColor=FF0000&logo=gmail&logoColor=white&link=danigvg@gmail.com"/></a>   
</p>

:file_folder: [Todos os projetos](https://github.com/danigvg/projetos_curso_web) 