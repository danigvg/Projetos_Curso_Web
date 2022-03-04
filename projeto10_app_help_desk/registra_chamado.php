<?php
    session_start();
    
    //refazer o codigo fazendo com que se crie uma Numero de chamado para cada chamado aberto;      
    foreach($_POST as $indx => $valor){
        $troca_caractere[$indx] = str_replace('#' , '-', $_POST[$indx]);
    }
    
    $dados_chamado = $_SESSION['id'] . '#' . implode('#', $troca_caractere) . PHP_EOL;    
    print_r($dados_chamado);
    //abre e cria o arquivo
    $arquivo_form = fopen('formulario.txt' , 'a');
    //escreve os dados no arquivo
    fwrite($arquivo_form, $dados_chamado);
    // fecha o arquivo.
    fclose($arquivo_form);
    //redireciona para abrir um novo chamado
    header('Location: abrir_chamado.php');
  
?>